import { Tournament } from "@/types/tournament";
import LiveBadge from "./LiveBadge";
import StreamButton from "./StreamButton";
import { parseDateTime, isPastTournament } from "@/lib/dateUtils";

interface TournamentCardProps {
  tournament: Tournament;
}

export default function TournamentCard({ tournament }: TournamentCardProps) {
  const borderColor = tournament.isLive ? "border-brand-primary" : "border-gray-200";
  const isPast = isPastTournament(tournament.date);
  const { displayText } = parseDateTime(tournament.date);

  return (
    <article className={`bg-white border ${borderColor} rounded-xl p-5 sm:p-6 shadow-sm active:shadow-lg sm:hover:shadow-xl transition-all duration-300 sm:hover:-translate-y-1 ${isPast ? 'opacity-50' : ''}`}>
      {tournament.isLive && (
        <div className="mb-3">
          <LiveBadge />
        </div>
      )}
      <div className="mb-4">
        <h4 className="text-xl sm:text-2xl font-bold mb-2 text-gray-900">
          {tournament.name}
        </h4>
        <time className="text-sm sm:text-base text-gray-700 font-bold">
          {displayText}
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
          <p className="text-sm font-semibold text-gray-700 mb-2">
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
        variant="small"
      />
    </article>
  );
}
