import { Tournament } from "@/types/tournament";

interface TournamentCardProps {
  tournament: Tournament;
}

const scaleConfig = {
  "世界大会": {
    color: "bg-gradient-to-r from-red-600 to-red-700",
    textColor: "text-white",
    border: "border-red-200",
  },
  "全国大会": {
    color: "bg-gradient-to-r from-orange-600 to-orange-700",
    textColor: "text-white",
    border: "border-orange-200",
  },
  "地域大会": {
    color: "bg-gradient-to-r from-blue-600 to-blue-700",
    textColor: "text-white",
    border: "border-blue-200",
  },
  "オンライン大会": {
    color: "bg-gradient-to-r from-green-600 to-green-700",
    textColor: "text-white",
    border: "border-green-200",
  },
};

export default function TournamentCard({ tournament }: TournamentCardProps) {
  const config = scaleConfig[tournament.scale];

  return (
    <article className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      <div className="flex justify-between items-start mb-4">
        <div className="flex-1">
          <h4 className="text-2xl font-bold mb-2 text-gray-900">
            {tournament.name}
          </h4>
          <time className="text-sm text-gray-500 font-medium">
            {tournament.date}
          </time>
        </div>
        <span
          className={`${config.color} ${config.textColor} px-4 py-2 rounded-full text-sm font-bold shadow-md whitespace-nowrap ml-4`}
        >
          {tournament.scale}
        </span>
      </div>

      <p className="text-gray-600 mb-4 leading-relaxed">
        {tournament.description}
      </p>

      <div className="flex gap-6 text-sm text-gray-600 mb-4 flex-wrap">
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
                className="bg-gradient-to-r from-gray-100 to-gray-200 px-3 py-1.5 rounded-full text-sm font-medium text-gray-800 hover:from-gray-200 hover:to-gray-300 transition"
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
        className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-purple-700 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-purple-800 transition-all shadow-md hover:shadow-lg"
      >
        <span>配信を見る</span>
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </a>
    </article>
  );
}
