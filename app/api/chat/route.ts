import { INFORMATIVE_MESSAGES } from "@/features/chat/data/messages";
import { ApiError, GoogleGenAI } from "@google/genai";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { prompt } = await request.json();
    const apiKey = process.env.NEXT_GEMINI_API_KEY;

    if (!prompt || !apiKey) {
      return NextResponse.json(
        { message: INFORMATIVE_MESSAGES.promptIsMissing },
        { status: 400 },
      );
    }
    const ai = new GoogleGenAI({ apiKey });

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
    });

    return NextResponse.json({ text: response.text ?? "" }, { status: 200 });
  } catch (error) {
    console.error("Error generating content:", error);

    if (error instanceof ApiError && error.status === 429) {
      return NextResponse.json(
        { message: INFORMATIVE_MESSAGES.expiredLimit },
        { status: 429 },
      );
    }
    return NextResponse.json(
      { message: INFORMATIVE_MESSAGES.serverError },
      { status: 500 },
    );
  }
}
