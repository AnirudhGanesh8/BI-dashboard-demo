'use client';

import { useState } from 'react';
import { Header } from '@/components/layout/Header';
import { Sidebar } from '@/components/layout/Sidebar';
import { KPICards } from '@/components/dashboard/KPICards';
import { ChartsSection } from '@/components/dashboard/ChartsSection';
import { UploadSection } from '@/components/dashboard/UploadSection';

export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header onMenuClick={() => setSidebarOpen(!sidebarOpen)} role="banner" />
      
      <div className="flex">
        <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} role="navigation" />
        
        <main className="flex-1 lg:ml-64 p-4 lg:p-8" role="main" aria-label="Dashboard content">
          <div className="max-w-7xl mx-auto space-y-8">
            {/* Page Header */}
            <header className="mb-8">
              <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2">Dashboard Overview</h1>
              <p className="text-gray-600 dark:text-gray-400">Monitor your business performance and key metrics</p>
            </header>

            {/* KPI Cards */}
            <section aria-label="Key Performance Indicators">
              <KPICards />
            </section>

            {/* Upload Section */}
            <section aria-label="Data Upload">
              <UploadSection />
            </section>

            {/* Charts Section */}
            <section aria-label="Data Visualizations">
              <ChartsSection />
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}