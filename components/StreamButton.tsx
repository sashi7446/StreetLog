'use client';

import { useState } from 'react';
import { StreamGroup } from '@/types/tournament';
import StreamModal from './StreamModal';

interface StreamButtonProps {
  streams: StreamGroup[];
  tournamentName: string;
  variant?: 'large' | 'small';
  isPastTournament?: boolean;
}

export default function StreamButton({ streams, tournamentName, variant = 'small', isPastTournament = false }: StreamButtonProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const sizeClasses = variant === 'large'
    ? 'px-8 py-4 rounded-xl text-base gap-3'
    : 'px-6 py-3 rounded-lg text-sm gap-2';

  const hasAnyLiveStream = streams.some(group =>
    group.channels.some(channel => channel.isLive)
  );

  // ボタンテキストの決定
  let buttonText = '配信予定を確認';
  if (isPastTournament) {
    buttonText = '配信先リンクを見る';
  } else if (hasAnyLiveStream) {
    buttonText = 'ライブ配信を見る';
  }

  return (
    <>
      <button
        onClick={() => setIsModalOpen(true)}
        className={`inline-flex items-center justify-center ${sizeClasses} bg-brand-primary text-white font-semibold active:bg-brand-hover sm:hover:bg-brand-hover transition-all shadow-md active:shadow-lg sm:hover:shadow-lg w-full sm:w-auto touch-manipulation focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-primary`}
      >
        {hasAnyLiveStream && !isPastTournament && (
          <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
        )}
        <span>{buttonText}</span>
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
