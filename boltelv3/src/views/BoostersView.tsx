import { Card } from '../components/Card';
import { useStore } from '../store';
import { BoosterButton } from '../components/BoosterButton';

export function BoostersView() {
  const { boosters } = useStore();
  const activeBoosters = boosters.filter(b => b.active).length;
  const multiplier = activeBoosters || 1;

  return (
    <div className="space-y-4 pb-20">
      <Card title="BOOST">
        <div className="text-2xl font-bold text-gray-900 dark:text-white">
          {multiplier}x
        </div>
        <div className="text-sm text-gray-500 dark:text-gray-400">
          {activeBoosters} OF {boosters.length} ACTIVE
        </div>
      </Card>

      <div className="space-y-4">
        {boosters.map((booster) => (
          <BoosterButton key={booster.id} booster={booster} />
        ))}
      </div>
    </div>
  );
}