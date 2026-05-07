import { useState } from "react";
import { ChatMessage } from "../types/types";
import { INFORMATIVE_MESSAGES } from "../data/messages";

export function useChatLogic() {
  const [inputText, setInputText] = useState("");
  const [loading, setLoading] = useState(false);
  const [chatHistory, setChatHistory] = useState<ChatMessage[]>([]);

  const sendMessage = async () => {
    if (loading || !inputText.trim()) return;

    const currentPrompt = inputText;
    setLoading(true);
    setInputText("");
    setChatHistory((prev) => [
      ...prev,
      { message: currentPrompt, type: "user" },
    ]);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt: currentPrompt }),
      });
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Server returned an error");
      }

      setChatHistory((prev) => [
        ...prev,
        { message: data.text, type: "model" },
      ]);
    } catch (error) {
      console.error(error);
      setChatHistory((prev) => [
        ...prev,
        {
          message: INFORMATIVE_MESSAGES.uiError,
          type: "system",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return {
    inputText,
    setInputText,
    loading,
    chatHistory,
    sendMessage,
  };
}
