import { Card, Badge } from '../components/shared/Card'
import { Search, Phone, Mail, Plus } from 'lucide-react'
import { useState } from 'react'

const clients = [
  { id: 1, name: 'Adebayo Industries', contact: 'Tunde Adebayo', email: 'tunde@adebayo.ng', phone: '+234 801 111 1111', type: 'Corporate', policies: 5, premium: '₦2.8M/yr', status: 'active' },
  { id: 2, name: 'Lagos Logistics Ltd', contact: 'Bola Fatade', email: 'bola@lagoslog.ng', phone: '+234 802 222 2222', type: 'Corporate', policies: 8, premium: '₦4.5M/yr', status: 'active' },
  { id: 3, name: 'Ngozi Okafor', contact: 'Ngozi Okafor', email: 'ngozi@gmail.com', phone: '+234 803 333 3333', type: 'Individual', policies: 2, premium: '₦165K/yr', status: 'active' },
  { id: 4, name: 'Port Harcourt Transport', contact: 'Emeka Walter', email: 'emeka@phtransport.ng', phone: '+234 804 444 4444', type: 'Corporate', policies: 12, premium: '₦6.2M/yr', status: 'active' },
  { id: 5, name: 'Sarah Adeyemi', contact: 'Sarah Adeyemi', email: 'sarah.a@yahoo.com', phone: '+234 805 555 5555', type: 'Individual', policies: 1, premium: '₦45K/yr', status: 'active' },
  { id: 6, name: 'TechHub.ng', contact: 'Chidi Nnamdi', email: 'chidi@techhub.ng', phone: '+234 806 666 6666', type: 'SME', policies: 3, premium: '₦520K/yr', status: 'active' },
]

export default function Clients() {
  const [search, setSearch] = useState('')
  const filtered = clients.filter(c => c.name.toLowerCase().includes(search.toLowerCase()))

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div><h1 className="text-2xl font-bold text-slate-900">Client Management</h1><p className="text-sm text-slate-500 mt-1">{clients.length} clients</p></div>
        <button className="flex items-center gap-2 bg-primary-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary-700"><Plus className="w-4 h-4" />Add Client</button>
      </div>

      <div className="relative">
        <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
        <input type="text" placeholder="Search clients..." value={search} onChange={e => setSearch(e.target.value)}
          className="w-full pl-10 pr-4 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 bg-white" />
      </div>

      <Card>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead><tr className="border-b border-slate-200">
              <th className="text-left text-xs font-medium text-slate-500 uppercase pb-3">Client</th>
              <th className="text-left text-xs font-medium text-slate-500 uppercase pb-3">Type</th>
              <th className="text-left text-xs font-medium text-slate-500 uppercase pb-3">Policies</th>
              <th className="text-left text-xs font-medium text-slate-500 uppercase pb-3">Annual Premium</th>
              <th className="text-left text-xs font-medium text-slate-500 uppercase pb-3">Status</th>
              <th className="text-right text-xs font-medium text-slate-500 uppercase pb-3">Contact</th>
            </tr></thead>
            <tbody className="divide-y divide-slate-100">
              {filtered.map(c => (
                <tr key={c.id} className="hover:bg-slate-50">
                  <td className="py-3"><div><p className="text-sm font-medium text-slate-900">{c.name}</p><p className="text-xs text-slate-500">{c.contact}</p></div></td>
                  <td className="py-3"><Badge variant={c.type === 'Corporate' ? 'primary' : c.type === 'SME' ? 'accent' : 'info'}>{c.type}</Badge></td>
                  <td className="py-3 text-sm text-slate-700">{c.policies}</td>
                  <td className="py-3 text-sm font-medium text-slate-900">{c.premium}</td>
                  <td className="py-3"><Badge variant="success">{c.status}</Badge></td>
                  <td className="py-3 text-right"><div className="flex items-center justify-end gap-1">
                    <button className="p-1.5 hover:bg-slate-100 rounded"><Phone className="w-4 h-4 text-slate-400" /></button>
                    <button className="p-1.5 hover:bg-slate-100 rounded"><Mail className="w-4 h-4 text-slate-400" /></button>
                  </div></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  )
}
