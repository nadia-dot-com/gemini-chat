import { useState } from "react";
import { ChatMessage } from "../types/types";
import { INFORMATIVE_MESSAGES } from "../data/messages";
import { v4 as uuidv4 } from "uuid";

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
      { id: uuidv4(), message: currentPrompt, type: "user" },
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
        { id: uuidv4(), message: data.text, type: "model" },
      ]);
    } catch (error) {
      console.error(error);

      const message =
        error instanceof Error &&
        error.message === INFORMATIVE_MESSAGES.expiredLimit
          ? INFORMATIVE_MESSAGES.expiredLimit
          : INFORMATIVE_MESSAGES.genericError;

      setChatHistory((prev) => [
        ...prev,
        {
          id: uuidv4(),
          message,
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
