import { Card } from '../components/Card';
import { Copy, Share2 } from 'lucide-react';
import { motion } from 'framer-motion';

export function ReferralsView() {
  const referralLink = 'https://t.me/NotCoinEarner_bot?start=ref123456';
  const referralCount = 5;
  const nextRankAt = 10;

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(referralLink);
      // You could add a toast notification here
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const shareLink = async () => {
    try {
      await navigator.share({
        title: 'Join NotCoin Earner',
        text: 'Join me on NotCoin Earner and start earning TON!',
        url: referralLink,
      });
    } catch (err) {
      console.error('Failed to share:', err);
    }
  };

  return (
    <div className="space-y-4 pb-20">
      <Card title="REFERRAL LINK" className="overflow-hidden">
        <div className="break-all rounded bg-gray-100 dark:bg-gray-700 p-3 text-sm">
          {referralLink}
        </div>
      </Card>

      <div className="grid grid-cols-2 gap-4">
        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={copyToClipboard}
          className="flex items-center justify-center gap-2 rounded-xl bg-blue-500 
                   p-3 text-white shadow-lg transition-colors hover:bg-blue-600"
        >
          <Copy className="h-5 w-5" />
          <span>Copy Link</span>
        </motion.button>

        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={shareLink}
          className="flex items-center justify-center gap-2 rounded-xl bg-purple-500 
                   p-3 text-white shadow-lg transition-colors hover:bg-purple-600"
        >
          <Share2 className="h-5 w-5" />
          <span>Share Link</span>
        </motion.button>
      </div>

      <Card title="YOUR REFERRALS">
        <div className="text-2xl font-bold text-gray-900 dark:text-white">
          {referralCount}
        </div>
        <div className="text-sm text-gray-500 dark:text-gray-400">
          Next rank at {nextRankAt} referrals
        </div>
        
        <div className="mt-4 h-2 overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700">
          <div 
            className="h-full bg-blue-500 transition-all duration-500"
            style={{ width: `${(referralCount / nextRankAt) * 100}%` }}
          />
        </div>
      </Card>
    </div>
  );
}