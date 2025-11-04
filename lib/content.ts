import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { Tournament, NewsItem, CommunityTopic } from "@/types/tournament";

export interface WeekData {
  week: number;
  year: number;
  startDate: string;
  endDate: string;
  tournaments: Tournament[];
  news: NewsItem[];
  communityTopics: CommunityTopic[];
}

const contentDirectory = path.join(process.cwd(), "content/weeks");

export function getWeekData(weekFile: string): WeekData {
  const fullPath = path.join(contentDirectory, weekFile);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data } = matter(fileContents);

  return {
    week: data.week,
    year: data.year,
    startDate: data.startDate,
    endDate: data.endDate,
    tournaments: data.tournaments || [],
    news: data.news || [],
    communityTopics: data.communityTopics || [],
  };
}

export function getLatestWeek(): WeekData {
  const files = fs.readdirSync(contentDirectory);
  const mdFiles = files.filter((file) => file.endsWith(".md"));

  if (mdFiles.length === 0) {
    throw new Error("No week data found");
  }

  // Sort by filename (assumes format: YYYY-wWW.md)
  mdFiles.sort().reverse();

  return getWeekData(mdFiles[0]);
}

export function getAllWeeks(): WeekData[] {
  const files = fs.readdirSync(contentDirectory);
  const mdFiles = files.filter((file) => file.endsWith(".md"));

  return mdFiles
    .map((file) => getWeekData(file))
    .sort((a, b) => {
      if (a.year !== b.year) return b.year - a.year;
      return b.week - a.week;
    });
}
