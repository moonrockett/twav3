import { Card } from '../components/Card';
import { BalanceDisplay } from '../components/BalanceDisplay';
import { useStore } from '../store';
import { formatTime } from '../utils';

export function MainView() {
  const { rank, boosters } = useStore();
  const activeBoosters = boosters.filter(b => b.active).length;
  const multiplier = activeBoosters || 1;

  return (
    <div className="space-y-4 pb-20">
      <BalanceDisplay />
      
      <Card title="RANK" onClick={() => {}}>
        <div className="text-2xl font-bold text-gray-900 dark:text-white">
          {rank.name}
        </div>
        <div className="text-sm text-gray-500 dark:text-gray-400">
          Scale: {rank.scale}
        </div>
        <div className="text-sm text-gray-500 dark:text-gray-400">
          +{rank.baseTonPerHour} TON per hour
        </div>
      </Card>

      <Card title="BOOSTERS ACTIVE">
        <div className="flex justify-between mb-2">
          {boosters.map((booster) => (
            <div
              key={booster.id}
              className={`w-2 h-2 rounded-full ${
                booster.active ? 'bg-green-500' : 'bg-gray-300 dark:bg-gray-600'
              }`}
            />
          ))}
        </div>
        <div className="text-2xl font-bold text-gray-900 dark:text-white">
          {multiplier}x
        </div>
        <div className="text-sm text-gray-500 dark:text-gray-400">
          Boost Multiplier
        </div>
      </Card>

      <Card title="PROFIT PER HOUR">
        <div className="text-2xl font-bold text-gray-900 dark:text-white">
          +{(rank.baseTonPerHour * multiplier).toFixed(2)} TON
        </div>
      </Card>
    </div>
  );
}