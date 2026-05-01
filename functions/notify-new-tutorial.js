const { createClient } = require('@supabase/supabase-js');
const sgMail = require('@sendgrid/mail');

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_KEY
);

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

exports.handler = async function(event, context) {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  const authHeader = event.headers['x-admin-secret'];
  if (authHeader !== process.env.ADMIN_SECRET) {
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

  const { data: users, error } = await supabase
    .from('users')
    .select('email, name')
    .eq('email_notifications', true);

  if (error) {
    console.error('Supabase error:', error);
    return { statusCode: 500, body: 'Failed to fetch users' };
  }

  if (!users || users.length === 0) {
    return { statusCode: 200, body: JSON.stringify({ sent: 0 }) };
  }

  const messages = users.map(function(user) {
    return {
      to: user.email,
      from: 'noreply@cpblog.dev',
      subject: 'New Tutorial: ' + tutorial.title,
      text: [
        'Hi ' + user.name + ',',
        '',
        'A new tutorial has been published on CP Blog:',
        '',
        tutorial.title,
        tutorial.excerpt,
        '',
        'Category: ' + tutorial.category,
        'Level: ' + tutorial.level,
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
        '<p><strong>Category:</strong> ' + tutorial.category + '<br>',
        '<strong>Level:</strong> ' + tutorial.level + '<br>',
        '<strong>Difficulty:</strong> ' + tutorial.difficulty + '</p>',
        '<a href="https://cpblog.dev/tutorials/' + tutorial.slug + '" style="background:#7c6af7;color:#fff;padding:10px 20px;border-radius:8px;text-decoration:none;font-weight:600">Read Tutorial</a>',
        '<hr>',
        '<p style="font-size:12px;color:#888">',
        'You are receiving this because you opted in to email notifications.<br>',
        '<a href="https://cpblog.dev/settings">Manage preferences</a>',
        '</p>'
      ].join('')
    };
  });

  try {
    await sgMail.send(messages);
    return {
      statusCode: 200,
      body: JSON.stringify({ sent: messages.length })
    };
  } catch(err) {
    console.error('SendGrid error:', err);
    return { statusCode: 500, body: 'Failed to send emails' };
  }
};