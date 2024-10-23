import { motion, AnimatePresence, useSpring, useMotionValue, useTransform } from 'framer-motion';
import { useStore } from '../store';
import { formatBalance } from '../utils';
import { useEffect } from 'react';

export function BalanceDisplay() {
  const balance = useStore((state) => state.balance);
  const springValue = useSpring(balance, { damping: 30, stiffness: 100 });
  const displayValue = useMotionValue(balance);

  useEffect(() => {
    springValue.set(balance);
  }, [balance, springValue]);

  const formattedBalance = useTransform(springValue, (value) => formatBalance(value));

  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-700 opacity-50 blur-xl" />
      <motion.div
        className="relative bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-8 text-white text-center shadow-2xl"
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="absolute top-0 left-0 w-full h-full bg-white/10 backdrop-blur-sm rounded-2xl" />
        <div className="relative">
          <h2 className="text-sm font-medium text-blue-100 mb-2">TOTAL BALANCE</h2>
          <AnimatePresence mode="wait">
            <motion.div
              key={balance}
              className="text-4xl font-bold tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <motion.span>{formattedBalance}</motion.span> TON
            </motion.div>
          </AnimatePresence>
          <div className="mt-2 text-sm text-blue-100">
            Click boosters to increase earnings
          </div>
        </div>
      </motion.div>
    </div>
  );
}