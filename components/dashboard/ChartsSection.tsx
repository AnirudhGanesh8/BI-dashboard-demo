'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  Legend,
} from 'recharts';

const revenueData = [
  { month: 'Jan', revenue: 65000, orders: 1200 },
  { month: 'Feb', revenue: 59000, orders: 1100 },
  { month: 'Mar', revenue: 80000, orders: 1500 },
  { month: 'Apr', revenue: 81000, orders: 1600 },
  { month: 'May', revenue: 56000, orders: 1000 },
  { month: 'Jun', revenue: 95000, orders: 1800 },
  { month: 'Jul', revenue: 120000, orders: 2200 },
];

const userGrowthData = [
  { month: 'Jan', users: 4000 },
  { month: 'Feb', users: 4300 },
  { month: 'Mar', users: 4100 },
  { month: 'Apr', users: 4700 },
  { month: 'May', users: 5200 },
  { month: 'Jun', users: 5800 },
  { month: 'Jul', users: 6400 },
];

const categoryData = [
  { name: 'Electronics', value: 35, color: '#3b82f6' },
  { name: 'Clothing', value: 28, color: '#10b981' },
  { name: 'Home & Garden', value: 20, color: '#f59e0b' },
  { name: 'Sports', value: 17, color: '#ef4444' },
];

export function ChartsSection() {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
      {/* Revenue Bar Chart */}
      <Card className="col-span-1">
        <CardHeader>
          <CardTitle className="text-lg font-semibold">Monthly Revenue & Orders</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={revenueData}>
              <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
              <XAxis dataKey="month" className="text-sm" />
              <YAxis className="text-sm" />
              <Tooltip
                contentStyle={{
                  backgroundColor: 'white',
                  border: '1px solid #e5e7eb',
                  borderRadius: '8px',
                }}
              />
              <Bar dataKey="revenue" fill="#3b82f6" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* User Growth Line Chart */}
      <Card className="col-span-1">
        <CardHeader>
          <CardTitle className="text-lg font-semibold">User Growth Trend</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={userGrowthData}>
              <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
              <XAxis dataKey="month" className="text-sm" />
              <YAxis className="text-sm" />
              <Tooltip
                contentStyle={{
                  backgroundColor: 'white',
                  border: '1px solid #e5e7eb',
                  borderRadius: '8px',
                }}
              />
              <Line
                type="monotone"
                dataKey="users"
                stroke="#10b981"
                strokeWidth={3}
                dot={{ fill: '#10b981', strokeWidth: 2, r: 4 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Category Distribution Pie Chart */}
      <Card className="col-span-1 xl:col-span-2">
        <CardHeader>
          <CardTitle className="text-lg font-semibold">Sales by Category</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col lg:flex-row items-center">
            <ResponsiveContainer width="100%" height={300} className="lg:w-1/2">
              <PieChart>
                <Pie
                  data={categoryData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {categoryData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
            
            <div className="lg:w-1/2 lg:pl-8 mt-4 lg:mt-0">
              <div className="space-y-4">
                {categoryData.map((category, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div
                        className="w-4 h-4 rounded"
                        style={{ backgroundColor: category.color }}
                      />
                      <span className="text-sm font-medium text-gray-700">
                        {category.name}
                      </span>
                    </div>
                    <span className="text-sm font-bold text-gray-900">
                      {category.value}%
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}