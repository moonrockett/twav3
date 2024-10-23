import { useStore } from '../store';
import { LayoutGrid, Zap, Users } from 'lucide-react';
import { cn } from '../utils';

export function Navigation() {
  const { activeTab, setActiveTab } = useStore();

  const tabs = [
    { id: 'main', icon: LayoutGrid, label: 'Dashboard' },
    { id: 'boosters', icon: Zap, label: 'Boosters' },
    { id: 'referrals', icon: Users, label: 'Referrals' }
  ] as const;

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-md mx-auto px-4 py-2 flex justify-around">
        {tabs.map(({ id, icon: Icon, label }) => (
          <button
            key={id}
            onClick={() => setActiveTab(id)}
            className={cn(
              "flex flex-col items-center p-2 rounded-lg transition-colors",
              "hover:text-blue-500 dark:hover:text-blue-400",
              activeTab === id 
                ? "text-blue-500 dark:text-blue-400" 
                : "text-gray-500 dark:text-gray-400"
            )}
          >
            <Icon className="w-6 h-6" />
            <span className="text-xs mt-1">{label}</span>
          </button>
        ))}
      </div>
    </nav>
  );
}