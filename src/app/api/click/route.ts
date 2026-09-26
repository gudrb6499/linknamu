import { NextRequest, NextResponse } from "next/server";
import { getClicksCollection } from "@/lib/mongodb";

export async function GET() {
  if (!process.env.MONGODB_URI) {
    return NextResponse.json({ counts: {} });
  }

  const collection = await getClicksCollection();
  const docs = await collection.find().toArray();
  const counts: Record<string, number> = {};
  for (const doc of docs) counts[doc._id] = doc.count;

  return NextResponse.json({ counts });
}

export async function POST(request: NextRequest) {
  const { id } = await request.json();

  if (!process.env.MONGODB_URI) {
    console.warn(`[click] MONGODB_URI not set, skipping persist for "${id}"`);
    return NextResponse.json({ ok: true, persisted: false });
  }

  const collection = await getClicksCollection();
  const doc = await collection.findOneAndUpdate(
    { _id: id },
    { $inc: { count: 1 } },
    { upsert: true, returnDocument: "after" }
  );

  return NextResponse.json({ ok: true, persisted: true, count: doc?.count ?? 0 });
}
