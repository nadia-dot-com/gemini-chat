"use client";

import { INFORMATIVE_MESSAGES } from "@/features/chat/data/messages";
import { ErrorBadge } from "@/components/ui/ErrorBadge";

const node = process.env.NODE_ENV;

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div className="flex flex-col justify-center items-center h-[100dvh] gap-1">
      <ErrorBadge />
      <div className="text-accent text-3">{node === 'production' ? INFORMATIVE_MESSAGES.genericError : error.message}</div>
      <button onClick={reset} type="reset">"TRY AGAIN!"</button>
    </div>
  );
}