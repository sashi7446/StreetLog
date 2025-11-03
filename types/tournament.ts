export interface Tournament {
  id: string;
  name: string;
  date: string;
  description: string;
  location: string;
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
