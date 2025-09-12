export interface SNSPlatform {
  id: 'tiktok' | 'instagram' | 'youtube';
  name: string;
  safeZone: {
    top: number;
    bottom: number;
    left: number;
    right: number;
  };
}

export interface VideoFile {
  file: File;
  url: string;
}