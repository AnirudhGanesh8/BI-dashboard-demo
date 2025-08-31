'use client';

import { useState } from 'react';
import { Header } from '@/components/layout/Header';
import { Sidebar } from '@/components/layout/Sidebar';
import { UploadSection } from '@/components/dashboard/UploadSection';

export default function Upload() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header onMenuClick={() => setSidebarOpen(!sidebarOpen)} role="banner" />
      
      <div className="flex">
        <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} role="navigation" />
        
        <main className="flex-1 lg:ml-64 p-4 lg:p-8" role="main" aria-label="Data upload content">
          <div className="max-w-7xl mx-auto space-y-8">
            <header className="mb-8">
              <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2">Data Upload</h1>
              <p className="text-gray-600 dark:text-gray-400">Import your data files to generate insights and visualizations</p>
            </header>

            <section aria-label="File upload interface">
              <UploadSection />
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}