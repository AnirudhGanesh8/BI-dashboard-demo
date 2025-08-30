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
    <div className="min-h-screen bg-gray-50">
      <Header onMenuClick={() => setSidebarOpen(!sidebarOpen)} />
      
      <div className="flex">
        <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
        
        <main className="flex-1 lg:ml-64 p-4 lg:p-8">
          <div className="max-w-7xl mx-auto space-y-8">
            {/* Page Header */}
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Dashboard Overview</h1>
              <p className="text-gray-600">Monitor your business performance and key metrics</p>
            </div>

            {/* KPI Cards */}
            <KPICards />

            {/* Upload Section */}
            <UploadSection />

            {/* Charts Section */}
            <ChartsSection />
          </div>
        </main>
      </div>
    </div>
  );
}