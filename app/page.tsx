"use client";

import { LoadingSpinner } from "@/components/ui/LoadingSpinner";
import { ChatMessages } from "@/components/chat/ChatMessages";
import { useChatLogic } from "@/features/chat/hooks/useChatLogic";

export default function Home() {
  const {
    inputText,
    setInputText,
    loading,
    chatHistory,
    sendMessage,
  } = useChatLogic();

  const handleKeyDown = async (
    event: React.KeyboardEvent<HTMLTextAreaElement>,
  ) => {
    if (event.code === "Enter" && !event.shiftKey) {
      event.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className="pt-10 flex flex-col justify-center items-center w-[80dvh]">
      <ChatMessages chatHistory={chatHistory} />
      <div className="p-4 mb-4 h-2 justify-start w-full">
        {loading && <LoadingSpinner />}
      </div>

      <div className="relative w-full">
        <textarea
          className="p-4 pr-14 bg-secondary rounded-md relative "
          placeholder="Write message..."
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          onKeyDown={handleKeyDown}
        />

        <button
          onClick={sendMessage}
          className="bg-[#0f0f12] p-2 absolute z-10 top-5 right-3 rounded-full cursor-pointer"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
              d="M3 11.5L20 4L13 21L11 13L3 11.5Z"
              stroke="#ff2d95"
              strokeWidth="2"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
