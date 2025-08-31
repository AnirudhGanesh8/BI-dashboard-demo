'use client';

import { Upload, FileSpreadsheet, Database } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export function UploadSection() {
  return (
    <Card className="border-dashed border-2 border-gray-300 dark:border-gray-600 hover:border-blue-400 dark:hover:border-blue-500 transition-colors bg-white dark:bg-gray-800">
      <CardHeader>
        <CardTitle className="text-lg font-semibold flex items-center text-gray-900 dark:text-gray-100">
          <Database className="mr-2 h-5 w-5 text-blue-600" />
          Data Management
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-center py-8">
          <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-blue-50 dark:bg-blue-900/20 mb-4">
            <Upload className="h-8 w-8 text-blue-600" />
          </div>
          <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-2">Upload Your Data</h3>
          <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-md mx-auto">
            Import CSV or XLSX files to generate dynamic dashboards and insights. 
            Our system automatically maps columns and creates visualizations.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700">
              <FileSpreadsheet className="mr-2 h-4 w-4" />
              Upload CSV/XLSX
            </Button>
            <Button variant="outline">
              <Database className="mr-2 h-4 w-4" />
              Connect Database
            </Button>
          </div>
          
          <div className="mt-6 text-sm text-gray-500 dark:text-gray-400">
            <p>Supported formats: CSV, XLSX • Max file size: 50MB</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}