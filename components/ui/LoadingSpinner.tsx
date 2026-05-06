export function LoadingSpinner() {
  return (
    <div className="flex gap-1">
      <div className="animate-pulse [animation-delay:-0.3s] w-2 h-2 rounded-full bg-accent" />
      <div className="animate-pulse [animation-delay:-0.15s] w-2 h-2 rounded-full bg-accent" />
      <div className="animate-pulse w-2 h-2 rounded-full bg-accent" />
    </div>
  );
}
