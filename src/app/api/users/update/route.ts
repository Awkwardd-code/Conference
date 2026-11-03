import { NextResponse } from "next/server";

export async function PUT() {
  return NextResponse.json({ message: "User update endpoint placeholder" }, { status: 501 });
}
