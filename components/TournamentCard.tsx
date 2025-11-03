import { Tournament } from "@/types/tournament";

interface TournamentCardProps {
  tournament: Tournament;
}

export default function TournamentCard({ tournament }: TournamentCardProps) {
  return (
    <article className="bg-white border border-gray-200 rounded-xl p-5 sm:p-6 shadow-sm active:shadow-lg sm:hover:shadow-xl transition-all duration-300 sm:hover:-translate-y-1">
      <div className="mb-4">
        <h4 className="text-xl sm:text-2xl font-bold mb-2 text-gray-900">
          {tournament.name}
        </h4>
        <time className="text-sm text-gray-500 font-medium">
          {tournament.date}
        </time>
      </div>

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
        <div className="flex items-center gap-2">
          <span className="text-lg">🎮</span>
          <span className="font-medium">
            {tournament.games.slice(0, 2).join(", ")}
            {tournament.games.length > 2 && ` +${tournament.games.length - 2}`}
          </span>
        </div>
      </div>

      {tournament.featuredPlayers.length > 0 && (
        <div className="mb-5">
          <p className="text-sm font-semibold text-gray-700 mb-2">注目選手</p>
          <div className="flex gap-2 flex-wrap">
            {tournament.featuredPlayers.map((player) => (
              <span
                key={player}
                className="bg-gray-100 px-3 py-1.5 rounded-full text-sm font-medium text-gray-800 hover:bg-gray-200 transition"
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
        className="inline-flex items-center justify-center gap-2 bg-accent-primary text-white px-6 py-3 rounded-lg font-semibold active:bg-accent-hover sm:hover:bg-accent-hover transition-all shadow-md active:shadow-lg sm:hover:shadow-lg w-full sm:w-auto touch-manipulation"
      >
        <span>配信を見る</span>
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </a>
    </article>
  );
}
