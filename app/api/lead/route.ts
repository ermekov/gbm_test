import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

// Демо-эндпоинт. На Этапе 2 замените запись в файл на CRM / WhatsApp-Telegram webhook / БД.
const FILE = path.join(process.cwd(), "data", "leads.json");

export async function POST(req: Request) {
  const body = await req.json();
  if (!body?.name || !body?.phone) {
    return NextResponse.json({ ok: false, error: "name and phone are required" }, { status: 400 });
  }

  let leads: unknown[] = [];
  try {
    leads = JSON.parse(await fs.readFile(FILE, "utf-8"));
  } catch {
    leads = [];
  }
  leads.push({ ...body, createdAt: new Date().toISOString() });
  await fs.writeFile(FILE, JSON.stringify(leads, null, 2));

  return NextResponse.json({ ok: true });
}

export async function GET() {
  try {
    const leads = JSON.parse(await fs.readFile(FILE, "utf-8"));
    return NextResponse.json(leads);
  } catch {
    return NextResponse.json([]);
  }
}
