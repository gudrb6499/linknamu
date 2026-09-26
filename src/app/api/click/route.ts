import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const { id } = await request.json();

  if (!process.env.MONGODB_URI) {
    console.warn(`[click] MONGODB_URI not set, skipping persist for "${id}"`);
    return NextResponse.json({ ok: true, persisted: false });
  }

  // ponytail: MongoDB wiring not connected yet, add when MONGODB_URI is set in .env.local
  return NextResponse.json({ ok: true, persisted: false });
}
