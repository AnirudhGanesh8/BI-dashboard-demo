'use client';

import { useState } from 'react';
import { Header } from '@/components/layout/Header';
import { Sidebar } from '@/components/layout/Sidebar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { 
  Upload, 
  FileSpreadsheet, 
  Database, 
  CheckCircle,
  AlertCircle,
  X,
  Download,
  Eye
} from 'lucide-react';

const uploadHistory = [
  {
    id: 1,
    name: 'sales_data_2024.csv',
    size: '2.4 MB',
    uploadedAt: '2 hours ago',
    status: 'Processed',
    rows: 15420
  },
  {
    id: 2,
    name: 'customer_analytics.xlsx',
    size: '1.8 MB',
    uploadedAt: '1 day ago',
    status: 'Processing',
    rows: 8930
  },
  {
    id: 3,
    name: 'inventory_report.csv',
    size: '3.2 MB',
    uploadedAt: '3 days ago',
    status: 'Processed',
    rows: 22150
  }
];

export default function Upload() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    // Simulate upload
    simulateUpload();
  };

  const simulateUpload = () => {
    setIsUploading(true);
    setUploadProgress(0);
    
    const interval = setInterval(() => {
      setUploadProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsUploading(false);
          return 100;
        }
        return prev + 10;
      });
    }, 200);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header onMenuClick={() => setSidebarOpen(!sidebarOpen)} />
      
      <div className="flex">
        <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
        
        <main className="flex-1 lg:ml-64 p-4 lg:p-8">
          <div className="max-w-6xl mx-auto space-y-8">
            {/* Page Header */}
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Data Upload</h1>
              <p className="text-gray-600">Import your data files to generate insights and visualizations</p>
            </div>

            {/* Upload Area */}
            <Card className={`border-2 border-dashed transition-all duration-200 ${
              isDragging ? 'border-blue-400 bg-blue-50' : 'border-gray-300 hover:border-blue-400'
            }`}>
              <CardContent className="p-8">
                <div 
                  className="text-center"
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                  onDrop={handleDrop}
                >
                  <div className="mx-auto flex items-center justify-center h-20 w-20 rounded-full bg-blue-50 mb-6">
                    <Upload className="h-10 w-10 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {isDragging ? 'Drop your files here' : 'Upload Your Data Files'}
                  </h3>
                  <p className="text-gray-600 mb-6 max-w-md mx-auto">
                    Drag and drop your CSV or XLSX files here, or click to browse. 
                    We'll automatically detect columns and suggest visualizations.
                  </p>
                  
                  {isUploading ? (
                    <div className="space-y-4">
                      <Progress value={uploadProgress} className="w-full max-w-md mx-auto" />
                      <p className="text-sm text-gray-600">Uploading... {uploadProgress}%</p>
                    </div>
                  ) : (
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                      <Button 
                        className="bg-blue-600 hover:bg-blue-700"
                        onClick={simulateUpload}
                      >
                        <FileSpreadsheet className="mr-2 h-4 w-4" />
                        Choose Files
                      </Button>
                      <Button variant="outline">
                        <Database className="mr-2 h-4 w-4" />
                        Connect Database
                      </Button>
                    </div>
                  )}
                  
                  <div className="mt-6 text-sm text-gray-500">
                    <p>Supported formats: CSV, XLSX • Max file size: 50MB • Up to 1M rows</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Upload History */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileSpreadsheet className="h-5 w-5" />
                  Upload History
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {uploadHistory.map((file) => (
                    <div key={file.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                      <div className="flex items-center space-x-4">
                        <div className="h-10 w-10 bg-blue-50 rounded-lg flex items-center justify-center">
                          <FileSpreadsheet className="h-5 w-5 text-blue-600" />
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900">{file.name}</h4>
                          <div className="flex items-center space-x-4 text-sm text-gray-500">
                            <span>{file.size}</span>
                            <span>•</span>
                            <span>{file.rows.toLocaleString()} rows</span>
                            <span>•</span>
                            <span>{file.uploadedAt}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Badge variant={file.status === 'Processed' ? 'default' : 'secondary'}>
                          {file.status === 'Processed' ? (
                            <CheckCircle className="mr-1 h-3 w-3" />
                          ) : (
                            <AlertCircle className="mr-1 h-3 w-3" />
                          )}
                          {file.status}
                        </Badge>
                        <div className="flex space-x-1">
                          <Button size="sm" variant="ghost">
                            <Eye className="h-4 w-4" />
                          </Button>
                          <Button size="sm" variant="ghost">
                            <Download className="h-4 w-4" />
                          </Button>
                          <Button size="sm" variant="ghost">
                            <X className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Data Mapping Guide */}
            <Card>
              <CardHeader>
                <CardTitle>Column Mapping Guide</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div className="space-y-2">
                    <h4 className="font-medium text-gray-900">Sales Data</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Date (YYYY-MM-DD)</li>
                      <li>• Revenue/Amount</li>
                      <li>• Product/Category</li>
                      <li>• Customer ID</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-medium text-gray-900">Customer Data</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Customer ID</li>
                      <li>• Name/Email</li>
                      <li>• Registration Date</li>
                      <li>• Location/Region</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-medium text-gray-900">Inventory Data</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Product ID/SKU</li>
                      <li>• Stock Quantity</li>
                      <li>• Unit Price</li>
                      <li>• Category</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
}