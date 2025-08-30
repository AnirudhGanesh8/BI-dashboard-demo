'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, Bell, Search, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

interface HeaderProps {
  onMenuClick: () => void;
}

export function Header({ onMenuClick }: HeaderProps) {
  const pathname = usePathname();

  return (
    <header className="bg-white border-b border-gray-200 px-4 lg:px-6 py-4 sticky top-0 z-50">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={onMenuClick}
          >
            <Menu className="h-6 w-6" />
          </Button>
          
          <div className="flex items-center space-x-2">
            <div className="h-8 w-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">B</span>
            </div>
            <Link href="/" className="text-xl font-bold text-gray-900 hover:text-blue-600 transition-colors">
              BI Dashboard
            </Link>
          </div>
        </div>

        <nav className="hidden md:flex items-center space-x-8">
          <Link 
            href="/dashboard" 
            className={pathname === '/dashboard' ? 'text-blue-600 font-medium border-b-2 border-blue-600 pb-1' : 'text-gray-600 hover:text-gray-900 transition-colors'}
          >
            Dashboard
          </Link>
          <Link 
            href="/reports" 
            className={pathname === '/reports' ? 'text-blue-600 font-medium border-b-2 border-blue-600 pb-1' : 'text-gray-600 hover:text-gray-900 transition-colors'}
          >
            Reports
          </Link>
          <Link 
            href="/settings" 
            className={pathname === '/settings' ? 'text-blue-600 font-medium border-b-2 border-blue-600 pb-1' : 'text-gray-600 hover:text-gray-900 transition-colors'}
          >
            Settings
          </Link>
        </nav>

        <div className="flex items-center space-x-4">
          <div className="hidden md:block relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              type="search"
              placeholder="Search..."
              className="pl-10 w-64"
            />
          </div>
          
          <Button variant="ghost" size="icon" className="relative">
            <Bell className="h-5 w-5" />
            <span className="absolute -top-1 -right-1 h-3 w-3 bg-red-500 rounded-full"></span>
          </Button>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <User className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Sign out</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}