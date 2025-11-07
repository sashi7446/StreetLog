'use client';

import { useEffect, useRef } from 'react';
import { StreamGroup } from "@/types/tournament";

interface StreamModalProps {
  isOpen: boolean;
  onClose: () => void;
  streamGroups: StreamGroup[];
  tournamentName: string;
}

export default function StreamModal({ isOpen, onClose, streamGroups, tournamentName }: StreamModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!isOpen) return;

    // Body scroll lock: 背景のスクロールを防ぐ
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    // Focus restoration: 現在のフォーカス要素を保存
    previousFocusRef.current = document.activeElement as HTMLElement;

    // ESCキーで閉じる
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    // Focus trap: Tabキーでモーダル内を循環
    const handleTab = (e: KeyboardEvent) => {
      if (e.key !== 'Tab' || !modalRef.current) return;

      const focusableElements = modalRef.current.querySelectorAll<HTMLElement>(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (e.shiftKey) {
        // Shift+Tab: 最初の要素から前に行こうとしたら最後へ
        if (document.activeElement === firstElement) {
          e.preventDefault();
          lastElement?.focus();
        }
      } else {
        // Tab: 最後の要素から次に行こうとしたら最初へ
        if (document.activeElement === lastElement) {
          e.preventDefault();
          firstElement?.focus();
        }
      }
    };

    document.addEventListener('keydown', handleEscape);
    document.addEventListener('keydown', handleTab);

    // 最初のfocusable要素にフォーカス
    const firstFocusable = modalRef.current?.querySelector<HTMLElement>(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    firstFocusable?.focus();

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.removeEventListener('keydown', handleTab);

      // Body scroll lock解除
      document.body.style.overflow = originalOverflow;

      // Focus restoration: モーダルを閉じた時に元の要素に戻す
      if (previousFocusRef.current) {
        previousFocusRef.current.focus();
      }
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const hasAnyLiveStream = streamGroups.some(group =>
    group.channels.some(channel => channel.isLive)
  );

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        ref={modalRef}
        className="bg-white rounded-2xl max-w-2xl w-full max-h-[80vh] overflow-y-auto shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 rounded-t-2xl">
          <div className="flex items-start justify-between">
            <div>
              <h3 id="modal-title" className="text-xl font-bold text-gray-900 mb-1">
                {hasAnyLiveStream ? 'ライブ配信を見る' : '配信予定を確認'}
              </h3>
              <p className="text-sm text-gray-600">{tournamentName}</p>
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 transition rounded focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-primary"
              aria-label="閉じる"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {streamGroups.map((group) => (
            <div key={group.category}>
              <h4 className="text-sm font-bold text-gray-700 mb-3">{group.label}</h4>
              <div className="space-y-2">
                {group.channels.map((channel) => (
                  <a
                    key={channel.id}
                    href={channel.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-lg border border-gray-200 hover:border-brand-primary hover:bg-gray-50 transition group focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-primary"
                  >
                    {/* Platform Icon */}
                    <div className="flex-shrink-0">
                      {channel.platform === 'youtube' ? (
                        <svg className="w-6 h-6 text-red-600" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                        </svg>
                      ) : (
                        <svg className="w-6 h-6 text-purple-600" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M11.571 4.714h1.715v5.143H11.57zm4.715 0H18v5.143h-1.714zM6 0L1.714 4.286v15.428h5.143V24l4.286-4.286h3.428L22.286 12V0zm14.571 11.143l-3.428 3.428h-3.429l-3 3v-3H6.857V1.714h13.714Z"/>
                        </svg>
                      )}
                    </div>

                    {/* Channel Info */}
                    <div className="flex-grow min-w-0">
                      <p className="font-semibold text-gray-900 truncate">{channel.channelName}</p>
                    </div>

                    {/* Live Status */}
                    {channel.isLive && (
                      <div className="flex-shrink-0 flex items-center gap-1.5 px-2 py-1 bg-red-100 rounded-full">
                        <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
                        <span className="text-xs font-bold text-red-700">LIVE</span>
                      </div>
                    )}

                    {/* Arrow Icon */}
                    <svg className="w-5 h-5 text-gray-400 group-hover:text-brand-primary transition flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
