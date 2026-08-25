export default {
  async fetch(request, env) {
    const url = new URL(request.url)

    if (url.pathname === '/api/contact' && request.method === 'POST') {
      return handleContact(request, env)
    }

    return env.ASSETS.fetch(request)
  },
}

async function handleContact(request, env) {
  try {
    const { name, email, message } = await request.json()

    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ error: 'Missing required fields' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      )
    }

    const resendRes = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        // Sandbox sender — works without a verified domain, but only
        // delivers to the email address on your Resend account.
        from: 'onboarding@resend.dev',
        to: env.CONTACT_TO_EMAIL, // your own Resend signup email
        subject: `New contact form message from ${name}`,
        reply_to: email,
        text: `From: ${name} <${email}>\n\n${message}`,
      }),
    })

    if (!resendRes.ok) {
      const errText = await resendRes.text()
      return new Response(
        JSON.stringify({ error: 'Failed to send', details: errText }),
        { status: 502, headers: { 'Content-Type': 'application/json' } }
      )
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    })
  } catch (err) {
    return new Response(
      JSON.stringify({ error: 'Invalid request', details: err.message }),
      { status: 400, headers: { 'Content-Type': 'application/json' } }
    )
  }
}
