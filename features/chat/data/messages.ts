export const DEFAULT_MESSAGE = "How can I help you today?";

export const INFORMATIVE_MESSAGES = {
  promptIsMissing: "Prompt is required",
  serverError: "Something went wrong with server. Please try again.",
  uiError: "Something went wrong. Try again.",
  expiredLimit: "The AI usage limit has been reached. Please try again later.",
} as const;
