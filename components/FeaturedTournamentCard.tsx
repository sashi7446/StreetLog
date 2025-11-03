import { Tournament } from "@/types/tournament";

interface FeaturedTournamentCardProps {
  tournament: Tournament;
}

export default function FeaturedTournamentCard({ tournament }: FeaturedTournamentCardProps) {
  return (
    <article className="bg-white border-2 border-accent-primary rounded-2xl p-6 sm:p-8 shadow-lg active:shadow-xl sm:hover:shadow-2xl transition-all duration-300">
      <div className="mb-2">
        <span className="inline-block px-3 py-1 bg-accent-primary text-white text-xs font-bold rounded-full mb-3">
          今週のイチオシ
        </span>
      </div>

      <div className="mb-5">
        <h4 className="text-2xl sm:text-4xl font-extrabold mb-3 text-gray-900 leading-tight">
          {tournament.name}
        </h4>
        <time className="text-base text-gray-500 font-semibold">
          {tournament.date}
        </time>
      </div>

      <p className="text-gray-700 text-base sm:text-lg mb-6 leading-relaxed">
        {tournament.description}
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
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
        <div className="flex items-center gap-3 bg-gray-50 rounded-lg p-3">
          <span className="text-2xl">🎮</span>
          <div>
            <p className="text-xs text-gray-500 font-medium">タイトル</p>
            <p className="text-sm font-bold text-gray-900">
              {tournament.games[0]}
              {tournament.games.length > 1 && ` +${tournament.games.length - 1}`}
            </p>
          </div>
        </div>
      </div>

      {tournament.featuredPlayers.length > 0 && (
        <div className="mb-6">
          <p className="text-sm font-semibold text-gray-700 mb-3">注目選手</p>
          <div className="flex gap-2 flex-wrap">
            {tournament.featuredPlayers.map((player) => (
              <span
                key={player}
                className="bg-gray-100 px-4 py-2 rounded-full text-sm font-bold text-gray-800 hover:bg-gray-200 transition"
              >
                {player}
              </span>
            ))}
          </div>
        </div>
      )}

      <a
        href={tournament.streamUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center gap-3 bg-accent-primary text-white px-8 py-4 rounded-xl font-bold text-base active:bg-accent-hover sm:hover:bg-accent-hover transition-all shadow-md active:shadow-lg sm:hover:shadow-lg w-full touch-manipulation"
      >
        <span>配信を見る</span>
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </a>
    </article>
  );
}
