import { ChatMessage } from "@/features/chat/types/types";
import { ChatMessageItem } from "./ChatMessageItem";
import { DEFAULT_MESSAGE } from "@/features/chat/data/messages";
import { v4 as uuidv4 } from "uuid";

export function ChatMessages({ chatHistory }: { chatHistory: ChatMessage[] }) {
  return (
    <div className="w-full h-[70dvh] overflow-y-auto">
      {chatHistory.length > 0 ? (
        <div className="flex flex-col gap-3">
          {chatHistory.map((msg) => (
            <ChatMessageItem key={uuidv4()} msg={msg} />
          ))}
        </div>
      ) : (
        <h2 className="text-2xl text-center pt-80">{DEFAULT_MESSAGE}</h2>
      )}
    </div>
  );
}
