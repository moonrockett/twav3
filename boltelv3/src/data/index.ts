import { Rank, Booster } from '../types';

export const initialRanks: Rank[] = [
  {
    id: 1,
    name: 'Protostar',
    scale: '1/7 (Beginner)',
    description: "You're at the beginning of your journey, forming your stellar core.",
    baseTonPerHour: 1,
    image: 'protostar.svg'
  },
  {
    id: 2,
    name: 'Red Dwarf',
    scale: '2/7',
    description: "Small but steady, you're building up your energy reserves.",
    baseTonPerHour: 2,
    image: 'red_dwarf.svg'
  },
  // Add more ranks as needed
];

export const initialBoosters: Booster[] = [
  {
    id: 1,
    name: 'Fusion Frenzy',
    active: true,
    timeLeft: 86400,
    channelLink: 'https://t.me/booster1channel',
    color: '#FF6B6B'
  },
  {
    id: 2,
    name: 'Solar Wind Surge',
    active: true,
    timeLeft: 86400,
    channelLink: 'https://t.me/booster2channel',
    color: '#4ECDC4'
  },
  // Add more boosters as needed
];