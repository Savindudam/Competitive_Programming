const admin  = require('firebase-admin');
const sgMail = require('@sendgrid/mail');

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT))
  });
}

const db = admin.firestore();

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

exports.handler = async function(event, context) {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  if (event.headers['x-admin-secret'] !== process.env.ADMIN_SECRET) {
    return { statusCode: 401, body: 'Unauthorized' };
  }

  let payload;
  try {
    payload = JSON.parse(event.body);
  } catch(e) {
    return { statusCode: 400, body: 'Invalid JSON' };
  }

  const { tutorial } = payload;
  if (!tutorial || !tutorial.title) {
    return { statusCode: 400, body: 'Missing tutorial data' };
  }

  let snapshot;
  try {
    snapshot = await db.collection('users')
      .where('email_notifications', '==', true)
      .get();
  } catch(e) {
    console.error('Firestore error:', e);
    return { statusCode: 500, body: 'Failed to fetch users' };
  }

  if (snapshot.empty) {
    return { statusCode: 200, body: JSON.stringify({ sent: 0 }) };
  }

  const messages = [];
  snapshot.forEach(function(docSnap) {
    const user = docSnap.data();
    if (!user.email) return;
    messages.push({
      to:      user.email,
      from:    'noreply@cpblog.dev',
      subject: 'New Tutorial: ' + tutorial.title,
      text: [
        'Hi ' + user.name + ',',
        '',
        'A new tutorial has been published on CP Blog:',
        '',
        tutorial.title,
        tutorial.excerpt,
        '',
        'Category: '   + tutorial.category,
        'Level: '      + tutorial.level,
        'Difficulty: ' + tutorial.difficulty,
        '',
        'Read it now: https://cpblog.dev/tutorials/' + tutorial.slug,
        '',
        'You are receiving this because you opted in to email notifications.',
        'Manage preferences: https://cpblog.dev/settings'
      ].join('\n'),
      html: [
        '<p>Hi ' + user.name + ',</p>',
        '<p>A new tutorial has been published on CP Blog:</p>',
        '<h2 style="font-family:sans-serif">' + tutorial.title + '</h2>',
        '<p>' + tutorial.excerpt + '</p>',
        '<p><strong>Category:</strong> '   + tutorial.category  + '<br>',
        '<strong>Level:</strong> '         + tutorial.level      + '<br>',
        '<strong>Difficulty:</strong> '    + tutorial.difficulty + '</p>',
        '<a href="https://cpblog.dev/tutorials/' + tutorial.slug + '" ',
        'style="background:#7c6af7;color:#fff;padding:10px 20px;border-radius:8px;text-decoration:none;font-weight:600">',
        'Read Tutorial</a>',
        '<hr>',
        '<p style="font-size:12px;color:#888">',
        'You are receiving this because you opted in to email notifications.<br>',
        '<a href="https://cpblog.dev/settings">Manage preferences</a>',
        '</p>'
      ].join('')
    });
  });

  if (!messages.length) {
    return { statusCode: 200, body: JSON.stringify({ sent: 0 }) };
  }

  try {
    await sgMail.send(messages);
    return { statusCode: 200, body: JSON.stringify({ sent: messages.length }) };
  } catch(e) {
    console.error('SendGrid error:', e);
    return { statusCode: 500, body: 'Failed to send emails' };
  }
};