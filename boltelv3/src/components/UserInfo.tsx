import { User } from 'lucide-react';

export function UserInfo() {
  return (
    <div className="fixed top-4 left-4 flex items-center gap-2 p-2 rounded-lg 
                    bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200">
      <User className="w-5 h-5" />
      <span className="text-sm font-medium">User123</span>
    </div>
  );
}