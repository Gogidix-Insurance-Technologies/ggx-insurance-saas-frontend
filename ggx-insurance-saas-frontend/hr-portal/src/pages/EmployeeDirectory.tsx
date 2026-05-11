import { Card, Badge } from '../components/shared/Card'
import { Search, Mail, Phone, MapPin } from 'lucide-react'
import { useState } from 'react'

const employees = [
  { id: 1, name: 'Olawale Adeniyi', email: 'olawale@gogidix.com', dept: 'IT', role: 'CTO', phone: '+234 801 111 1111', location: 'Lagos', status: 'active', joinDate: 'Jan 2022' },
  { id: 2, name: 'Sarah Johnson', email: 'sarah@gogidix.com', dept: 'Claims', role: 'Claims Manager', phone: '+234 802 222 2222', location: 'Lagos', status: 'active', joinDate: 'Mar 2023' },
  { id: 3, name: 'James Okafor', email: 'james@gogidix.com', dept: 'Underwriting', role: 'Senior Underwriter', phone: '+234 803 333 3333', location: 'Abuja', status: 'active', joinDate: 'Jun 2022' },
  { id: 4, name: 'Amina Bello', email: 'amina@gogidix.com', dept: 'Product', role: 'Product Manager', phone: '+234 804 444 4444', location: 'Lagos', status: 'active', joinDate: 'Sep 2023' },
  { id: 5, name: 'Chidi Nwosu', email: 'chidi@gogidix.com', dept: 'Finance', role: 'Finance Analyst', phone: '+234 805 555 5555', location: 'Lagos', status: 'active', joinDate: 'Feb 2024' },
  { id: 6, name: 'Fatima Yusuf', email: 'fatima@gogidix.com', dept: 'Sales', role: 'Sales Lead', phone: '+234 806 666 6666', location: 'Abuja', status: 'active', joinDate: 'Apr 2023' },
  { id: 7, name: 'Emeka Obi', email: 'emeka@gogidix.com', dept: 'Support', role: 'Support Agent', phone: '+234 807 777 7777', location: 'Lagos', status: 'on-leave', joinDate: 'Aug 2023' },
  { id: 8, name: 'Grace Adeyemi', email: 'grace@gogidix.com', dept: 'HR', role: 'HR Manager', phone: '+234 808 888 8888', location: 'Lagos', status: 'active', joinDate: 'Jan 2022' },
  { id: 9, name: 'Adebayo Okonkwo', email: 'adebayo@gogidix.com', dept: 'Claims', role: 'Claims Analyst', phone: '+234 809 999 9999', location: 'Lagos', status: 'active', joinDate: 'Jul 2026' },
  { id: 10, name: 'Chioma Eze', email: 'chioma@gogidix.com', dept: 'IT', role: 'DevOps Engineer', phone: '+234 810 000 0000', location: 'Lagos', status: 'active', joinDate: 'Jul 2026' },
]

export default function EmployeeDirectory() {
  const [search, setSearch] = useState('')
  const filtered = employees.filter(e => e.name.toLowerCase().includes(search.toLowerCase()) || e.dept.toLowerCase().includes(search.toLowerCase()))

  return (
    <div className="space-y-6">
      <div><h1 className="text-2xl font-bold text-slate-900">Employee Directory</h1><p className="text-sm text-slate-500 mt-1">{employees.length} employees</p></div>
      <div className="relative">
        <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
        <input type="text" placeholder="Search employees..." value={search} onChange={e => setSearch(e.target.value)}
          className="w-full pl-10 pr-4 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 bg-white" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map(e => (
          <Card key={e.id}>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center text-primary-700 font-medium">
                {e.name.split(' ').map(n => n[0]).join('')}
              </div>
              <div>
                <p className="font-semibold text-slate-900">{e.name}</p>
                <p className="text-xs text-slate-500">{e.role}</p>
              </div>
            </div>
            <div className="space-y-1.5 text-sm">
              <div className="flex items-center gap-2 text-slate-600"><Mail className="w-3.5 h-3.5 text-slate-400" />{e.email}</div>
              <div className="flex items-center gap-2 text-slate-600"><Phone className="w-3.5 h-3.5 text-slate-400" />{e.phone}</div>
              <div className="flex items-center gap-2 text-slate-600"><MapPin className="w-3.5 h-3.5 text-slate-400" />{e.location}</div>
            </div>
            <div className="flex items-center justify-between mt-3 pt-3 border-t border-slate-100">
              <Badge variant="primary">{e.dept}</Badge>
              <Badge variant={e.status === 'active' ? 'success' : 'warning'}>{e.status}</Badge>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
