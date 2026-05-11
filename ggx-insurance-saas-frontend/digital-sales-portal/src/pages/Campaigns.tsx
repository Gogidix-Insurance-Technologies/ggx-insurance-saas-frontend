import { Card, Badge } from '../components/shared/Card'
import { Megaphone, Plus, Eye, Pause, Play } from 'lucide-react'

const campaigns = [
  { id: 1, name: 'Auto Insurance Summer Promo', channel: 'Digital', budget: '₦5.2M', spent: '₦3.8M', leads: 1250, conv: '4.2%', status: 'active', start: '01 Jul 2026', end: '31 Aug 2026' },
  { id: 2, name: 'Health Insurance Corporate Drive', channel: 'Direct Sales', budget: '₦3.5M', spent: '₦2.1M', leads: 840, conv: '8.1%', status: 'active', start: '15 Jul 2026', end: '30 Sep 2026' },
  { id: 3, name: 'Gadget Insurance Social Media', channel: 'Social Media', budget: '₦2.0M', spent: '₦1.4M', leads: 2100, conv: '2.8%', status: 'active', start: '10 Jul 2026', end: '10 Aug 2026' },
  { id: 4, name: 'Home Insurance Referral Program', channel: 'Referral', budget: '₦800K', spent: '₦256K', leads: 320, conv: '12.5%', status: 'paused', start: '01 Jun 2026', end: '30 Jun 2026' },
  { id: 5, name: 'GIT Fleet Insurance Outreach', channel: 'Email', budget: '₦1.2M', spent: '₦450K', leads: 180, conv: '6.8%', status: 'draft', start: 'N/A', end: 'N/A' },
]

const statusColors: Record<string, 'success' | 'warning' | 'info'> = { active: 'success', paused: 'warning', draft: 'info' }

export default function Campaigns() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div><h1 className="text-2xl font-bold text-slate-900">Campaign Management</h1><p className="text-sm text-slate-500 mt-1">{campaigns.length} campaigns</p></div>
        <button className="flex items-center gap-2 bg-primary-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary-700"><Plus className="w-4 h-4" />New Campaign</button>
      </div>
      <div className="space-y-4">
        {campaigns.map(c => (
          <Card key={c.id}>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary-50 flex items-center justify-center"><Megaphone className="w-6 h-6 text-primary-600" /></div>
                <div>
                  <div className="flex items-center gap-2"><h3 className="font-semibold text-slate-900">{c.name}</h3><Badge variant={statusColors[c.status]}>{c.status}</Badge></div>
                  <p className="text-xs text-slate-500 mt-1">{c.channel} · {c.start} — {c.end}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button className="p-2 hover:bg-slate-100 rounded"><Eye className="w-4 h-4 text-slate-400" /></button>
                {c.status === 'active' ? <button className="p-2 hover:bg-yellow-50 rounded"><Pause className="w-4 h-4 text-yellow-500" /></button> : <button className="p-2 hover:bg-green-50 rounded"><Play className="w-4 h-4 text-green-500" /></button>}
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-4 pt-4 border-t border-slate-100">
              <div><p className="text-xs text-slate-500">Budget</p><p className="text-sm font-medium text-slate-900">{c.budget}</p></div>
              <div><p className="text-xs text-slate-500">Spent</p><p className="text-sm font-medium text-slate-900">{c.spent}</p></div>
              <div><p className="text-xs text-slate-500">Leads</p><p className="text-sm font-medium text-slate-900">{c.leads.toLocaleString()}</p></div>
              <div><p className="text-xs text-slate-500">Conversion</p><p className="text-sm font-medium text-green-600">{c.conv}</p></div>
              <div><p className="text-xs text-slate-500">Utilization</p>
                <div className="w-full bg-slate-200 rounded-full h-2 mt-2"><div className="bg-primary-500 h-2 rounded-full" style={{ width: `${(parseFloat(c.spent.replace(/[₦MK]/g, '')) / parseFloat(c.budget.replace(/[₦MK]/g, ''))) * 100}%` }} /></div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
