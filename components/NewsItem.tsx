import { NewsItem as NewsItemType } from "@/types/tournament";

interface NewsItemProps {
  news: NewsItemType;
}

const categoryConfig = {
  release: {
    icon: "🚀",
  },
  transfer: {
    icon: "🔄",
  },
  event: {
    icon: "📅",
  },
  other: {
    icon: "📰",
  },
};

export default function NewsItem({ news }: NewsItemProps) {
  const config = categoryConfig[news.category];

  return (
    <article
      className="border-l-4 border-neutral-border bg-white pl-4 sm:pl-5 pr-4 py-4 rounded-r-lg transition-all shadow-sm active:shadow-md sm:hover:shadow-md hover:border-gray-600"
    >
      <div className="flex items-start gap-2 sm:gap-3">
        <span className="text-xl sm:text-2xl flex-shrink-0">{config.icon}</span>
        <div>
          <h4 className="font-bold text-gray-900 mb-1 text-base sm:text-lg">{news.title}</h4>
          <p className="text-sm text-gray-600 leading-relaxed">
            {news.description}
          </p>
        </div>
      </div>
    </article>
  );
}
