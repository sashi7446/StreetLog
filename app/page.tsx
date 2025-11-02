import Navigation from "@/components/Navigation";
import TournamentCard from "@/components/TournamentCard";
import NewsItem from "@/components/NewsItem";
import { Tournament, NewsItem as NewsItemType } from "@/types/tournament";

// サンプルデータ
const tournaments: Tournament[] = [
  {
    id: "1",
    name: "EVO 2025",
    date: "2025年11月2-4日",
    description: "格闘ゲームの世界最大規模の大会。最多参加者数を誇り、全世界から強豪が集結。",
    scale: "世界大会",
    participants: "3,000+",
    games: ["Street Fighter 6", "Tekken 8", "Guilty Gear Strive", "Mortal Kombat 1"],
    featuredPlayers: ["ウメハラ", "ときど", "ももち", "ふ〜ど", "かずのこ"],
    streamUrl: "https://twitch.tv/evo",
  },
  {
    id: "2",
    name: "Capcom Cup XI",
    date: "2025年11月8-10日",
    description: "Street Fighter 6の世界王者を決める公式世界大会。賞金総額100万ドル。",
    scale: "世界大会",
    participants: "48人（招待制）",
    games: ["Street Fighter 6"],
    featuredPlayers: ["MenaRD", "Punk", "Tokido", "Angry Bird"],
    streamUrl: "https://www.twitch.tv/capcomfighters",
  },
  {
    id: "3",
    name: "篝火 #15",
    date: "2025年11月15日",
    description: "国内最大級のスマブラSP大会。トッププレイヤーが集結する注目の一戦。",
    scale: "全国大会",
    participants: "512人",
    games: ["大乱闘スマッシュブラザーズ SPECIAL"],
    featuredPlayers: ["あcola", "プロトバナム", "ミーヤー", "ヨシドラ"],
    streamUrl: "https://www.youtube.com/watch?v=example",
  },
  {
    id: "4",
    name: "Community Battle Online #8",
    date: "2025年11月18日",
    description: "誰でも参加できるオンライン大会。初心者から上級者まで楽しめる。",
    scale: "オンライン大会",
    participants: "128人",
    games: ["Street Fighter 6", "Tekken 8"],
    featuredPlayers: [],
    streamUrl: "https://www.twitch.tv/community_fg",
  },
];

const newsItems: NewsItemType[] = [
  {
    id: "1",
    title: "Street Fighter 6に新キャラ「アキラ」追加決定",
    description: "Capcomが新DLCキャラクターを発表。ライバルスクールズから参戦。2025年12月配信予定。",
    category: "release",
  },
  {
    id: "2",
    title: "ウメハラ選手がCyclops Athleticsへ移籍",
    description: "日本を代表するプロゲーマーが新チームへ。「新たな挑戦を楽しみたい」とコメント。",
    category: "transfer",
  },
  {
    id: "3",
    title: "Tokyo Game Show 2025で格ゲー大会開催",
    description: "9月に開催されるTGSにて、各タイトルの招待制トーナメントが実施される。",
    category: "event",
  },
  {
    id: "4",
    title: "Tekken 8のバランス調整パッチが配信開始",
    description: "複数キャラクターの性能調整を含む大型アップデート。オンライン対戦環境が変化する見込み。",
    category: "other",
  },
  {
    id: "5",
    title: "新作格ゲー「Project L」の最新映像が公開",
    description: "Riot Gamesが開発中のタッグ型格闘ゲーム。League of Legendsキャラが参戦。",
    category: "release",
  },
  {
    id: "6",
    title: "EVO Japan 2026の開催地が東京に決定",
    description: "来年のEVO Japanは東京ビッグサイトで開催。チケット販売は3月開始予定。",
    category: "event",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      <main className="container mx-auto px-4 py-10 max-w-5xl">
        <header className="mb-12">
          <h2 className="text-5xl font-extrabold mb-3 text-gray-900 tracking-tight">
            今週の注目
          </h2>
          <p className="text-gray-500 text-lg font-medium">Week 44, 2025</p>
        </header>

        {/* 今週の大会セクション */}
        <section className="mb-16">
          <h3 className="text-3xl font-bold mb-6 text-gray-900 pb-3 border-b-4 border-purple-600">
            今週の大会
          </h3>
          <div className="space-y-6">
            {tournaments.map((tournament) => (
              <TournamentCard key={tournament.id} tournament={tournament} />
            ))}
          </div>
        </section>

        {/* 先週のニュースセクション */}
        <section className="mb-16">
          <h3 className="text-3xl font-bold mb-6 text-gray-900 pb-3 border-b-4 border-blue-600">
            先週のニュース
          </h3>
          <div className="space-y-4">
            {newsItems.map((news) => (
              <NewsItem key={news.id} news={news} />
            ))}
          </div>
        </section>

        {/* 最近の界隈セクション */}
        <section className="mb-16">
          <h3 className="text-3xl font-bold mb-6 text-gray-900 pb-3 border-b-4 border-green-600">
            最近の界隈
          </h3>
          <div className="bg-gradient-to-br from-white to-gray-50 rounded-xl p-8 border border-gray-200 shadow-sm">
            <div className="flex items-start gap-4">
              <span className="text-3xl">📢</span>
              <p className="text-gray-700 text-lg leading-relaxed">
                コミュニティイベント「〇〇大会」が開催決定。参加者募集中！
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* フッター */}
      <footer className="bg-gray-900 text-white py-6 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-gray-400">
            © 2025 MOC - eスポーツメディア
          </p>
        </div>
      </footer>
    </div>
  );
}
