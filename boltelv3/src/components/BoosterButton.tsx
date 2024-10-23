import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { formatTime } from '../utils';
import { Booster } from '../types';

interface BoosterButtonProps {
  booster: Booster;
}

export function BoosterButton({ booster }: BoosterButtonProps) {
  const progress = (booster.timeLeft / 86400) * 100;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="relative group"
    >
      <div 
        className="absolute inset-0 bg-gradient-to-br opacity-50 blur-sm rounded-xl transition-opacity group-hover:opacity-75"
        style={{ backgroundColor: booster.color }}
      />
      <motion.div
        style={{ backgroundColor: booster.color }}
        className="relative overflow-hidden rounded-xl p-6 text-white shadow-lg transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
      >
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-lg font-semibold">{booster.name}</h3>
          <div className={`h-3 w-3 rounded-full ${
            booster.active 
              ? 'bg-green-400 shadow-lg shadow-green-400/50 animate-pulse'
              : 'bg-red-400 shadow-lg shadow-red-400/50'
          }`} />
        </div>

        <p className="text-sm opacity-90 mb-4">
          {booster.active 
            ? `Resets: ${formatTime(booster.timeLeft)}`
            : 'Inactive'}
        </p>

        {booster.active && (
          <>
            <div className="absolute bottom-0 left-0 w-full h-1.5">
              <div className="absolute inset-0 bg-black/20" />
              <motion.div 
                className="absolute h-full bg-white/80"
                initial={{ width: `${progress}%` }}
                animate={{ width: "0%" }}
                transition={{ duration: booster.timeLeft, linear: true }}
              />
            </div>
            <div 
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-shine" 
              style={{ 
                backgroundSize: '200% 100%',
                animation: 'shine 8s linear infinite'
              }}
            />
          </>
        )}

        <a
          href={booster.channelLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-medium mt-2 bg-white/20 px-3 py-1.5 rounded-lg hover:bg-white/30 transition-colors"
        >
          Join Channel <ExternalLink className="h-4 w-4" />
        </a>
      </motion.div>
    </motion.div>
  );
}