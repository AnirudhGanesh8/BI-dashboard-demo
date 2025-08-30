'use client';

import { useState } from 'react';
import { Header } from '@/components/layout/Header';
import { Sidebar } from '@/components/layout/Sidebar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  TrendingUp, 
  TrendingDown,
  BarChart3,
  PieChart,
  Activity,
  Target,
  Users,
  DollarSign,
  ShoppingCart,
  Calendar
} from 'lucide-react';
import {
  LineChart,
  Line,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ScatterChart,
  Scatter,
  ReferenceLine
} from 'recharts';

const performanceData = [
  { month: 'Jan', revenue: 65000, customers: 1200, conversion: 3.2 },
  { month: 'Feb', revenue: 59000, customers: 1100, conversion: 2.8 },
  { month: 'Mar', revenue: 80000, customers: 1500, conversion: 3.5 },
  { month: 'Apr', revenue: 81000, customers: 1600, conversion: 3.8 },
  { month: 'May', revenue: 56000, customers: 1000, conversion: 2.9 },
  { month: 'Jun', revenue: 95000, customers: 1800, conversion: 4.1 },
  { month: 'Jul', revenue: 120000, customers: 2200, conversion: 4.5 },
];

const cohortData = [
  { week: 'Week 1', retention: 100, churn: 0 },
  { week: 'Week 2', retention: 85, churn: 15 },
  { week: 'Week 3', retention: 72, churn: 28 },
  { week: 'Week 4', retention: 65, churn: 35 },
  { week: 'Week 5', retention: 58, churn: 42 },
  { week: 'Week 6', retention: 52, churn: 48 },
];

const correlationData = [
  { marketing: 5000, revenue: 65000 },
  { marketing: 4500, revenue: 59000 },
  { marketing: 6000, revenue: 80000 },
  { marketing: 6200, revenue: 81000 },
  { marketing: 4000, revenue: 56000 },
  { marketing: 7000, revenue: 95000 },
  { marketing: 8500, revenue: 120000 },
];

export default function Analytics() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header onMenuClick={() => setSidebarOpen(!sidebarOpen)} />
      
      <div className="flex">
        <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
        
        <main className="flex-1 lg:ml-64 p-4 lg:p-8">
          <div className="max-w-7xl mx-auto space-y-8">
            {/* Page Header */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8">
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">Advanced Analytics</h1>
                <p className="text-gray-600">Deep dive into your business metrics and trends</p>
              </div>
              <div className="flex gap-2 mt-4 sm:mt-0">
                <Button variant="outline">
                  <Calendar className="mr-2 h-4 w-4" />
                  Date Range
                </Button>
                <Button className="bg-blue-600 hover:bg-blue-700">
                  <BarChart3 className="mr-2 h-4 w-4" />
                  Export Analysis
                </Button>
              </div>
            </div>

            {/* Analytics Tabs */}
            <Tabs defaultValue="performance" className="space-y-6">
              <TabsList className="grid w-full grid-cols-1 sm:grid-cols-4">
                <TabsTrigger value="performance">Performance</TabsTrigger>
                <TabsTrigger value="cohort">Cohort Analysis</TabsTrigger>
                <TabsTrigger value="correlation">Correlation</TabsTrigger>
                <TabsTrigger value="forecasting">Forecasting</TabsTrigger>
              </TabsList>

              <TabsContent value="performance" className="space-y-6">
                {/* Key Metrics */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium text-gray-600">Growth Rate</p>
                          <p className="text-2xl font-bold text-gray-900">+23.5%</p>
                        </div>
                        <TrendingUp className="h-8 w-8 text-green-500" />
                      </div>
                      <div className="mt-2">
                        <Badge variant="secondary" className="text-green-600 bg-green-50">
                          +5.2% vs last month
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium text-gray-600">Churn Rate</p>
                          <p className="text-2xl font-bold text-gray-900">2.1%</p>
                        </div>
                        <TrendingDown className="h-8 w-8 text-red-500" />
                      </div>
                      <div className="mt-2">
                        <Badge variant="secondary" className="text-red-600 bg-red-50">
                          +0.3% vs last month
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium text-gray-600">LTV/CAC</p>
                          <p className="text-2xl font-bold text-gray-900">4.2x</p>
                        </div>
                        <Target className="h-8 w-8 text-blue-500" />
                      </div>
                      <div className="mt-2">
                        <Badge variant="secondary" className="text-green-600 bg-green-50">
                          Healthy ratio
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium text-gray-600">ARPU</p>
                          <p className="text-2xl font-bold text-gray-900">$127</p>
                        </div>
                        <DollarSign className="h-8 w-8 text-purple-500" />
                      </div>
                      <div className="mt-2">
                        <Badge variant="secondary" className="text-green-600 bg-green-50">
                          +8.1% vs last month
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Performance Chart */}
                <Card>
                  <CardHeader>
                    <CardTitle>Revenue & Customer Growth Trend</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ResponsiveContainer width="100%" height={400}>
                      <AreaChart data={performanceData}>
                        <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Area
                          type="monotone"
                          dataKey="revenue"
                          stackId="1"
                          stroke="#3b82f6"
                          fill="#3b82f6"
                          fillOpacity={0.6}
                        />
                      </AreaChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="cohort" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Customer Retention Cohort</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ResponsiveContainer width="100%" height={400}>
                      <LineChart data={cohortData}>
                        <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
                        <XAxis dataKey="week" />
                        <YAxis />
                        <Tooltip />
                        <Line
                          type="monotone"
                          dataKey="retention"
                          stroke="#10b981"
                          strokeWidth={3}
                          dot={{ fill: '#10b981', strokeWidth: 2, r: 4 }}
                        />
                        <Line
                          type="monotone"
                          dataKey="churn"
                          stroke="#ef4444"
                          strokeWidth={3}
                          dot={{ fill: '#ef4444', strokeWidth: 2, r: 4 }}
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="correlation" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Marketing Spend vs Revenue Correlation</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ResponsiveContainer width="100%" height={400}>
                      <ScatterChart data={correlationData}>
                        <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
                        <XAxis dataKey="marketing" name="Marketing Spend" />
                        <YAxis dataKey="revenue" name="Revenue" />
                        <Tooltip cursor={{ strokeDasharray: '3 3' }} />
                        <Scatter dataKey="revenue" fill="#8b5cf6" />
                        <ReferenceLine stroke="#6b7280" strokeDasharray="5 5" />
                      </ScatterChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="forecasting" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Revenue Forecasting</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center py-12">
                      <Activity className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                      <h3 className="text-lg font-medium text-gray-900 mb-2">Forecasting Model</h3>
                      <p className="text-gray-600 mb-6">
                        Advanced forecasting capabilities will be available once you upload historical data.
                      </p>
                      <Button className="bg-blue-600 hover:bg-blue-700">
                        Upload Historical Data
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </main>
      </div>
    </div>
  );
}