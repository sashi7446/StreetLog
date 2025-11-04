---
week: 00  # 週番号を変更
year: 2025
startDate: "2025-MM-DD"  # 月曜日の日付
endDate: "2025-MM-DD"    # 日曜日の日付

tournaments:
  - id: tournament-id-1
    name: 大会名
    date: 2025年MM月DD日 HH:MM - MM月DD日  # 開催日時（曜日は自動計算）
    description: 大会の説明文。権威付けとなる情報を簡潔に記載。
    location: 開催地  # 例: Los Angeles, CA / 東京 / オンライン
    participants: NN人
    games:
      - Street Fighter 6
    featuredPlayers:
      - 選手名1
      - 選手名2
      - 選手名3
    resultUrl: https://example.com/results  # 【オプション】大会結果記事のURL（過去大会のみ）
    streams:
      - category: main  # main | sub | japanese
        label: メイン配信
        channels:
          - id: channel-id-1
            platform: twitch  # twitch | youtube
            channelName: チャンネル名
            url: https://www.twitch.tv/channel
            isLive: false  # 配信中の場合true
      # 複数配信がある場合は追加
      # - category: sub
      #   label: サブ配信
      #   channels:
      #     - id: channel-id-2
      #       platform: youtube
      #       channelName: サブチャンネル名
      #       url: https://www.youtube.com/@channel
      #       isLive: false
      # - category: japanese
      #   label: 日本語配信
      #   channels:
      #     - id: channel-id-3
      #       platform: youtube
      #       channelName: 日本語チャンネル名
      #       url: https://www.youtube.com/@channel-jp
      #       isLive: false

news:
  - id: news-id-1
    title: ニュース見出し
    description: ニュースの要約。1-2文程度。
    category: release  # release | event | transfer | other

  - id: news-id-2
    title: 別のニュース見出し
    description: ニュースの要約。
    category: event

communityTopics:
  - id: topic-id-1
    text: "コミュニティで話題になっていることの説明。ツールリリース、ローカルシーンの成長など。"
    sourceUrl: "https://twitter.com/example"  # オプション

  - id: topic-id-2
    text: "別のコミュニティトピック。"
    sourceUrl: "https://twitter.com/example2"
---

# Week 00, 2025

今週の注目大会とニュースをお届けします。
