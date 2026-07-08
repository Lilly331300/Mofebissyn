import { NextResponse } from "next/server";

function cleanText(value: unknown) {
  if (typeof value !== "string") return "";
  return value.trim();
}

function cleanArray(value: unknown) {
  if (!Array.isArray(value)) return "";
  return value.map((item) => String(item).trim()).filter(Boolean).join(", ");
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const payload = {
      submittedAt: new Date().toISOString(),
      fullName: cleanText(body.fullName),
      email: cleanText(body.email),
      phone: cleanText(body.phone),
      interest: cleanText(body.interest),
      interestOther: cleanText(body.interestOther),
      location: cleanText(body.location),
      locationOther: cleanText(body.locationOther),
      currentStage: cleanText(body.currentStage),
      triedAdmissionOrVisa: cleanText(body.triedAdmissionOrVisa),
      stressfulPart: cleanText(body.stressfulPart),
      stressfulPartOther: cleanText(body.stressfulPartOther),
      transcriptDifficulty: cleanText(body.transcriptDifficulty),
      transcriptFeature: cleanText(body.transcriptFeature),
      visaChallenge: cleanText(body.visaChallenge),
      testSupport: cleanText(body.testSupport),
      accessPreference: cleanText(body.accessPreference),
      platformTurnOff: cleanText(body.platformTurnOff),
      desiredFeatures: cleanArray(body.desiredFeatures),
      convenienceFee: cleanText(body.convenienceFee),
      processTimeline: cleanText(body.processTimeline),
      updatePreference: cleanText(body.updatePreference),
      bonusAnswer: cleanText(body.bonusAnswer),
      launchTicketStatus: "Eligible for Mofebissyn launch ticket",
      launchTicketBenefit:
        "May qualify for discounts on selected services when the project launches",
      source: "Mofebissyn user experience questionnaire",
    };

    if (!payload.fullName || !payload.email || !payload.phone) {
      return NextResponse.json(
        {
          ok: false,
          message: "Full name, email, and phone number are required.",
        },
        { status: 400 }
      );
    }

    if (!isValidEmail(payload.email)) {
      return NextResponse.json(
        {
          ok: false,
          message: "Please enter a valid email address.",
        },
        { status: 400 }
      );
    }

    const endpoint = process.env.GOOGLE_SHEET_WEBHOOK_URL;

    if (!endpoint) {
      console.log("MOFEBISSYN_SURVEY_RESPONSE", payload);

      return NextResponse.json({
        ok: true,
        message:
          "Response received locally. Add GOOGLE_SHEET_WEBHOOK_URL to save to Google Sheet.",
        ticketStatus: "Launch ticket reserved",
      });
    }

    const sheetResponse = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "text/plain;charset=utf-8",
      },
      body: JSON.stringify(payload),
    });

    const resultText = await sheetResponse.text();

    if (!sheetResponse.ok) {
      console.error("Google Sheet error:", resultText);

      return NextResponse.json(
        {
          ok: false,
          message: "Could not save response to sheet.",
        },
        { status: 500 }
      );
    }

    return NextResponse.json({
      ok: true,
      message: "Survey response saved successfully.",
      ticketStatus: "Launch ticket reserved",
    });
  } catch (error) {
    console.error("Survey submission error:", error);

    return NextResponse.json(
      {
        ok: false,
        message: "Submission failed. Please try again.",
      },
      { status: 500 }
    );
  }
}