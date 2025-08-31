'use client';

import { useState } from 'react';
import { Header } from '@/components/layout/Header';
import { Sidebar } from '@/components/layout/Sidebar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { User, Building, Bell, Shield, Palette } from 'lucide-react';

export default function Settings() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header onMenuClick={() => setSidebarOpen(!sidebarOpen)} role="banner" />
      
      <div className="flex">
        <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} role="navigation" />
        
        <main className="flex-1 lg:ml-64 p-4 lg:p-8" role="main" aria-label="Settings content">
          <div className="max-w-4xl mx-auto space-y-8">
            <header className="mb-8">
              <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2">Settings</h1>
              <p className="text-gray-600 dark:text-gray-400">Manage your account and application preferences</p>
            </header>

            <section aria-label="Settings configuration">
              <Tabs defaultValue="profile" className="space-y-6">
                <TabsList className="grid w-full grid-cols-5 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
                  <TabsTrigger value="profile" className="flex items-center gap-2">
                    <User className="h-4 w-4" />
                    <span className="hidden sm:inline">Profile</span>
                  </TabsTrigger>
                  <TabsTrigger value="company" className="flex items-center gap-2">
                    <Building className="h-4 w-4" />
                    <span className="hidden sm:inline">Company</span>
                  </TabsTrigger>
                  <TabsTrigger value="notifications" className="flex items-center gap-2">
                    <Bell className="h-4 w-4" />
                    <span className="hidden sm:inline">Notifications</span>
                  </TabsTrigger>
                  <TabsTrigger value="security" className="flex items-center gap-2">
                    <Shield className="h-4 w-4" />
                    <span className="hidden sm:inline">Security</span>
                  </TabsTrigger>
                  <TabsTrigger value="appearance" className="flex items-center gap-2">
                    <Palette className="h-4 w-4" />
                    <span className="hidden sm:inline">Appearance</span>
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="profile">
                  <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
                    <CardHeader>
                      <CardTitle className="text-gray-900 dark:text-gray-100">Profile Information</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="firstName">First Name</Label>
                          <Input id="firstName" defaultValue="John" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="lastName">Last Name</Label>
                          <Input id="lastName" defaultValue="Doe" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" defaultValue="john.doe@company.com" />
                      </div>
                      <Button className="bg-blue-600 hover:bg-blue-700">Save Changes</Button>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="company">
                  <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
                    <CardHeader>
                      <CardTitle className="text-gray-900 dark:text-gray-100">Company Settings</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="space-y-2">
                        <Label htmlFor="companyName">Company Name</Label>
                        <Input id="companyName" defaultValue="Acme Corporation" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="industry">Industry</Label>
                        <Input id="industry" defaultValue="Technology" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="employees">Number of Employees</Label>
                        <Input id="employees" defaultValue="250" />
                      </div>
                      <Button className="bg-blue-600 hover:bg-blue-700">Update Company</Button>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="notifications">
                  <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
                    <CardHeader>
                      <CardTitle className="text-gray-900 dark:text-gray-100">Notification Preferences</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <Label htmlFor="emailNotifications">Email Notifications</Label>
                          <p className="text-sm text-gray-500 dark:text-gray-400">Receive email updates about your reports</p>
                        </div>
                        <Switch id="emailNotifications" defaultChecked />
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <Label htmlFor="pushNotifications">Push Notifications</Label>
                          <p className="text-sm text-gray-500 dark:text-gray-400">Get notified about important updates</p>
                        </div>
                        <Switch id="pushNotifications" />
                      </div>
                      <Button className="bg-blue-600 hover:bg-blue-700">Save Preferences</Button>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="security">
                  <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
                    <CardHeader>
                      <CardTitle className="text-gray-900 dark:text-gray-100">Security Settings</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="space-y-2">
                        <Label htmlFor="currentPassword">Current Password</Label>
                        <Input id="currentPassword" type="password" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="newPassword">New Password</Label>
                        <Input id="newPassword" type="password" />
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <Label htmlFor="twoFactor">Two-Factor Authentication</Label>
                          <p className="text-sm text-gray-500 dark:text-gray-400">Add an extra layer of security</p>
                        </div>
                        <Switch id="twoFactor" />
                      </div>
                      <Button className="bg-blue-600 hover:bg-blue-700">Update Security</Button>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="appearance">
                  <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
                    <CardHeader>
                      <CardTitle className="text-gray-900 dark:text-gray-100">Appearance Settings</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <Label htmlFor="darkMode">Dark Mode</Label>
                          <p className="text-sm text-gray-500 dark:text-gray-400">Toggle between light and dark themes</p>
                        </div>
                        <Switch id="darkMode" />
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <Label htmlFor="compactMode">Compact Mode</Label>
                          <p className="text-sm text-gray-500 dark:text-gray-400">Reduce spacing for more content</p>
                        </div>
                        <Switch id="compactMode" />
                      </div>
                      <Button className="bg-blue-600 hover:bg-blue-700">Save Appearance</Button>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}