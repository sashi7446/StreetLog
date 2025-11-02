export default function Navigation() {
  return (
    <nav className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-5 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <h1 className="text-3xl font-extrabold tracking-tight bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            MOC
          </h1>
          <ul className="flex flex-wrap justify-center gap-6 sm:gap-8">
            <li>
              <a
                href="#"
                className="text-sm font-medium hover:text-purple-400 active:text-purple-300 transition-colors relative group"
              >
                ホーム
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-400 group-hover:w-full transition-all"></span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-sm font-medium hover:text-purple-400 active:text-purple-300 transition-colors relative group"
              >
                大会一覧
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-400 group-hover:w-full transition-all"></span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-sm font-medium hover:text-purple-400 active:text-purple-300 transition-colors relative group"
              >
                ニュース
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-400 group-hover:w-full transition-all"></span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-sm font-medium hover:text-purple-400 active:text-purple-300 transition-colors relative group"
              >
                アーカイブ
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-400 group-hover:w-full transition-all"></span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
