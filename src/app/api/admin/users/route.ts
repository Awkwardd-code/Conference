import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ users: [] });
}

export async function DELETE() {
  return NextResponse.json({ message: "User deletion endpoint placeholder" }, { status: 501 });
}
