const sgMail = require('@sendgrid/mail');

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  const secret = event.headers['x-admin-secret'];
  if (secret !== process.env.ADMIN_SECRET) {
    return { statusCode: 401, body: 'Unauthorized' };
  }

  let body;
  try {
    body = JSON.parse(event.body);
  } catch {
    return { statusCode: 400, body: 'Invalid JSON' };
  }

  const { title, excerpt, slug, recipients } = body;
  if (!title || !slug || !recipients || !recipients.length) {
    return { statusCode: 400, body: 'Missing required fields' };
  }

  sgMail.setApiKey(process.env.SENDGRID_API_KEY);

  const tutorialUrl = `https://cp-blog-378a3.web.app/#tutorial/${slug}`;

  const messages = recipients.map(email => ({
    to: email,
    from: 'noreply@cp-blog.dev',
    subject: `New Tutorial: ${title}`,
    html: `
      <div style="max-width:560px;margin:0 auto;font-family:sans-serif;background:#0a0a0f;color:#e8e8f0;padding:32px;border-radius:12px">
        <h2 style="color:#7c6af7;margin-bottom:4px">New Tutorial Published</h2>
        <h1 style="font-size:1.4rem;margin-top:0">${title}</h1>
        <p style="color:#8888a8;line-height:1.7">${excerpt}</p>
        <a href="${tutorialUrl}" style="display:inline-block;background:#7c6af7;color:#fff;padding:10px 24px;border-radius:8px;text-decoration:none;font-weight:600;margin-top:16px">Read Tutorial</a>
        <p style="margin-top:32px;font-size:0.75rem;color:#55556a">You are receiving this because you have email notifications enabled. Visit your settings to unsubscribe.</p>
      </div>
    `,
  }));

  try {
    await Promise.all(messages.map(m => sgMail.send(m)));
    return { statusCode: 200, body: JSON.stringify({ sent: recipients.length }) };
  } catch (err) {
    console.error(err);
    return { statusCode: 500, body: 'Failed to send emails' };
  }
};