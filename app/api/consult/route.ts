import { NextResponse } from "next/server";

/**
 * Consult request endpoint.
 *
 * TODO(client): this currently validates the payload and logs it on the
 * server. Before launch, forward the request to wherever enquiries should
 * land, for example a transactional email provider or the CRM, and add spam
 * protection. Nothing else in the form needs to change.
 */

type Payload = {
  name?: string;
  email?: string;
  phone?: string;
  location?: string;
  projectType?: string;
  budget?: string;
  timeline?: string;
  message?: string;
};

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export async function POST(request: Request) {
  let payload: Payload;

  try {
    payload = (await request.json()) as Payload;
  } catch {
    return NextResponse.json({ error: "Malformed request body." }, { status: 400 });
  }

  const name = payload.name?.trim() ?? "";
  const email = payload.email?.trim() ?? "";
  const location = payload.location?.trim() ?? "";

  if (name.length < 2 || !EMAIL.test(email) || location.length < 2 || !payload.projectType) {
    return NextResponse.json({ error: "Missing or invalid fields." }, { status: 422 });
  }

  console.info("[consult] request received", {
    name,
    email,
    location,
    projectType: payload.projectType,
    budget: payload.budget ?? null,
    timeline: payload.timeline ?? null,
    receivedAt: new Date().toISOString(),
  });

  return NextResponse.json({ ok: true }, { status: 201 });
}
