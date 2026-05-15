import { ChatMessage } from "@/features/chat/types/types";
import { ChatMessageItem } from "./ChatMessageItem";
import { DEFAULT_MESSAGE } from "@/features/chat/data/messages";

export function ChatMessages({ chatHistory }: { chatHistory: ChatMessage[] }) {
  return (
    <div className="w-full h-[70dvh] overflow-y-auto">
      {chatHistory.length > 0 ? (
        <ul className="flex flex-col gap-3" role="log">
          {chatHistory.map((msg) => (
            <ChatMessageItem key={msg.id} msg={msg} />
          ))}
        </ul>
      ) : (
        <h2 className="text-2xl text-center pt-80">{DEFAULT_MESSAGE}</h2>
      )}
    </div>
  );
}
