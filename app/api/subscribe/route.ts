import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { email, name, segment, source, resource } = await req.json();

    if (!email || !email.includes("@")) {
      return NextResponse.json(
        { error: "A valid email address is required." },
        { status: 400 }
      );
    }

    const mailchimpApiKey = process.env.MAILCHIMP_API_KEY;
    const mailchimpListId = process.env.MAILCHIMP_LIST_ID;

    // If Mailchimp API keys are configured in environment variables:
    if (mailchimpApiKey && mailchimpListId) {
      const dataCenter = mailchimpApiKey.split("-")[1];
      const url = `https://${dataCenter}.api.mailchimp.com/3.0/lists/${mailchimpListId}/members`;

      const response = await fetch(url, {
        method: "POST",
        headers: {
          Authorization: `apikey ${mailchimpApiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email_address: email,
          status: "subscribed",
          merge_fields: {
            FNAME: name || "",
          },
          tags: [
            segment ? `Segment: ${segment}` : "Segment: General",
            source ? `Source: ${source}` : "Source: Website",
          ],
        }),
      });

      if (!response.ok && response.status !== 400) {
        throw new Error(`Mailchimp API error: ${response.statusText}`);
      }
    }

    console.log("=========================================");
    console.log("[FarashaCRP New Lead Magnet Subscription]");
    console.log(`Email: ${email}`);
    console.log(`Name: ${name || "N/A"}`);
    console.log(`Segment Tag: ${segment || "General"}`);
    console.log(`Source Tag: ${source || "Direct"}`);
    console.log(`Gated Resource: ${resource || "General Newsletter"}`);
    console.log("=========================================");

    return NextResponse.json({
      success: true,
      message: "Subscription recorded successfully.",
    });
  } catch (error) {
    console.error("Subscribe API error:", error);
    return NextResponse.json(
      { error: "Failed to process email subscription." },
      { status: 500 }
    );
  }
}
