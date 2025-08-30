'use client';

import { useState } from 'react';
import { Header } from '@/components/layout/Header';
import { Sidebar } from '@/components/layout/Sidebar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { 
  FileText, 
  Download, 
  Calendar, 
  Filter,
  Search,
  MoreVertical,
  Eye,
  Share2
} from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const reports = [
  {
    id: 1,
    name: 'Monthly Sales Report',
    description: 'Comprehensive sales analysis for the current month',
    type: 'Sales',
    lastUpdated: '2 hours ago',
    status: 'Ready',
    size: '2.4 MB'
  },
  {
    id: 2,
    name: 'Customer Analytics',
    description: 'Customer behavior and engagement metrics',
    type: 'Analytics',
    lastUpdated: '1 day ago',
    status: 'Processing',
    size: '1.8 MB'
  },
  {
    id: 3,
    name: 'Financial Summary Q4',
    description: 'Quarterly financial performance overview',
    type: 'Finance',
    lastUpdated: '3 days ago',
    status: 'Ready',
    size: '3.2 MB'
  },
  {
    id: 4,
    name: 'Inventory Analysis',
    description: 'Stock levels and inventory turnover analysis',
    type: 'Operations',
    lastUpdated: '1 week ago',
    status: 'Ready',
    size: '1.5 MB'
  }
];

export default function Reports() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredReports = reports.filter(report =>
    report.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    report.type.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
                <h1 className="text-3xl font-bold text-gray-900 mb-2">Reports</h1>
                <p className="text-gray-600">Generate and manage your business reports</p>
              </div>
              <Button className="mt-4 sm:mt-0 bg-blue-600 hover:bg-blue-700">
                <FileText className="mr-2 h-4 w-4" />
                Create Report
              </Button>
            </div>

            {/* Search and Filters */}
            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <Input
                      placeholder="Search reports..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                  <Button variant="outline" className="sm:w-auto">
                    <Filter className="mr-2 h-4 w-4" />
                    Filter
                  </Button>
                  <Button variant="outline" className="sm:w-auto">
                    <Calendar className="mr-2 h-4 w-4" />
                    Date Range
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Reports Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredReports.map((report) => (
                <Card key={report.id} className="hover:shadow-lg transition-shadow duration-200">
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center space-x-2">
                        <FileText className="h-5 w-5 text-blue-600" />
                        <Badge variant={report.status === 'Ready' ? 'default' : 'secondary'}>
                          {report.status}
                        </Badge>
                      </div>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon" className="h-8 w-8">
                            <MoreVertical className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>
                            <Eye className="mr-2 h-4 w-4" />
                            View
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Download className="mr-2 h-4 w-4" />
                            Download
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Share2 className="mr-2 h-4 w-4" />
                            Share
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                    <CardTitle className="text-lg">{report.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-sm mb-4">{report.description}</p>
                    <div className="space-y-2 text-xs text-gray-500">
                      <div className="flex justify-between">
                        <span>Type:</span>
                        <span className="font-medium">{report.type}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Size:</span>
                        <span className="font-medium">{report.size}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Updated:</span>
                        <span className="font-medium">{report.lastUpdated}</span>
                      </div>
                    </div>
                    <div className="flex gap-2 mt-4">
                      <Button size="sm" className="flex-1">
                        <Eye className="mr-2 h-3 w-3" />
                        View
                      </Button>
                      <Button size="sm" variant="outline">
                        <Download className="mr-2 h-3 w-3" />
                        Download
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}