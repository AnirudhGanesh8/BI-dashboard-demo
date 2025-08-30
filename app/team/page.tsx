'use client';

import { useState } from 'react';
import { Header } from '@/components/layout/Header';
import { Sidebar } from '@/components/layout/Sidebar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { 
  Users, 
  UserPlus, 
  Search,
  MoreVertical,
  Mail,
  Shield,
  Eye,
  Edit,
  Trash2
} from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const teamMembers = [
  {
    id: 1,
    name: 'John Doe',
    email: 'john.doe@company.com',
    role: 'Administrator',
    status: 'Active',
    lastActive: '2 hours ago',
    initials: 'JD'
  },
  {
    id: 2,
    name: 'Sarah Wilson',
    email: 'sarah.wilson@company.com',
    role: 'Analyst',
    status: 'Active',
    lastActive: '1 day ago',
    initials: 'SW'
  },
  {
    id: 3,
    name: 'Mike Johnson',
    email: 'mike.johnson@company.com',
    role: 'Viewer',
    status: 'Inactive',
    lastActive: '1 week ago',
    initials: 'MJ'
  },
  {
    id: 4,
    name: 'Emily Chen',
    email: 'emily.chen@company.com',
    role: 'Analyst',
    status: 'Active',
    lastActive: '3 hours ago',
    initials: 'EC'
  },
  {
    id: 5,
    name: 'David Brown',
    email: 'david.brown@company.com',
    role: 'Viewer',
    status: 'Active',
    lastActive: '5 hours ago',
    initials: 'DB'
  }
];

const rolePermissions = {
  Administrator: ['Full access', 'User management', 'System settings', 'Data export'],
  Analyst: ['Dashboard access', 'Report creation', 'Data analysis', 'Limited export'],
  Viewer: ['Dashboard view', 'Report view', 'Basic filters']
};

export default function Team() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredMembers = teamMembers.filter(member =>
    member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    member.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    member.role.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getRoleBadgeColor = (role: string) => {
    switch (role) {
      case 'Administrator': return 'bg-purple-100 text-purple-800';
      case 'Analyst': return 'bg-blue-100 text-blue-800';
      case 'Viewer': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusBadgeColor = (status: string) => {
    return status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800';
  };

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
                <h1 className="text-3xl font-bold text-gray-900 mb-2">Team Management</h1>
                <p className="text-gray-600">Manage team members and their access permissions</p>
              </div>
              <Button className="mt-4 sm:mt-0 bg-blue-600 hover:bg-blue-700">
                <UserPlus className="mr-2 h-4 w-4" />
                Invite Member
              </Button>
            </div>

            {/* Search and Stats */}
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
              <Card className="lg:col-span-3">
                <CardContent className="p-6">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <Input
                      placeholder="Search team members..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Total Members</p>
                      <p className="text-2xl font-bold text-gray-900">{teamMembers.length}</p>
                    </div>
                    <Users className="h-8 w-8 text-blue-500" />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Team Members List */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5" />
                  Team Members
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {filteredMembers.map((member) => (
                    <div key={member.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                      <div className="flex items-center space-x-4">
                        <Avatar className="h-12 w-12">
                          <AvatarFallback className="bg-blue-100 text-blue-600 font-semibold">
                            {member.initials}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <h4 className="font-semibold text-gray-900">{member.name}</h4>
                          <p className="text-sm text-gray-600">{member.email}</p>
                          <p className="text-xs text-gray-500">Last active: {member.lastActive}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Badge className={getRoleBadgeColor(member.role)}>
                          {member.role}
                        </Badge>
                        <Badge className={getStatusBadgeColor(member.status)}>
                          {member.status}
                        </Badge>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon">
                              <MoreVertical className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem>
                              <Eye className="mr-2 h-4 w-4" />
                              View Profile
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <Edit className="mr-2 h-4 w-4" />
                              Edit Permissions
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <Mail className="mr-2 h-4 w-4" />
                              Send Message
                            </DropdownMenuItem>
                            <DropdownMenuItem className="text-red-600">
                              <Trash2 className="mr-2 h-4 w-4" />
                              Remove Member
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Role Permissions */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-5 w-5" />
                  Role Permissions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {Object.entries(rolePermissions).map(([role, permissions]) => (
                    <div key={role} className="space-y-3">
                      <h4 className="font-semibold text-gray-900 flex items-center gap-2">
                        <Badge className={getRoleBadgeColor(role)}>
                          {role}
                        </Badge>
                      </h4>
                      <ul className="space-y-2">
                        {permissions.map((permission, index) => (
                          <li key={index} className="flex items-center text-sm text-gray-600">
                            <div className="h-1.5 w-1.5 bg-blue-600 rounded-full mr-2" />
                            {permission}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
}