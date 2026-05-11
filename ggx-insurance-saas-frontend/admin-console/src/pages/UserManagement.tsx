import { Card } from '../components/shared/Card'
import { Badge } from '../components/shared/Badge'
import { Search, Filter, Plus, Mail, Edit, Trash2 } from 'lucide-react'
import { useState } from 'react'

const users = [
  { id: 1, name: 'Olawale Adeniyi', email: 'olawale@gogidix.com', role: 'Super Admin', tenant: 'Platform', status: 'active', lastLogin: '2 min ago' },
  { id: 2, name: 'Sarah Johnson', email: 'sarah@safedrive.ng', role: 'Tenant Admin', tenant: 'SafeDrive Nigeria', status: 'active', lastLogin: '1 hr ago' },
  { id: 3, name: 'James Okafor', email: 'james@lagosins.com', role: 'Claims Manager', tenant: 'Lagos Insurance', status: 'active', lastLogin: '3 hr ago' },
  { id: 4, name: 'Amina Bello', email: 'amina@gogidix.com', role: 'Product Manager', tenant: 'Platform', status: 'active', lastLogin: '5 hr ago' },
  { id: 5, name: 'Chidi Nwosu', email: 'chidi@globalins.com', role: 'Underwriter', tenant: 'Global Insurance', status: 'inactive', lastLogin: '2 days ago' },
  { id: 6, name: 'Fatima Yusuf', email: 'fatima@gogidix.com', role: 'Finance Manager', tenant: 'Platform', status: 'active', lastLogin: '30 min ago' },
  { id: 7, name: 'Emeka Obi', email: 'emeka@digitalins.ng', role: 'Broker', tenant: 'Digital Insurance', status: 'suspended', lastLogin: '1 week ago' },
  { id: 8, name: 'Grace Adeyemi', email: 'grace@gogidix.com', role: 'Support Agent', tenant: 'Platform', status: 'active', lastLogin: '15 min ago' },
]

const roleColors: Record<string, 'primary' | 'accent' | 'warning' | 'danger' | 'info'> = {
  'Super Admin': 'danger',
  'Tenant Admin': 'primary',
  'Claims Manager': 'info',
  'Product Manager': 'accent',
  'Underwriter': 'warning',
  'Finance Manager': 'primary',
  'Broker': 'info',
  'Support Agent': 'accent',
}

const statusColors: Record<string, 'success' | 'warning' | 'danger'> = {
  active: 'success',
  inactive: 'warning',
  suspended: 'danger',
}

export default function UserManagement() {
  const [search, setSearch] = useState('')
  const filtered = users.filter(u =>
    u.name.toLowerCase().includes(search.toLowerCase()) ||
    u.email.toLowerCase().includes(search.toLowerCase()) ||
    u.role.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">User Management</h1>
          <p className="text-sm text-slate-500 mt-1">{users.length} users across all tenants</p>
        </div>
        <button className="flex items-center gap-2 bg-primary-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary-700">
          <Plus className="w-4 h-4" /> Add User
        </button>
      </div>

      <Card>
        <div className="flex items-center gap-4 mb-4">
          <div className="flex-1 relative">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search users..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
            />
          </div>
          <button className="flex items-center gap-2 px-3 py-2 border border-slate-200 rounded-lg text-sm text-slate-600 hover:bg-slate-50">
            <Filter className="w-4 h-4" /> Filter
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-200">
                <th className="text-left text-xs font-medium text-slate-500 uppercase tracking-wider pb-3">User</th>
                <th className="text-left text-xs font-medium text-slate-500 uppercase tracking-wider pb-3">Role</th>
                <th className="text-left text-xs font-medium text-slate-500 uppercase tracking-wider pb-3">Tenant</th>
                <th className="text-left text-xs font-medium text-slate-500 uppercase tracking-wider pb-3">Status</th>
                <th className="text-left text-xs font-medium text-slate-500 uppercase tracking-wider pb-3">Last Login</th>
                <th className="text-right text-xs font-medium text-slate-500 uppercase tracking-wider pb-3">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filtered.map(user => (
                <tr key={user.id} className="hover:bg-slate-50">
                  <td className="py-3">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full bg-primary-100 flex items-center justify-center text-primary-700 text-sm font-medium">
                        {user.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div>
                        <p className="text-sm font-medium text-slate-900">{user.name}</p>
                        <p className="text-xs text-slate-500">{user.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="py-3"><Badge variant={roleColors[user.role]}>{user.role}</Badge></td>
                  <td className="py-3 text-sm text-slate-600">{user.tenant}</td>
                  <td className="py-3"><Badge variant={statusColors[user.status]}>{user.status}</Badge></td>
                  <td className="py-3 text-sm text-slate-500">{user.lastLogin}</td>
                  <td className="py-3 text-right">
                    <div className="flex items-center justify-end gap-1">
                      <button className="p-1.5 hover:bg-slate-100 rounded"><Mail className="w-4 h-4 text-slate-400" /></button>
                      <button className="p-1.5 hover:bg-slate-100 rounded"><Edit className="w-4 h-4 text-slate-400" /></button>
                      <button className="p-1.5 hover:bg-red-50 rounded"><Trash2 className="w-4 h-4 text-red-400" /></button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  )
}
