import { SNSPlatform } from './types';

export const SNS_PLATFORMS: SNSPlatform[] = [
  {
    id: 'tiktok',
    name: 'TikTok',
    safeZone: {
      top: 30,     // 上部のステータスバーなどを考慮
      bottom: 80,  // 下部のユーザー名・説明文エリアを考慮
      left: 15,    // 左端のマージン
      right: 60,   // 右側のボタンエリアを考慮して少し大きく
    }
  },
  {
    id: 'instagram',
    name: 'Instagram Reels',
    safeZone: {
      top: 40,  // 108 * (720/1920) ≈ 40
      bottom: 120, // 320 * (720/1920) ≈ 120
      left: 23,    // 60 * (405/1080) ≈ 23
      right: 45,   // 120 * (405/1080) ≈ 45
    }
  },
  {
    id: 'youtube',
    name: 'YouTube Shorts',
    safeZone: {
      top: 53,     // 140 * (720/1920) ≈ 53
      bottom: 101, // 270 * (720/1920) ≈ 101
      left: 26,    // 70 * (405/1080) ≈ 26
      right: 71,   // 190 * (405/1080) ≈ 71
    }
  }
];

export const VIDEO_ASPECT_RATIO = 9 / 16;
export const VIDEO_HEIGHT = 720;
export const VIDEO_WIDTH = VIDEO_HEIGHT * VIDEO_ASPECT_RATIO;