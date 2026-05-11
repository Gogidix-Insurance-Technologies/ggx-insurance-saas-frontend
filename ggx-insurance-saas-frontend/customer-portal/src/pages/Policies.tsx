import { Card } from '../components/shared/Card'
import { Badge } from '../components/shared/Badge'
import { FileText, Download, Eye, Plus } from 'lucide-react'

const policies = [
  { id: 'POL-2847', type: 'Auto Insurance', cover: 'Toyota Camry 2022 (ABJ-123-LE)', premium: '₦45,000/yr', deductible: '₦10,000', startDate: '15 Aug 2025', endDate: '14 Aug 2026', status: 'active' },
  { id: 'POL-3102', type: 'Home Insurance', cover: '3-Bed Flat, Lekki Phase 1', premium: '₦120,000/yr', deductible: '₦25,000', startDate: '22 Sep 2025', endDate: '21 Sep 2026', status: 'active' },
  { id: 'POL-3456', type: 'Health Insurance', cover: 'Family Plan (4 members)', premium: '₦280,000/yr', deductible: '₦5,000/visit', startDate: '01 Dec 2025', endDate: '30 Nov 2026', status: 'active' },
  { id: 'POL-3789', type: 'Gadget Insurance', cover: 'iPhone 15 Pro Max', premium: '₦18,000/yr', deductible: '₦5,000', startDate: 'Pending', endDate: 'N/A', status: 'pending' },
  { id: 'POL-2100', type: 'Auto Insurance', cover: 'Honda Accord 2020 (LAG-456-IK)', premium: '₦38,000/yr', deductible: '₦10,000', startDate: '10 Mar 2024', endDate: '09 Mar 2025', status: 'expired' },
]

const statusColors: Record<string, 'success' | 'warning' | 'danger'> = { active: 'success', pending: 'warning', expired: 'danger' }

export default function Policies() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">My Policies</h1>
          <p className="text-sm text-slate-500 mt-1">View and manage your insurance policies</p>
        </div>
        <button className="flex items-center gap-2 bg-primary-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary-700">
          <Plus className="w-4 h-4" /> New Policy
        </button>
      </div>

      <div className="space-y-4">
        {policies.map(p => (
          <Card key={p.id}>
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary-50 flex items-center justify-center">
                  <FileText className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-semibold text-slate-900">{p.id}</h3>
                    <Badge variant={statusColors[p.status]}>{p.status}</Badge>
                  </div>
                  <p className="text-sm text-slate-600 mt-0.5">{p.type}</p>
                  <p className="text-xs text-slate-500">{p.cover}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button className="p-2 hover:bg-slate-100 rounded-lg"><Eye className="w-4 h-4 text-slate-400" /></button>
                <button className="p-2 hover:bg-slate-100 rounded-lg"><Download className="w-4 h-4 text-slate-400" /></button>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4 pt-4 border-t border-slate-100">
              <div><p className="text-xs text-slate-500">Premium</p><p className="text-sm font-medium text-slate-900">{p.premium}</p></div>
              <div><p className="text-xs text-slate-500">Deductible</p><p className="text-sm font-medium text-slate-900">{p.deductible}</p></div>
              <div><p className="text-xs text-slate-500">Start Date</p><p className="text-sm font-medium text-slate-900">{p.startDate}</p></div>
              <div><p className="text-xs text-slate-500">End Date</p><p className="text-sm font-medium text-slate-900">{p.endDate}</p></div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
