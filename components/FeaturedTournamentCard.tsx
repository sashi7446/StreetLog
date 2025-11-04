'use client';

import { useState } from "react";
import { Tournament } from "@/types/tournament";
import LiveBadge from "./LiveBadge";
import StreamButton from "./StreamButton";
import { parseDateTime, isPastTournament } from "@/lib/dateUtils";

interface FeaturedTournamentCardProps {
  tournament: Tournament;
}

export default function FeaturedTournamentCard({ tournament }: FeaturedTournamentCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const hasAnyLiveStream = tournament.streams.some(group =>
    group.channels.some(channel => channel.isLive)
  );
  const borderColor = hasAnyLiveStream ? "border-brand-primary" : "border-accent-primary";
  const isPast = isPastTournament(tournament.date);
  const { displayText } = parseDateTime(tournament.date);

  // 過去の大会はデフォルトで折りたたみ
  const shouldCollapse = isPast;
  const isOpen = !shouldCollapse || isExpanded;

  return (
    <article className={`bg-white border-2 ${borderColor} rounded-2xl p-6 sm:p-8 shadow-lg active:shadow-xl sm:hover:shadow-2xl transition-all duration-300 ${isPast ? 'opacity-50' : ''}`}>
      {/* ヘッダー部分 - 常に表示 */}
      <div className="mb-2 flex gap-2 flex-wrap">
        {hasAnyLiveStream && <LiveBadge />}
        <span className="inline-block px-3 py-1 bg-accent-primary text-white text-xs font-bold rounded-full">
          今週のイチオシ
        </span>
      </div>

      {/* 過去の大会：折りたたみ可能なヘッダー */}
      {shouldCollapse && (
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full text-left mb-5"
        >
          <div className="flex items-start justify-between gap-4">
            <div className="flex-grow">
              <time className="text-base sm:text-lg text-gray-700 font-bold block mb-2">
                {displayText}
              </time>
              <h4 className="text-2xl sm:text-4xl font-extrabold text-gray-900 leading-tight">
                {tournament.name}
              </h4>
            </div>
            <div className="flex-shrink-0 pt-2">
              <svg
                className={`w-6 h-6 text-gray-600 transition-transform ${isExpanded ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </button>
      )}

      {/* 未来/現在の大会：通常のヘッダー */}
      {!shouldCollapse && (
        <div className="mb-5">
          <time className="text-base sm:text-lg text-gray-700 font-bold block mb-2">
            {displayText}
          </time>
          <h4 className="text-2xl sm:text-4xl font-extrabold text-gray-900 leading-tight">
            {tournament.name}
          </h4>
        </div>
      )}

      {/* 詳細情報 - 展開時のみ表示（過去の大会）または常に表示（未来/現在の大会） */}
      {isOpen && (
        <>
          <p className="text-gray-700 text-base sm:text-lg mb-6 leading-relaxed">
            {tournament.description}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            <div className="flex items-center gap-3 bg-gray-50 rounded-lg p-3">
              <span className="text-2xl">📍</span>
              <div>
                <p className="text-xs text-gray-500 font-medium">開催地</p>
                <p className="text-sm font-bold text-gray-900">{tournament.location}</p>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-gray-50 rounded-lg p-3">
              <span className="text-2xl">📊</span>
              <div>
                <p className="text-xs text-gray-500 font-medium">参加者</p>
                <p className="text-sm font-bold text-gray-900">{tournament.participants}</p>
              </div>
            </div>
          </div>

          {tournament.featuredPlayers.length > 0 && (
            <div className="mb-6">
              <p className="text-sm font-semibold text-gray-700 mb-3">
                注目選手 ({tournament.featuredPlayers.length}名)
              </p>
              <div className="flex gap-2 flex-wrap">
                {tournament.featuredPlayers.map((player) => (
                  <span
                    key={player}
                    className="bg-gray-100 px-2 py-1 rounded-full text-xs font-medium text-gray-800 hover:bg-gray-200 transition"
                  >
                    {player}
                  </span>
                ))}
                <button
                  className="bg-brand-primary text-white px-2 py-1 rounded-full text-xs font-bold hover:bg-brand-hover transition"
                  aria-label="全選手を見る"
                >
                  and more!!
                </button>
              </div>
            </div>
          )}

          {/* ボタンエリア */}
          <div className="flex flex-col sm:flex-row gap-3">
            <StreamButton
              streams={tournament.streams}
              tournamentName={tournament.name}
              variant="large"
              isPastTournament={isPast}
            />

            {/* 過去の大会の場合、結果ボタンを表示 */}
            {isPast && tournament.resultUrl && (
              <a
                href={tournament.resultUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 rounded-xl text-base gap-3 bg-accent-primary text-white font-semibold active:bg-accent-hover sm:hover:bg-accent-hover transition-all shadow-md active:shadow-lg sm:hover:shadow-lg w-full sm:w-auto touch-manipulation"
              >
                <span>結果を見る</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            )}
          </div>
        </>
      )}
    </article>
  );
}
