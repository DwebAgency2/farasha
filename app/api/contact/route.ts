import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const data = await req.json();

    if (!data.email || !data.name) {
      return NextResponse.json(
        { error: "Name and Email are required fields." },
        { status: 400 }
      );
    }

    // In a production environment with SMTP credentials:
    // const transporter = nodemailer.createTransport({...});
    // await transporter.sendMail({...});

    console.log("=========================================");
    console.log("[FarashaCRP New Intake Received]");
    console.log(`Type: ${data.type}`);
    console.log(`From: ${data.name} <${data.email}>`);
    console.log(`Phone: ${data.phone || "N/A"}`);
    if (data.organization) console.log(`Organization: ${data.organization}`);
    if (data.rolesNeeded) console.log(`Role Needed: ${data.rolesNeeded}`);
    if (data.currentRole) console.log(`Candidate Role: ${data.currentRole}`);
    if (data.therapeuticArea || data.therapeuticAreas)
      console.log(`Therapeutic Area: ${data.therapeuticArea || data.therapeuticAreas}`);
    if (data.studyPhase) console.log(`Study Phase: ${data.studyPhase}`);
    if (data.resumeAttached) console.log(`Resume: ${data.resumeAttached}`);
    if (data.details || data.message) console.log(`Notes/Message: ${data.details || data.message}`);
    console.log("=========================================");

    return NextResponse.json({
      success: true,
      message: "Inquiry received successfully. Amanda will respond within one business day.",
    });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { error: "Internal server error processing inquiry." },
      { status: 500 }
    );
  }
}
