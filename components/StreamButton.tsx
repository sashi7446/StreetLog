interface StreamButtonProps {
  streamUrl: string;
  isLive?: boolean;
  variant?: 'large' | 'small';
}

export default function StreamButton({ streamUrl, isLive = false, variant = 'small' }: StreamButtonProps) {
  const sizeClasses = variant === 'large'
    ? 'px-8 py-4 rounded-xl text-base gap-3'
    : 'px-6 py-3 rounded-lg text-sm gap-2';

  const iconSize = variant === 'large' ? 'w-5 h-5' : 'w-4 h-4';

  return (
    <a
      href={streamUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center ${sizeClasses} bg-brand-primary text-white font-semibold active:bg-brand-hover sm:hover:bg-brand-hover transition-all shadow-md active:shadow-lg sm:hover:shadow-lg w-full sm:w-auto touch-manipulation`}
    >
      {isLive ? (
        <>
          <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
          <span>配信を見る</span>
        </>
      ) : (
        <span>配信予定を確認</span>
      )}
      <svg className={iconSize} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
      </svg>
    </a>
  );
}
