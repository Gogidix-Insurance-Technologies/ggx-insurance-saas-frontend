import { Card, Badge } from '../components/shared/Card'
import { Search, Phone, Mail, ArrowRight } from 'lucide-react'
import { useState } from 'react'

const leads = [
  { id: 1, name: 'Adebayo Industries', contact: 'Tunde Adebayo', email: 'tunde@adebayo.ng', phone: '+234 801 234 5678', source: 'Website', product: 'Auto', score: 85, status: 'hot' },
  { id: 2, name: 'Lagos Logistics Ltd', contact: 'Bola Fatade', email: 'bola@lagoslog.ng', phone: '+234 802 345 6789', source: 'Referral', product: 'GIT', score: 92, status: 'hot' },
  { id: 3, name: 'Ngozi Okafor', contact: 'Ngozi Okafor', email: 'ngozi@gmail.com', phone: '+234 803 456 7890', source: 'Social Media', product: 'Health', score: 68, status: 'warm' },
  { id: 4, name: 'Port Harcourt Transport', contact: 'Emeka Walter', email: 'emeka@phtransport.ng', phone: '+234 804 567 8901', source: 'Cold Call', product: 'Haulage', score: 55, status: 'warm' },
  { id: 5, name: 'Sarah Adeyemi', contact: 'Sarah Adeyemi', email: 'sarah.a@yahoo.com', phone: '+234 805 678 9012', source: 'Website', product: 'Home', score: 42, status: 'cold' },
  { id: 6, name: 'TechHub.ng', contact: 'Chidi Nnamdi', email: 'chidi@techhub.ng', phone: '+234 806 789 0123', source: 'Event', product: 'Gadget', score: 78, status: 'warm' },
]

const statusColors: Record<string, 'danger' | 'warning' | 'info'> = { hot: 'danger', warm: 'warning', cold: 'info' }

export default function Leads() {
  const [search, setSearch] = useState('')
  const filtered = leads.filter(l => l.name.toLowerCase().includes(search.toLowerCase()) || l.product.toLowerCase().includes(search.toLowerCase()))

  return (
    <div className="space-y-6">
      <div><h1 className="text-2xl font-bold text-slate-900">Lead Tracking</h1><p className="text-sm text-slate-500 mt-1">{leads.length} leads in pipeline</p></div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="text-center"><p className="text-2xl font-bold text-red-600">2</p><p className="text-xs text-slate-500">Hot Leads</p></Card>
        <Card className="text-center"><p className="text-2xl font-bold text-yellow-600">3</p><p className="text-xs text-slate-500">Warm Leads</p></Card>
        <Card className="text-center"><p className="text-2xl font-bold text-blue-600">1</p><p className="text-xs text-slate-500">Cold Leads</p></Card>
      </div>

      <div className="relative">
        <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
        <input type="text" placeholder="Search leads..." value={search} onChange={e => setSearch(e.target.value)}
          className="w-full pl-10 pr-4 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 bg-white" />
      </div>

      <Card>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead><tr className="border-b border-slate-200">
              <th className="text-left text-xs font-medium text-slate-500 uppercase pb-3">Lead</th>
              <th className="text-left text-xs font-medium text-slate-500 uppercase pb-3">Product</th>
              <th className="text-left text-xs font-medium text-slate-500 uppercase pb-3">Source</th>
              <th className="text-left text-xs font-medium text-slate-500 uppercase pb-3">Score</th>
              <th className="text-left text-xs font-medium text-slate-500 uppercase pb-3">Status</th>
              <th className="text-right text-xs font-medium text-slate-500 uppercase pb-3">Action</th>
            </tr></thead>
            <tbody className="divide-y divide-slate-100">
              {filtered.map(l => (
                <tr key={l.id} className="hover:bg-slate-50">
                  <td className="py-3"><div><p className="text-sm font-medium text-slate-900">{l.name}</p><p className="text-xs text-slate-500">{l.contact}</p></div></td>
                  <td className="py-3"><Badge variant="info">{l.product}</Badge></td>
                  <td className="py-3 text-sm text-slate-600">{l.source}</td>
                  <td className="py-3"><div className="flex items-center gap-2"><div className="w-12 bg-slate-200 rounded-full h-2"><div className={`h-2 rounded-full ${l.score > 75 ? 'bg-red-500' : l.score > 50 ? 'bg-yellow-500' : 'bg-blue-500'}`} style={{ width: `${l.score}%` }} /></div><span className="text-xs text-slate-600">{l.score}</span></div></td>
                  <td className="py-3"><Badge variant={statusColors[l.status]}>{l.status}</Badge></td>
                  <td className="py-3 text-right"><div className="flex items-center justify-end gap-1">
                    <button className="p-1.5 hover:bg-slate-100 rounded"><Phone className="w-4 h-4 text-slate-400" /></button>
                    <button className="p-1.5 hover:bg-slate-100 rounded"><Mail className="w-4 h-4 text-slate-400" /></button>
                    <button className="p-1.5 hover:bg-primary-50 rounded"><ArrowRight className="w-4 h-4 text-primary-500" /></button>
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
