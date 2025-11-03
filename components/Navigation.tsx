export default function Navigation() {
  return (
    <nav className="bg-bg-dark text-white py-5 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <h1 className="text-3xl font-extrabold tracking-tight text-brand-primary">
            MOC
          </h1>
          <ul className="flex flex-wrap justify-center gap-6 sm:gap-8">
            <li>
              <a
                href="#"
                className="text-sm font-medium hover:text-brand-primary active:text-brand-hover transition-colors relative group"
              >
                ホーム
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-primary group-hover:w-full transition-all"></span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-sm font-medium hover:text-brand-primary active:text-brand-hover transition-colors relative group"
              >
                大会一覧
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-primary group-hover:w-full transition-all"></span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-sm font-medium hover:text-brand-primary active:text-brand-hover transition-colors relative group"
              >
                ニュース
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-primary group-hover:w-full transition-all"></span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-sm font-medium hover:text-brand-primary active:text-brand-hover transition-colors relative group"
              >
                アーカイブ
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-primary group-hover:w-full transition-all"></span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
