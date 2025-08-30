'use client';

import { cn } from '@/lib/utils';
import { X, BarChart3, FileText, Settings, Upload, Users, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const navigationItems = [
  { name: 'Dashboard', icon: BarChart3, href: '#', active: true },
  { name: 'Reports', icon: FileText, href: '#', active: false },
  { name: 'Data Upload', icon: Upload, href: '#', active: false },
  { name: 'Analytics', icon: TrendingUp, href: '#', active: false },
  { name: 'Team', icon: Users, href: '#', active: false },
  { name: 'Settings', icon: Settings, href: '#', active: false },
];

export function Sidebar({ isOpen, onClose }: SidebarProps) {
  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-gray-600 bg-opacity-75 lg:hidden z-40"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <div
        className={cn(
          'fixed top-0 left-0 h-full w-64 bg-white border-r border-gray-200 transform transition-transform duration-300 ease-in-out z-50',
          'lg:translate-x-0 lg:static lg:inset-0',
          isOpen ? 'translate-x-0' : '-translate-x-full'
        )}
      >
        <div className="flex items-center justify-between p-6 lg:hidden">
          <div className="flex items-center space-x-2">
            <div className="h-8 w-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">BI</span>
            </div>
            <span className="text-xl font-bold text-gray-900">BI Dashboard</span>
          </div>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="h-6 w-6" />
          </Button>
        </div>

        <div className="mt-8 lg:mt-20">
          <nav className="px-4 space-y-2">
            {navigationItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={cn(
                  'flex items-center px-4 py-3 rounded-lg text-sm font-medium transition-colors',
                  item.active
                    ? 'bg-blue-50 text-blue-700 border-r-2 border-blue-600'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                )}
              >
                <item.icon className="mr-3 h-5 w-5" />
                {item.name}
              </a>
            ))}
          </nav>
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-4">
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-4 rounded-lg text-white">
            <h3 className="font-semibold mb-1">Upgrade to Pro</h3>
            <p className="text-sm opacity-90 mb-3">Get advanced analytics and unlimited reports</p>
            <Button size="sm" variant="secondary" className="w-full">
              Upgrade Now
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}