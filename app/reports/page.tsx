'use client';

import { useState } from 'react';
import { Header } from '@/components/layout/Header';
import { Sidebar } from '@/components/layout/Sidebar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { FileText, Download, Search, Filter, Calendar } from 'lucide-react';

export default function Reports() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const reports = [
    {
      id: 1,
      name: 'Monthly Sales Report',
      type: 'Sales',
      lastUpdated: '2 hours ago',
      status: 'Ready',
      size: '2.4 MB'
    },
    {
      id: 2,
      name: 'User Analytics Report',
      type: 'Analytics',
      lastUpdated: '1 day ago',
      status: 'Processing',
      size: '1.8 MB'
    },
    {
      id: 3,
      name: 'Financial Summary Q4',
      type: 'Finance',
      lastUpdated: '3 days ago',
      status: 'Ready',
      size: '3.2 MB'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header onMenuClick={() => setSidebarOpen(!sidebarOpen)} role="banner" />
      
      <div className="flex">
        <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} role="navigation" />
        
        <main className="flex-1 lg:ml-64 p-4 lg:p-8" role="main" aria-label="Reports content">
          <div className="max-w-7xl mx-auto space-y-8">
            <header className="mb-8">
              <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2">Reports</h1>
              <p className="text-gray-600 dark:text-gray-400">Generate and manage your business reports</p>
            </header>

            <section aria-label="Report filters and actions">
              <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
                <CardHeader>
                  <CardTitle className="text-lg font-semibold text-gray-900 dark:text-gray-100">Report Management</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col sm:flex-row gap-4 mb-6">
                    <div className="relative flex-1">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                      <Input
                        placeholder="Search reports..."
                        className="pl-10"
                        aria-label="Search reports"
                      />
                    </div>
                    <Button variant="outline" className="flex items-center">
                      <Filter className="mr-2 h-4 w-4" />
                      Filter
                    </Button>
                    <Button variant="outline" className="flex items-center">
                      <Calendar className="mr-2 h-4 w-4" />
                      Date Range
                    </Button>
                    <Button className="bg-blue-600 hover:bg-blue-700">
                      <FileText className="mr-2 h-4 w-4" />
                      New Report
                    </Button>
                  </div>

                  <div className="space-y-4">
                    {reports.map((report) => (
                      <div
                        key={report.id}
                        className="flex items-center justify-between p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
                      >
                        <div className="flex items-center space-x-4">
                          <div className="h-10 w-10 bg-blue-50 dark:bg-blue-900/20 rounded-lg flex items-center justify-center">
                            <FileText className="h-5 w-5 text-blue-600" />
                          </div>
                          <div>
                            <h3 className="font-medium text-gray-900 dark:text-gray-100">{report.name}</h3>
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                              {report.type} • {report.lastUpdated} • {report.size}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Badge
                            variant={report.status === 'Ready' ? 'default' : 'secondary'}
                            className={report.status === 'Ready' ? 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400' : ''}
                          >
                            {report.status}
                          </Badge>
                          <Button variant="ghost" size="sm" aria-label={`Download ${report.name}`}>
                            <Download className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    ))}
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