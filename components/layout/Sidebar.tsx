'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { X, BarChart3, FileText, Settings, Upload, Users, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  role?: string;
}

const navigationItems = [
  { name: 'Dashboard', icon: BarChart3, href: '/dashboard' },
  { name: 'Reports', icon: FileText, href: '/reports' },
  { name: 'Data Upload', icon: Upload, href: '/upload' },
  { name: 'Analytics', icon: TrendingUp, href: '/analytics' },
  { name: 'Team', icon: Users, href: '/team' },
  { name: 'Settings', icon: Settings, href: '/settings' },
];

export function Sidebar({ isOpen, onClose, role }: SidebarProps) {
  const pathname = usePathname();

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-gray-600 bg-opacity-75 lg:hidden z-40"
          onClick={onClose}
          aria-hidden="true"
        />
      )}

      {/* Sidebar */}
      <div
        className={cn(
          'fixed top-0 left-0 h-full w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 transform transition-transform duration-300 ease-in-out z-50',
          'lg:translate-x-0 lg:static lg:inset-0',
          isOpen ? 'translate-x-0' : '-translate-x-full'
        )}
        role={role}
        aria-label="Main navigation"
      >
        <div className="flex items-center justify-between p-6 lg:hidden">
          <div className="flex items-center space-x-2">
            <div className="h-8 w-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">BI</span>
            </div>
            <span className="text-xl font-bold text-gray-900 dark:text-gray-100">BI Dashboard</span>
          </div>
          <Button variant="ghost" size="icon" onClick={onClose} aria-label="Close navigation menu">
            <X className="h-6 w-6" />
          </Button>
        </div>

        <div className="mt-8 lg:mt-20 flex-1 flex flex-col">
          <nav className="px-4 space-y-2 flex-1" aria-label="Dashboard navigation">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => {
                  if (window.innerWidth < 1024) {
                    onClose();
                  }
                }}
                className={cn(
                  'flex items-center px-4 py-3 rounded-lg text-sm font-medium transition-colors',
                  pathname === item.href
                    ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400 border-r-2 border-blue-600'
                    : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-gray-100'
                )}
              >
                <item.icon className="mr-3 h-5 w-5" />
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Upgrade Banner - Fixed spacing */}
          <div className="p-4 mt-8">
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-4 rounded-lg text-white" role="complementary" aria-label="Upgrade promotion">
              <h3 className="font-semibold mb-1">Upgrade to Pro</h3>
              <p className="text-sm opacity-90 mb-3">Get advanced analytics and unlimited reports</p>
              <Button size="sm" variant="secondary" className="w-full">
                Upgrade Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}