export default function Home() {
  return (
    <div className="min-h-screen">
      {/* ナビゲーション - スクロールに追従しない */}
      <nav className="bg-gray-900 text-white py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold">MOC</h1>
            <ul className="flex gap-6">
              <li><a href="#" className="hover:text-gray-300">ホーム</a></li>
              <li><a href="#" className="hover:text-gray-300">大会一覧</a></li>
              <li><a href="#" className="hover:text-gray-300">ニュース</a></li>
              <li><a href="#" className="hover:text-gray-300">アーカイブ</a></li>
            </ul>
          </div>
        </div>
      </nav>

      {/* メインコンテンツ - 新聞スタイル */}
      <main className="container mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold mb-8 border-b-2 border-gray-300 pb-2">
          今週の注目 (Week 44, 2025)
        </h2>

        {/* 今週の大会セクション */}
        <section className="mb-12">
          <h3 className="text-2xl font-semibold mb-4">今週の大会</h3>

          {/* 大会カード例 */}
          <div className="border border-gray-300 rounded-lg p-6 mb-4 hover:shadow-lg transition">
            <div className="flex justify-between items-start mb-3">
              <div>
                <h4 className="text-xl font-bold mb-1">EVO 2025</h4>
                <p className="text-sm text-gray-600">2025年11月2-4日</p>
              </div>
              <span className="bg-red-600 text-white px-3 py-1 rounded text-sm font-semibold">
                世界大会
              </span>
            </div>

            <p className="text-gray-700 mb-3">
              格闘ゲームの世界最大規模の大会。最多参加者数を誇る。
            </p>

            <div className="flex gap-4 text-sm text-gray-600 mb-3">
              <span>📊 参加者: 3,000+</span>
              <span>🎮 ゲーム: Street Fighter 6, Tekken 8, 他</span>
            </div>

            <div className="mb-3">
              <p className="text-sm font-semibold text-gray-700 mb-1">注目選手:</p>
              <div className="flex gap-2 flex-wrap">
                <span className="bg-gray-200 px-2 py-1 rounded text-sm">ウメハラ</span>
                <span className="bg-gray-200 px-2 py-1 rounded text-sm">ときど</span>
                <span className="bg-gray-200 px-2 py-1 rounded text-sm">ももち</span>
              </div>
            </div>

            <a
              href="https://twitch.tv/evo"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-purple-600 text-white px-6 py-2 rounded hover:bg-purple-700 transition"
            >
              配信を見る →
            </a>
          </div>
        </section>

        {/* 先週のニュースセクション */}
        <section className="mb-12">
          <h3 className="text-2xl font-semibold mb-4">先週のニュース</h3>

          <div className="grid gap-4">
            <div className="border-l-4 border-blue-600 pl-4 py-2">
              <h4 className="font-semibold mb-1">新作格ゲー「○○」発表</h4>
              <p className="text-sm text-gray-600">
                大手パブリッシャーが新作タイトルを発表。2026年春リリース予定。
              </p>
            </div>

            <div className="border-l-4 border-green-600 pl-4 py-2">
              <h4 className="font-semibold mb-1">トッププロ選手が移籍</h4>
              <p className="text-sm text-gray-600">
                有名選手が新チームへ。今後の活躍に期待。
              </p>
            </div>
          </div>
        </section>

        {/* 最近の界隈セクション */}
        <section>
          <h3 className="text-2xl font-semibold mb-4">最近の界隈</h3>

          <div className="bg-gray-100 rounded-lg p-4">
            <p className="text-gray-700">
              📢 コミュニティイベント「〇〇大会」が開催決定。参加者募集中！
            </p>
          </div>
        </section>
      </main>

      {/* フッター */}
      <footer className="bg-gray-900 text-white py-6 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-gray-400">© 2025 MOC - eスポーツメディア</p>
        </div>
      </footer>
    </div>
  );
}
