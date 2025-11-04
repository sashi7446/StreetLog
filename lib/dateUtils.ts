/**
 * 日時ユーティリティ
 */

const WEEKDAYS = ['日', '月', '火', '水', '木', '金', '土'];

/**
 * ISO日付文字列から曜日を取得
 */
export function getWeekday(dateString: string): string {
  const date = new Date(dateString);
  return WEEKDAYS[date.getDay()];
}

/**
 * 日時文字列をパース
 * 例: "2025年11月9日 18:00 - 11月10日" → { start: Date, displayText: "11月9日(土) 18:00-" }
 */
export function parseDateTime(dateString: string): {
  start: Date | null;
  displayText: string;
  weekday: string;
} {
  // "2025年11月9日 18:00 - 11月10日" のような形式を想定
  const match = dateString.match(/(\d{4})年(\d{1,2})月(\d{1,2})日(?:\s+(\d{1,2}):(\d{2}))?/);

  if (!match) {
    return { start: null, displayText: dateString, weekday: '' };
  }

  const [, year, month, day, hour, minute] = match;
  const date = new Date(
    parseInt(year),
    parseInt(month) - 1,
    parseInt(day),
    hour ? parseInt(hour) : 0,
    minute ? parseInt(minute) : 0
  );

  const weekday = WEEKDAYS[date.getDay()];

  // 表示テキストの生成
  let displayText = `${month}月${day}日(${weekday})`;
  if (hour && minute) {
    displayText += ` ${hour}:${minute}-`;
  }

  return { start: date, displayText, weekday };
}

/**
 * 大会が過去のものか判定
 */
export function isPastTournament(dateString: string): boolean {
  const { start } = parseDateTime(dateString);
  if (!start) return false;

  // テスト用: 現在時刻を2025年11月14日(金) 22:00に固定
  const now = new Date('2025-11-14T22:00:00+09:00');
  // 開始時刻 + 12時間を経過していたら「過去」と判定
  const endEstimate = new Date(start.getTime() + 12 * 60 * 60 * 1000);
  return now > endEstimate;
}
