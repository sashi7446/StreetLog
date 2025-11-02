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
    description: "格闘ゲームの世界最大規模の大会。最多参加者数を誇る。",
    scale: "世界大会",
    participants: "3,000+",
    games: ["Street Fighter 6", "Tekken 8", "Guilty Gear Strive"],
    featuredPlayers: ["ウメハラ", "ときど", "ももち"],
    streamUrl: "https://twitch.tv/evo",
  },
];

const newsItems: NewsItemType[] = [
  {
    id: "1",
    title: "新作格ゲー「○○」発表",
    description: "大手パブリッシャーが新作タイトルを発表。2026年春リリース予定。",
    category: "release",
  },
  {
    id: "2",
    title: "トッププロ選手が移籍",
    description: "有名選手が新チームへ。今後の活躍に期待。",
    category: "transfer",
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
