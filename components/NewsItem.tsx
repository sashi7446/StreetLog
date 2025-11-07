import { NewsItem as NewsItemType } from "@/types/tournament";

interface NewsItemProps {
  news: NewsItemType;
}

const categoryConfig = {
  release: {
    icon: "🚀",
    label: "リリース",
    bgColor: "bg-purple-100",
    textColor: "text-purple-800",
  },
  transfer: {
    icon: "🔄",
    label: "移籍",
    bgColor: "bg-yellow-100",
    textColor: "text-yellow-800",
  },
  event: {
    icon: "📅",
    label: "イベント",
    bgColor: "bg-blue-100",
    textColor: "text-blue-800",
  },
  other: {
    icon: "📰",
    label: "その他",
    bgColor: "bg-gray-100",
    textColor: "text-gray-700",
  },
};

export default function NewsItem({ news }: NewsItemProps) {
  const config = categoryConfig[news.category];

  return (
    <article
      className="bg-white pl-4 sm:pl-5 pr-4 py-4 rounded-lg transition-all shadow-sm active:shadow-md sm:hover:shadow-md"
    >
      <div className="flex items-start gap-2 sm:gap-3">
        <span className="text-xl sm:text-2xl flex-shrink-0">{config.icon}</span>
        <div className="flex-grow">
          <div className="flex items-center gap-2 mb-2">
            <span className={`inline-block px-2 py-0.5 rounded text-xs font-semibold ${config.bgColor} ${config.textColor}`}>
              {config.label}
            </span>
          </div>
          <h4 className="font-bold text-gray-900 mb-1 text-base sm:text-lg">{news.title}</h4>
          <p className="text-sm text-gray-600 leading-relaxed">
            {news.description}
          </p>
        </div>
      </div>
    </article>
  );
}
