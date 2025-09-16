"use client";
import { useState } from "react";
import { askGemini } from "@/lib/gemini";

type Message = {
  role: "user" | "gemini";
  text: string;
};

export default function HelpDrawer() {
  const [messages, setMessages] = useState<Message[]>([]); // 👈 stores multiple Q&A
  const [inputQuestion, setInputQuestion] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleAsk() {
    if (!inputQuestion.trim()) return;

    // Add user message
    const newMessages: Message[] = [
      ...messages,
      { role: "user", text: inputQuestion },
    ];
    setMessages(newMessages);

    // Clear input & show loading
    setInputQuestion("");
    setLoading(true);

    try {
      // Call Gemini
      const response = await askGemini(inputQuestion);

      // Add Gemini response
      setMessages([...newMessages, { role: "gemini", text: response }]);
    } catch (err) {
      setMessages([
        ...newMessages,
        { role: "gemini", text: "⚠️ Something went wrong. Please try again." },
      ]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="p-4 flex flex-col h-full">
      <h2 className="text-lg font-bold mb-4">Ask Gemini AI</h2>

      {/* Chat Window */}
      <div className="flex-1 overflow-y-auto mb-4 space-y-3">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`flex ${
              msg.role === "user" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`px-4 py-2 rounded-lg max-w-xs ${
                msg.role === "user"
                  ? "bg-blue-600 text-white text-right"
                  : "bg-gray-200 text-gray-800 text-left"
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}
        {loading && (
          <div className="flex justify-start">
            <div className="bg-gray-200 text-gray-500 px-4 py-2 rounded-lg max-w-xs italic animate-pulse">
              Gemini is typing...
            </div>
          </div>
        )}
      </div>

      {/* Input + Button */}
      <div className="flex items-center space-x-2 mb-12">
        <textarea
          value={inputQuestion}
          onChange={(e) => setInputQuestion(e.target.value)}
          className="flex-1 p-2 border rounded text-black"
          placeholder="Type your question..."
          onKeyUpCapture={(e) => e.key === "Enter" && handleAsk()}
        />
        <button
          onClick={handleAsk}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Ask
        </button>
      </div>
    </div>
  );
}
