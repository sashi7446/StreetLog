'use client';

import { useState } from 'react';
import { StreamGroup } from '@/types/tournament';
import StreamModal from './StreamModal';

interface StreamButtonProps {
  streams: StreamGroup[];
  tournamentName: string;
  variant?: 'large' | 'small';
}

export default function StreamButton({ streams, tournamentName, variant = 'small' }: StreamButtonProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const sizeClasses = variant === 'large'
    ? 'px-8 py-4 rounded-xl text-base gap-3'
    : 'px-6 py-3 rounded-lg text-sm gap-2';

  const iconSize = variant === 'large' ? 'w-5 h-5' : 'w-4 h-4';

  const hasAnyLiveStream = streams.some(group =>
    group.channels.some(channel => channel.isLive)
  );

  return (
    <>
      <button
        onClick={() => setIsModalOpen(true)}
        className={`inline-flex items-center justify-center ${sizeClasses} bg-brand-primary text-white font-semibold active:bg-brand-hover sm:hover:bg-brand-hover transition-all shadow-md active:shadow-lg sm:hover:shadow-lg w-full sm:w-auto touch-manipulation`}
      >
        {hasAnyLiveStream ? (
          <>
            <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
            <span>ライブ配信を見る</span>
          </>
        ) : (
          <span>配信予定を確認</span>
        )}
        <svg className={iconSize} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </button>

      <StreamModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        streamGroups={streams}
        tournamentName={tournamentName}
      />
    </>
  );
}
