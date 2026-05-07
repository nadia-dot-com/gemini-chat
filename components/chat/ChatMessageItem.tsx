import { ChatMessage } from "@/features/chat/types/types";

export function ChatMessageItem({ msg }: { msg: ChatMessage }) {
  const isUser = msg.type === "user";
  const isSystem = msg.type === "system";

  return (
    <div
      className={`flex ${isUser ? "justify-end" : "justify-start"} ${isSystem && "text-accent"}`}
    >
      <div className={`${isUser && "bg-secondary p-2 rounded-lg w-fit"}`}>
        {msg.message}
      </div>
    </div>
  );
}
