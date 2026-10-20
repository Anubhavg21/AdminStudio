import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { url, email } = data;

    if (!url || !email) {
      return NextResponse.json(
        { error: "URL and email are required" },
        { status: 400 }
      );
    }

    // TODO: Wire up to Loom / notification workflow or CRM
    console.log("[Anvik Studio] New Free Audit Request:", {
      timestamp: new Date().toISOString(),
      url,
      email,
    });

    return NextResponse.json({
      success: true,
      message: "Audit request registered",
    });
  } catch (err) {
    console.error("[Anvik Studio] Audit submission error:", err);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
