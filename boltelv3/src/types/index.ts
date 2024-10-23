export interface Rank {
  id: number;
  name: string;
  scale: string;
  description: string;
  baseTonPerHour: number;
  image: string;
}

export interface Booster {
  id: number;
  name: string;
  active: boolean;
  timeLeft: number;
  channelLink: string;
  color: string;
}

export interface ReferralInfo {
  code: string;
  count: number;
  nextRankAt: number;
}