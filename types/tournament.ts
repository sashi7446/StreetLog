export interface StreamChannel {
  id: string;
  platform: 'youtube' | 'twitch';
  channelName: string;
  url: string;
  isLive: boolean;
}

export interface StreamGroup {
  category: 'main' | 'sub' | 'japanese';
  label: string; // "メイン配信", "サブ配信", "日本語配信"
  channels: StreamChannel[];
}

export interface Tournament {
  id: string;
  name: string;
  date: string;
  description: string;
  location: string;
  participants: string;
  games: string[];
  featuredPlayers: string[];
  streams: StreamGroup[];
}

export interface NewsItem {
  id: string;
  title: string;
  description: string;
  category: "release" | "transfer" | "event" | "other";
}

export interface CommunityTopic {
  id: string;
  text: string;
  sourceUrl?: string;
}
