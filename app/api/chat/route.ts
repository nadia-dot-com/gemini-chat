import { GoogleGenAI } from "@google/genai";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { prompt } = await request.json();
    const apiKey = process.env.NEXT_GEMINI_API_KEY;

    if (!prompt || !apiKey) {
      return NextResponse.json(
        { message: "Prompt is required" },
        { status: 400 },
      );
    }
    const ai = new GoogleGenAI({ apiKey });

    const response = await ai.models.generateContent({
      model: "gemini-2.0-flash",
      contents: prompt,
    });

    // for await (const chunk of response) {
    //   NextResponse.json({ message: chunk.text, status: 200 });
    // }
    return NextResponse.json({ text: response.text ?? '' }, { status: 200 });
  } catch (error) {
    console.error("Error generating content:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 },
    );
  }
}
