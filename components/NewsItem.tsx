import { NewsItem as NewsItemType } from "@/types/tournament";

interface NewsItemProps {
  news: NewsItemType;
}

const categoryConfig = {
  release: {
    color: "border-blue-500",
    bg: "hover:bg-blue-50",
    icon: "🚀",
  },
  transfer: {
    color: "border-green-500",
    bg: "hover:bg-green-50",
    icon: "🔄",
  },
  event: {
    color: "border-purple-500",
    bg: "hover:bg-purple-50",
    icon: "📅",
  },
  other: {
    color: "border-gray-500",
    bg: "hover:bg-gray-50",
    icon: "📰",
  },
};

export default function NewsItem({ news }: NewsItemProps) {
  const config = categoryConfig[news.category];

  return (
    <article
      className={`border-l-4 ${config.color} ${config.bg} bg-white pl-5 pr-4 py-4 rounded-r-lg transition-all shadow-sm hover:shadow-md`}
    >
      <div className="flex items-start gap-3">
        <span className="text-2xl flex-shrink-0">{config.icon}</span>
        <div>
          <h4 className="font-bold text-gray-900 mb-1 text-lg">{news.title}</h4>
          <p className="text-sm text-gray-600 leading-relaxed">
            {news.description}
          </p>
        </div>
      </div>
    </article>
  );
}
