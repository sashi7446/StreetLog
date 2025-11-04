import { Tournament } from "@/types/tournament";
import LiveBadge from "./LiveBadge";
import StreamButton from "./StreamButton";
import { parseDateTime, isPastTournament } from "@/lib/dateUtils";

interface FeaturedTournamentCardProps {
  tournament: Tournament;
}

export default function FeaturedTournamentCard({ tournament }: FeaturedTournamentCardProps) {
  const borderColor = tournament.isLive ? "border-brand-primary" : "border-accent-primary";
  const isPast = isPastTournament(tournament.date);
  const { displayText } = parseDateTime(tournament.date);

  return (
    <article className={`bg-white border-2 ${borderColor} rounded-2xl p-6 sm:p-8 shadow-lg active:shadow-xl sm:hover:shadow-2xl transition-all duration-300 ${isPast ? 'opacity-50' : ''}`}>
      <div className="mb-2 flex gap-2 flex-wrap">
        {tournament.isLive && <LiveBadge />}
        <span className="inline-block px-3 py-1 bg-accent-primary text-white text-xs font-bold rounded-full">
          今週のイチオシ
        </span>
      </div>

      <div className="mb-5">
        <time className="text-base sm:text-lg text-gray-700 font-bold block mb-2">
          {displayText}
        </time>
        <h4 className="text-2xl sm:text-4xl font-extrabold text-gray-900 leading-tight">
          {tournament.name}
        </h4>
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
          <p className="text-sm font-semibold text-gray-700 mb-3">
            注目選手 ({tournament.featuredPlayers.length}名)
          </p>
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

      <StreamButton
        streamUrl={tournament.streamUrl}
        isLive={tournament.isLive}
        variant="large"
      />
    </article>
  );
}
