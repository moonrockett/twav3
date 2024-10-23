import { Sun, Moon } from 'lucide-react';
import { useStore } from '../store';

export function ThemeToggle() {
  const { isDarkMode, toggleDarkMode } = useStore();

  return (
    <button
      onClick={toggleDarkMode}
      className="fixed top-4 right-4 p-2 rounded-lg bg-gray-100 dark:bg-gray-800 
                 text-gray-800 dark:text-gray-200 transition-colors
                 hover:bg-gray-200 dark:hover:bg-gray-700"
    >
      {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
    </button>
  );
}