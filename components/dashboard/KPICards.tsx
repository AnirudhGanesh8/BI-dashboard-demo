'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { TrendingUp, TrendingDown, DollarSign, Users, ShoppingCart, Target } from 'lucide-react';
import { cn } from '@/lib/utils';

interface KPICardProps {
  title: string;
  value: string;
  change: string;
  changeType: 'positive' | 'negative';
  icon: React.ElementType;
}

function KPICard({ title, value, change, changeType, icon: Icon }: KPICardProps) {
  return (
    <Card className="hover:shadow-lg transition-shadow duration-200">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-gray-600">{title}</CardTitle>
        <Icon className="h-5 w-5 text-gray-400" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold text-gray-900 mb-1">{value}</div>
        <div className="flex items-center text-sm">
          {changeType === 'positive' ? (
            <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
          ) : (
            <TrendingDown className="h-4 w-4 text-red-500 mr-1" />
          )}
          <span
            className={cn(
              'font-medium',
              changeType === 'positive' ? 'text-green-600' : 'text-red-600'
            )}
          >
            {change}
          </span>
          <span className="text-gray-500 ml-1">from last month</span>
        </div>
      </CardContent>
    </Card>
  );
}

export function KPICards() {
  const kpiData = [
    {
      title: 'Total Revenue',
      value: '$2,847,392',
      change: '+12.3%',
      changeType: 'positive' as const,
      icon: DollarSign,
    },
    {
      title: 'Active Users',
      value: '18,429',
      change: '+8.7%',
      changeType: 'positive' as const,
      icon: Users,
    },
    {
      title: 'Conversion Rate',
      value: '3.24%',
      change: '-2.1%',
      changeType: 'negative' as const,
      icon: Target,
    },
    {
      title: 'Total Orders',
      value: '6,847',
      change: '+15.2%',
      changeType: 'positive' as const,
      icon: ShoppingCart,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
      {kpiData.map((kpi, index) => (
        <KPICard key={index} {...kpi} />
      ))}
    </div>
  );
}