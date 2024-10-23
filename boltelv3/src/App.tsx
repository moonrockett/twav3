import { useEffect } from 'react';
import { MainView } from './views/MainView';
import { BoostersView } from './views/BoostersView';
import { ReferralsView } from './views/ReferralsView';
import { Navigation } from './components/Navigation';
import { useStore } from './store';
import { ThemeToggle } from './components/ThemeToggle';
import { UserInfo } from './components/UserInfo';
import { motion, AnimatePresence } from 'framer-motion';
import WebApp from '@twa-dev/sdk';

export default function App() {
  const { activeTab, isDarkMode } = useStore();

  useEffect(() => {
    // Initialize Telegram WebApp
    WebApp.ready();
    WebApp.expand();
  }, []);

  return (
    <div className={`min-h-screen ${isDarkMode ? 'dark' : ''}`}>
      <div className="max-w-md mx-auto p-4 bg-white dark:bg-gray-900 min-h-screen relative">
        <ThemeToggle />
        <UserInfo />
        
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
          >
            {activeTab === 'main' && <MainView />}
            {activeTab === 'boosters' && <BoostersView />}
            {activeTab === 'referrals' && <ReferralsView />}
          </motion.div>
        </AnimatePresence>

        <Navigation />
      </div>
    </div>
  );
}