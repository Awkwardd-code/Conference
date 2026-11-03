import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ applications: [] });
}

export async function PUT() {
  return NextResponse.json({ message: "Application status endpoint placeholder" }, { status: 501 });
}
