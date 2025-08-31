'use client';

import { useState } from 'react';
import { Header } from '@/components/layout/Header';
import { Sidebar } from '@/components/layout/Sidebar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { TrendingUp, Users, Target, Clock, BarChart3, PieChart } from 'lucide-react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  AreaChart,
  Area,
  BarChart,
  Bar,
} from 'recharts';

const performanceData = [
  { month: 'Jan', performance: 85, target: 90 },
  { month: 'Feb', performance: 88, target: 90 },
  { month: 'Mar', performance: 92, target: 90 },
  { month: 'Apr', performance: 89, target: 90 },
  { month: 'May', performance: 94, target: 90 },
  { month: 'Jun', performance: 96, target: 90 },
];

const cohortData = [
  { week: 'Week 1', retention: 100 },
  { week: 'Week 2', retention: 85 },
  { week: 'Week 3', retention: 72 },
  { week: 'Week 4', retention: 65 },
  { week: 'Week 5', retention: 58 },
  { week: 'Week 6', retention: 52 },
];

const channelData = [
  { channel: 'Organic', sessions: 4500, conversions: 180 },
  { channel: 'Paid Search', sessions: 3200, conversions: 240 },
  { channel: 'Social Media', sessions: 2800, conversions: 95 },
  { channel: 'Email', sessions: 1900, conversions: 150 },
  { channel: 'Direct', sessions: 2100, conversions: 210 },
];

export default function Analytics() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header onMenuClick={() => setSidebarOpen(!sidebarOpen)} />
      
      <div className="flex">
        <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
        
        <main className="flex-1 lg:ml-64 p-4 lg:p-8" role="main" aria-label="Analytics content">
          <div className="max-w-7xl mx-auto space-y-8">
            <header className="mb-8">
              <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2">Advanced Analytics</h1>
              <p className="text-gray-600 dark:text-gray-400">Deep insights into your business performance and user behavior</p>
            </header>

            {/* Performance Metrics */}
            <section aria-label="Performance metrics">
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">
                <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium text-gray-600 dark:text-gray-400">Performance Score</CardTitle>
                    <TrendingUp className="h-5 w-5 text-gray-400 dark:text-gray-500" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">94%</div>
                    <Progress value={94} className="mb-2" />
                    <p className="text-xs text-green-600 dark:text-green-400">+4% from last month</p>
                  </CardContent>
                </Card>

                <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium text-gray-600 dark:text-gray-400">User Engagement</CardTitle>
                    <Users className="h-5 w-5 text-gray-400 dark:text-gray-500" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">87%</div>
                    <Progress value={87} className="mb-2" />
                    <p className="text-xs text-green-600 dark:text-green-400">+2% from last month</p>
                  </CardContent>
                </Card>

                <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium text-gray-600 dark:text-gray-400">Goal Completion</CardTitle>
                    <Target className="h-5 w-5 text-gray-400 dark:text-gray-500" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">76%</div>
                    <Progress value={76} className="mb-2" />
                    <p className="text-xs text-red-600 dark:text-red-400">-1% from last month</p>
                  </CardContent>
                </Card>

                <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium text-gray-600 dark:text-gray-400">Avg. Session Time</CardTitle>
                    <Clock className="h-5 w-5 text-gray-400 dark:text-gray-500" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">4m 32s</div>
                    <Progress value={68} className="mb-2" />
                    <p className="text-xs text-green-600 dark:text-green-400">+12s from last month</p>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Charts Section */}
            <section aria-label="Analytics visualizations">
              <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
                {/* Performance vs Target */}
                <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
                  <CardHeader>
                    <CardTitle className="text-lg font-semibold text-gray-900 dark:text-gray-100 flex items-center">
                      <BarChart3 className="mr-2 h-5 w-5 text-blue-600" />
                      Performance vs Target
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ResponsiveContainer width="100%" height={300}>
                      <LineChart data={performanceData}>
                        <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
                        <XAxis dataKey="month" className="text-sm" />
                        <YAxis className="text-sm" />
                        <Tooltip
                          contentStyle={{
                            backgroundColor: 'hsl(var(--card))',
                            color: 'hsl(var(--card-foreground))',
                            border: '1px solid hsl(var(--border))',
                            borderRadius: '8px',
                          }}
                        />
                        <Line type="monotone" dataKey="performance" stroke="#3b82f6" strokeWidth={3} />
                        <Line type="monotone" dataKey="target" stroke="#ef4444" strokeWidth={2} strokeDasharray="5 5" />
                      </LineChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>

                {/* User Retention Cohort */}
                <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
                  <CardHeader>
                    <CardTitle className="text-lg font-semibold text-gray-900 dark:text-gray-100 flex items-center">
                      <PieChart className="mr-2 h-5 w-5 text-green-600" />
                      User Retention Cohort
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ResponsiveContainer width="100%" height={300}>
                      <AreaChart data={cohortData}>
                        <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
                        <XAxis dataKey="week" className="text-sm" />
                        <YAxis className="text-sm" />
                        <Tooltip
                          contentStyle={{
                            backgroundColor: 'hsl(var(--card))',
                            color: 'hsl(var(--card-foreground))',
                            border: '1px solid hsl(var(--border))',
                            borderRadius: '8px',
                          }}
                        />
                        <Area
                          type="monotone"
                          dataKey="retention"
                          stroke="#10b981"
                          fill="#10b981"
                          fillOpacity={0.3}
                        />
                      </AreaChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>

                {/* Channel Performance */}
                <Card className="col-span-1 xl:col-span-2 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
                  <CardHeader>
                    <CardTitle className="text-lg font-semibold text-gray-900 dark:text-gray-100">Channel Performance Analysis</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ResponsiveContainer width="100%" height={300}>
                      <BarChart data={channelData}>
                        <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
                        <XAxis dataKey="channel" className="text-sm" />
                        <YAxis className="text-sm" />
                        <Tooltip
                          contentStyle={{
                            backgroundColor: 'hsl(var(--card))',
                            color: 'hsl(var(--card-foreground))',
                            border: '1px solid hsl(var(--border))',
                            borderRadius: '8px',
                          }}
                        />
                        <Bar dataKey="sessions" fill="#3b82f6" radius={[4, 4, 0, 0]} />
                        <Bar dataKey="conversions" fill="#10b981" radius={[4, 4, 0, 0]} />
                      </BarChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Analytics Insights */}
            <section aria-label="Analytics insights">
              <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
                <CardHeader>
                  <CardTitle className="text-lg font-semibold text-gray-900 dark:text-gray-100">Key Insights</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="text-center p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                      <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-2">23%</div>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Increase in user engagement this quarter</p>
                    </div>
                    <div className="text-center p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                      <div className="text-2xl font-bold text-green-600 dark:text-green-400 mb-2">$2.4M</div>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Revenue attributed to analytics insights</p>
                    </div>
                    <div className="text-center p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                      <div className="text-2xl font-bold text-purple-600 dark:text-purple-400 mb-2">15%</div>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Improvement in conversion rates</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}