import { ChatMessage } from "@/features/chat/types";
import { v4 as uuidv4 } from "uuid";

export function ChatMessageItem({ msg }: { msg: ChatMessage }) {
  const isUser = msg.type === "user";
  const isSystem = msg.type === "system";

  return (
    <div
      key={uuidv4()}
      className={`flex ${isUser ? "justify-end" : "justify-start"} ${isSystem && "text-accent"}`}
    >
      <div className={`${isUser && "bg-secondary p-2 rounded-lg w-fit"}`}>
        {msg.message}
      </div>
    </div>
  );
}
