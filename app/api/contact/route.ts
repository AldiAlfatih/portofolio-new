import { NextResponse } from "next/server"

interface ContactPayload {
  name: string
  email: string
  message: string
  topic?: string
}

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as Partial<ContactPayload>
    const name = (body.name || "").trim()
    const email = (body.email || "").trim()
    const message = (body.message || "").trim()
    const topic = (body.topic || "General").trim()

    if (!name || !email || !message) {
      return NextResponse.json({ ok: false, error: "Invalid payload" }, { status: 400 })
    }

    const RESEND_API_KEY = process.env.RESEND_API_KEY
    const CONTACT_TO = process.env.CONTACT_TO || process.env.CONTACT_EMAIL

    if (RESEND_API_KEY && CONTACT_TO) {
      // Send email via Resend REST API to avoid extra dependency
      const subject = `New ${topic} inquiry from ${name}`
      const html = `
        <div style="font-family: system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif;">
          <h2>${subject}</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Topic:</strong> ${topic}</p>
          <p><strong>Message:</strong></p>
          <pre style="white-space: pre-wrap; font-family: inherit;">${message}</pre>
        </div>
      `

      const resp = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${RESEND_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "no-reply@resend.dev",
          to: CONTACT_TO,
          subject,
          html,
        }),
      })

      if (!resp.ok) {
        const text = await resp.text()
        console.error("Resend error:", resp.status, text)
        // Do not fail the request; consider it accepted
      }
    } else {
      console.log("[contact]", { name, email, topic, message })
    }

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error("/api/contact error", err)
    return NextResponse.json({ ok: false, error: "Server error" }, { status: 500 })
  }
} 