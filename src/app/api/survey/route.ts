import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const payload = {
      ...body,
      submittedAt: new Date().toISOString(),
      source: "Mofebissyn landing page survey",
      launchTicketStatus: "Eligible for Mofebissyn launch ticket",
      launchTicketBenefit:
        "May qualify for discounts on selected services when the project launches",
      ticketNote:
        "Ticket is an early-interest reward and final service discounts will be announced at launch.",
    };

    const endpoint = process.env.GOOGLE_SHEET_WEBHOOK_URL;

    if (endpoint) {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Google Sheet endpoint failed");
      }
    } else {
      console.log("MOFEBISSYN_SURVEY_RESPONSE", payload);
    }

    return NextResponse.json({
      ok: true,
      message: "Response saved",
      ticketStatus: "Launch ticket reserved",
    });
  } catch (error) {
    console.error("Survey submission error:", error);

    return NextResponse.json(
      {
        ok: false,
        message: "Submission failed",
      },
      { status: 500 }
    );
  }
}