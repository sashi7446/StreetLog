import { Tournament } from "@/types/tournament";
import LiveBadge from "./LiveBadge";
import StreamButton from "./StreamButton";
import { parseDateTime, isPastTournament } from "@/lib/dateUtils";

interface TournamentCardProps {
  tournament: Tournament;
}

export default function TournamentCard({ tournament }: TournamentCardProps) {
  const hasAnyLiveStream = tournament.streams.some(group =>
    group.channels.some(channel => channel.isLive)
  );
  const borderColor = hasAnyLiveStream ? "border-brand-primary" : "border-gray-200";
  const isPast = isPastTournament(tournament.date);
  const { displayText } = parseDateTime(tournament.date);

  return (
    <article className={`bg-white border ${borderColor} rounded-xl p-5 sm:p-6 shadow-sm active:shadow-lg sm:hover:shadow-xl transition-all duration-300 sm:hover:-translate-y-1 ${isPast ? 'opacity-50' : ''}`}>
      {hasAnyLiveStream && (
        <div className="mb-3">
          <LiveBadge />
        </div>
      )}
      <div className="mb-4">
        <time className="text-sm sm:text-base text-gray-700 font-bold block mb-2">
          {displayText}
        </time>
        <h4 className="text-xl sm:text-2xl font-bold text-gray-900">
          {tournament.name}
        </h4>
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
          </div>
        </div>
      )}

      <StreamButton
        streams={tournament.streams}
        tournamentName={tournament.name}
        variant="small"
      />
    </article>
  );
}
