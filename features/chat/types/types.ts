export type ChatMessage = {
  id: string;
  type: "user" | "model" | "system";
  message: string;
};
