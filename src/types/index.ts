export interface ClickData {
  timestamp: string; // ISO
  referrer?: string;
  userAgent?: string;
}

export interface ShortURL {
  id: string;
  original: string;
  short: string;
  createdAt: string; // ISO
  expiresAt: string; // ISO
  clicks: ClickData[];
}
