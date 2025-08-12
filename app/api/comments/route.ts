import { NextResponse } from "next/server"

interface CommentPayload {
  name: string
  comment: string
}

export async function POST(req: Request) {
  try {
    const { name = "", comment = "" } = (await req.json()) as Partial<CommentPayload>
    if (!name.trim() || !comment.trim()) {
      return NextResponse.json({ ok: false, error: "Invalid payload" }, { status: 400 })
    }

    const entry = { name: name.trim(), comment: comment.trim(), createdAt: new Date().toISOString() }
    console.log("[comment]", entry)

    return NextResponse.json({ ok: true, data: entry })
  } catch (err) {
    console.error("/api/comments error", err)
    return NextResponse.json({ ok: false, error: "Server error" }, { status: 500 })
  }
} 