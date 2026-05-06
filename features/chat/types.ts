export type ChatMessage = {
  type: "user" | "model" | "system";
  message: string;
};
