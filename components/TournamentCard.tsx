'use client';

import { useState } from "react";
import { Tournament } from "@/types/tournament";
import LiveBadge from "./LiveBadge";
import StreamButton from "./StreamButton";
import { parseDateTime, isPastTournament } from "@/lib/dateUtils";

interface TournamentCardProps {
  tournament: Tournament;
}

export default function TournamentCard({ tournament }: TournamentCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const hasAnyLiveStream = tournament.streams.some(group =>
    group.channels.some(channel => channel.isLive)
  );
  const borderColor = hasAnyLiveStream ? "border-brand-primary" : "border-gray-200";
  const isPast = isPastTournament(tournament.date);
  const { displayText } = parseDateTime(tournament.date);

  // 過去の大会はデフォルトで折りたたみ
  const shouldCollapse = isPast;
  const isOpen = !shouldCollapse || isExpanded;

  return (
    <article className={`bg-white border ${borderColor} rounded-xl p-5 sm:p-6 shadow-sm active:shadow-lg sm:hover:shadow-xl transition-all duration-300 sm:hover:-translate-y-1 ${isPast ? 'opacity-50' : ''}`}>
      {/* ライブバッジ */}
      {hasAnyLiveStream && (
        <div className="mb-3">
          <LiveBadge />
        </div>
      )}

      {/* 過去の大会：折りたたみ可能なヘッダー */}
      {shouldCollapse && (
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full text-left mb-4 rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-primary"
        >
          <div className="flex items-start justify-between gap-4">
            <div className="flex-grow">
              <time className="text-sm sm:text-base text-gray-700 font-bold block mb-2">
                {displayText}
              </time>
              <h4 className="text-xl sm:text-2xl font-bold text-gray-900">
                {tournament.name}
              </h4>
            </div>
            <div className="flex-shrink-0 pt-2">
              <svg
                className={`w-5 h-5 text-gray-600 transition-transform ${isExpanded ? 'rotate-180' : ''}`}
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
        <div className="mb-4">
          <time className="text-sm sm:text-base text-gray-700 font-bold block mb-2">
            {displayText}
          </time>
          <h4 className="text-xl sm:text-2xl font-bold text-gray-900">
            {tournament.name}
          </h4>
        </div>
      )}

      {/* 詳細情報 - 展開時のみ表示（過去の大会）または常に表示（未来/現在の大会） */}
      {isOpen && (
        <>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {tournament.description}
          </p>

          <div className="flex gap-6 text-sm text-gray-600 mb-4 flex-wrap">
            <div className="flex items-center gap-2">
              <span className="text-lg">📍</span>
              <span className="font-medium">開催地: {tournament.location}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-lg">📊</span>
              <span className="font-medium">参加者: {tournament.participants}</span>
            </div>
          </div>

          {tournament.featuredPlayers.length > 0 && (
            <div className="mb-5">
              <p className="text-sm font-semibold text-gray-700 mb-2">
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
                  className="bg-brand-primary text-white px-2 py-1 rounded-full text-xs font-bold hover:bg-brand-hover transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-primary"
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
              variant="small"
              isPastTournament={isPast}
            />

            {/* 過去の大会の場合、結果ボタンを表示 */}
            {isPast && tournament.resultUrl && (
              <a
                href={tournament.resultUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg text-sm gap-2 bg-accent-primary text-white font-semibold active:bg-accent-hover sm:hover:bg-accent-hover transition-all shadow-md active:shadow-lg sm:hover:shadow-lg w-full sm:w-auto touch-manipulation focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-primary"
              >
                <span>結果を見る</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
