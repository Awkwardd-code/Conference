export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  if (!body || typeof body !== "object") {
    return Response.json({ message: "Invalid request body" }, { status: 400 });
  }

  const data = body as Record<string, unknown>;
  const requiredFields = ["firstName", "lastName", "organization", "designation", "email", "phone", "enquiryType", "message"];
  if (requiredFields.some((field) => typeof data[field] !== "string" || !data[field]?.trim())) {
    return Response.json({ message: "Please complete all required fields" }, { status: 400 });
  }

  const email = String(data.email).trim();
  const message = String(data.message).trim();
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return Response.json({ message: "Please provide a valid email address" }, { status: 400 });
  }
  if (message.length > 600) {
    return Response.json({ message: "Message must be 600 characters or fewer" }, { status: 400 });
  }

  return Response.json({ message: "Sponsorship enquiry received" }, { status: 201 });
}
