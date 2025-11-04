import Navigation from "@/components/Navigation";
import FeaturedTournamentCard from "@/components/FeaturedTournamentCard";
import TournamentCard from "@/components/TournamentCard";
import NewsItem from "@/components/NewsItem";
import { getLatestWeek } from "@/lib/content";

export default function Home() {
  const weekData = getLatestWeek();
  const { tournaments, news: newsItems, communityTopics, week, year } = weekData;
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      <main className="container mx-auto px-4 py-10 max-w-5xl">
        <header className="mb-12">
          <h2 className="text-5xl font-extrabold mb-3 text-gray-900 tracking-tight">
            今週の注目
          </h2>
          <p className="text-gray-500 text-lg font-medium">
            Week {week}, {year}
          </p>
        </header>

        {/* 今週の大会セクション */}
        <section className="mb-16">
          <h3 className="text-3xl font-bold mb-6 text-gray-900 pb-3 border-b-4 border-accent-primary">
            今週の大会
          </h3>
          <div className="space-y-6">
            {tournaments.map((tournament, index) => (
              index === 0 ? (
                <FeaturedTournamentCard key={tournament.id} tournament={tournament} />
              ) : (
                <TournamentCard key={tournament.id} tournament={tournament} />
              )
            ))}
          </div>
        </section>

        {/* 先週のニュースセクション */}
        <section className="mb-16">
          <h3 className="text-3xl font-bold mb-6 text-gray-900 pb-3 border-b-4 border-accent-primary">
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
          <h3 className="text-3xl font-bold mb-6 text-gray-900 pb-3 border-b-4 border-accent-primary">
            最近の界隈
          </h3>
          {communityTopics.length > 0 ? (
            <div className="space-y-3">
              {communityTopics.map((topic) => (
                <div
                  key={topic.id}
                  className="bg-white rounded-lg p-4 sm:p-5 border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start gap-3">
                    <span className="text-2xl flex-shrink-0">📢</span>
                    <div className="flex-1">
                      <p className="text-gray-700 leading-relaxed">
                        {topic.text}
                      </p>
                      {topic.sourceUrl && (
                        <a
                          href={topic.sourceUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 mt-2 text-sm text-accent-primary hover:text-accent-hover font-medium"
                        >
                          <span>ソースを見る</span>
                          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-gradient-to-br from-white to-gray-50 rounded-xl p-8 border border-gray-200 shadow-sm">
              <div className="flex items-start gap-4">
                <span className="text-3xl">📢</span>
                <p className="text-gray-700 text-lg leading-relaxed">
                  今週は特にトピックがありません
                </p>
              </div>
            </div>
          )}
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
