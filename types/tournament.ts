export type TournamentScale = "世界大会" | "全国大会" | "地域大会" | "オンライン大会";

export interface Tournament {
  id: string;
  name: string;
  date: string;
  description: string;
  scale: TournamentScale;
  participants: string;
  games: string[];
  featuredPlayers: string[];
  streamUrl: string;
}

export interface NewsItem {
  id: string;
  title: string;
  description: string;
  category: "release" | "transfer" | "event" | "other";
}
