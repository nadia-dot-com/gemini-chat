import { ChatMessage } from "@/features/chat/types";
import { ChatMessageItem } from "./ChatMessageItem";

export function ChatMessages({ chatHistory }: { chatHistory: ChatMessage[] }) {
  return (
    <div className="w-full h-[70dvh] overflow-y-auto">
      {chatHistory.length > 0 ? (
        <div className="flex flex-col gap-3">
          {chatHistory.map((msg) => (
            <ChatMessageItem msg={msg} />
          ))}
        </div>
      ) : (
        <div className="text-2xl text-center pt-80">
          How can I help you today?
        </div>
      )}
    </div>
  );
}
