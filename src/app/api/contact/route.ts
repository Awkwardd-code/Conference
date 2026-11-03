export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  if (!body || typeof body !== "object") {
    return Response.json({ message: "Invalid request body" }, { status: 400 });
  }

  const data = body as Record<string, unknown>;
  const requiredFields = ["name", "email", "category"];
  if (requiredFields.some((field) => typeof data[field] !== "string" || !data[field]?.trim())) {
    return Response.json({ message: "Name, email, and category are required" }, { status: 400 });
  }

  return Response.json({ message: "Contact request received" }, { status: 201 });
}
