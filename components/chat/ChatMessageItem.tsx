import { ChatMessage } from "@/features/chat/types/types";

export function ChatMessageItem({ msg }: { msg: ChatMessage }) {
  const isUser = msg.type === "user";
  const isSystem = msg.type === "system";

  return (
    <li
      aria-label={isUser ? "my message" : "ai chat message"}
      className={`flex  ${isUser ? "justify-end" : "justify-start"} ${isSystem && "text-accent"}`}
    >
      <div>
        <span className="text-accent text-xs">{!isUser && "AI CHAT"}</span>
        <div className={`${isUser && "bg-secondary p-2 rounded-lg w-fit"}`}>
          {msg.message}
        </div>
      </div>
    </li>
  );
}
