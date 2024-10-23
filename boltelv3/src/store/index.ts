import { create } from 'zustand';
import { Rank, Booster } from '../types';
import { initialRanks, initialBoosters } from '../data';

interface State {
  balance: number;
  rank: Rank;
  boosters: Booster[];
  activeTab: 'main' | 'boosters' | 'referrals';
  isDarkMode: boolean;
  setActiveTab: (tab: 'main' | 'boosters' | 'referrals') => void;
  toggleDarkMode: () => void;
  incrementBalance: () => void;
  updateBoosters: () => void;
}

export const useStore = create<State>((set) => ({
  balance: 123456,
  rank: initialRanks[0],
  boosters: initialBoosters,
  activeTab: 'main',
  isDarkMode: false,
  
  setActiveTab: (tab) => set({ activeTab: tab }),
  toggleDarkMode: () => set((state) => ({ isDarkMode: !state.isDarkMode })),
  
  incrementBalance: () => set((state) => {
    const activeBoosters = state.boosters.filter((b) => b.active).length;
    const multiplier = activeBoosters || 1;
    const increment = (state.rank.baseTonPerHour * multiplier) / 3600;
    return { balance: state.balance + increment };
  }),
  
  updateBoosters: () => set((state) => ({
    boosters: state.boosters.map((booster) => ({
      ...booster,
      timeLeft: Math.max(0, booster.timeLeft - 1),
      active: booster.timeLeft > 0,
    })),
  })),
}));