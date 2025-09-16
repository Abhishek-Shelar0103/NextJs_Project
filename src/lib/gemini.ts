import { GoogleGenerativeAI } from "@google/generative-ai";

// console.log("key", process.env.NEXT_PUBLIC_GEMINI_API_KEY);
const genAI = new GoogleGenerativeAI(
  process.env.NEXT_PUBLIC_GEMINI_API_KEY as string
);
// // console.log(process.env.GEMINI_API_KEY);

// export async function askGemini(prompt: string) {
//   const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });
//   const result = await model.generateContent(prompt);
//   return result.response.text();
// }
export async function askGemini(prompt: string) {
  const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

  const systemPrompt = `
    You are a helpful AI assistant for a restaurant booking system. 
    You ONLY answer questions related to:
    - Table reservations
    - Restaurant timings
    - Menu inquiries
    - Cancellation or modifications
    - Customer support for restaurant services

    If the user asks anything unrelated (like coding, politics, or general knowledge), 
    politely respond with:
    "⚠️ Sorry, I can only help with restaurant booking-related queries."

    User question: ${prompt}
  `;

  const result = await model.generateContent(systemPrompt);
  return result.response.text();
}
