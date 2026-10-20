import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { name, contactInfo, projectType, message } = data;

    if (!name || !contactInfo || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // TODO: Wire up to Resend, SendGrid, or Google Sheets webhooks
    console.log("[Anvik Studio] New Contact Submission:", {
      timestamp: new Date().toISOString(),
      name,
      contactInfo,
      projectType,
      message,
    });

    return NextResponse.json({
      success: true,
      message: "Enquiry received successfully",
    });
  } catch (err) {
    console.error("[Anvik Studio] Contact submission error:", err);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
