export default function LiveBadge() {
  return (
    <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-brand-primary text-white text-xs font-bold rounded-full animate-pulse">
      <span className="w-2 h-2 bg-red-500 rounded-full"></span>
      LIVE配信中
    </span>
  );
}
