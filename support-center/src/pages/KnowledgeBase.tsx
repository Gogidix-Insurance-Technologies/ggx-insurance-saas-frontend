import { Card, Badge } from '../components/shared/Card'
import { BookOpen, Search, Plus, Eye, Edit } from 'lucide-react'
import { useState } from 'react'

const articles = [
  { id: 1, title: 'How to File an Auto Insurance Claim', category: 'Claims', views: 2840, helpful: '94%', status: 'published', updated: '25 Jul 2026' },
  { id: 2, title: 'Understanding Your Home Insurance Policy', category: 'Policies', views: 1920, helpful: '91%', status: 'published', updated: '20 Jul 2026' },
  { id: 3, title: 'Payment Methods and Scheduling', category: 'Billing', views: 1560, helpful: '88%', status: 'published', updated: '18 Jul 2026' },
  { id: 4, title: 'Health Insurance Network Hospitals', category: 'Health', views: 3200, helpful: '96%', status: 'published', updated: '15 Jul 2026' },
  { id: 5, title: 'Gadget Insurance Coverage Details', category: 'Products', views: 890, helpful: '85%', status: 'draft', updated: '10 Jul 2026' },
  { id: 6, title: 'Renewal Process and Grace Periods', category: 'Policies', views: 1240, helpful: '90%', status: 'published', updated: '08 Jul 2026' },
  { id: 7, title: 'How to Add Beneficiaries', category: 'Account', views: 670, helpful: '82%', status: 'review', updated: '05 Jul 2026' },
]

const statusColors: Record<string, 'success' | 'warning' | 'info'> = { published: 'success', draft: 'info', review: 'warning' }

export default function KnowledgeBase() {
  const [search, setSearch] = useState('')
  const filtered = articles.filter(a => a.title.toLowerCase().includes(search.toLowerCase()) || a.category.toLowerCase().includes(search.toLowerCase()))

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div><h1 className="text-2xl font-bold text-slate-900">Knowledge Base</h1><p className="text-sm text-slate-500 mt-1">{articles.length} articles</p></div>
        <button className="flex items-center gap-2 bg-primary-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary-700"><Plus className="w-4 h-4" />New Article</button>
      </div>

      <div className="relative">
        <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
        <input type="text" placeholder="Search articles..." value={search} onChange={e => setSearch(e.target.value)}
          className="w-full pl-10 pr-4 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 bg-white" />
      </div>

      <Card>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead><tr className="border-b border-slate-200">
              <th className="text-left text-xs font-medium text-slate-500 uppercase pb-3">Article</th>
              <th className="text-left text-xs font-medium text-slate-500 uppercase pb-3">Category</th>
              <th className="text-right text-xs font-medium text-slate-500 uppercase pb-3">Views</th>
              <th className="text-right text-xs font-medium text-slate-500 uppercase pb-3">Helpful</th>
              <th className="text-left text-xs font-medium text-slate-500 uppercase pb-3">Status</th>
              <th className="text-right text-xs font-medium text-slate-500 uppercase pb-3">Actions</th>
            </tr></thead>
            <tbody className="divide-y divide-slate-100">
              {filtered.map(a => (
                <tr key={a.id} className="hover:bg-slate-50">
                  <td className="py-3"><div className="flex items-center gap-2"><BookOpen className="w-4 h-4 text-primary-500" /><div><p className="text-sm font-medium text-slate-900">{a.title}</p><p className="text-xs text-slate-500">Updated {a.updated}</p></div></div></td>
                  <td className="py-3"><Badge variant="info">{a.category}</Badge></td>
                  <td className="py-3 text-sm text-right text-slate-700">{a.views.toLocaleString()}</td>
                  <td className="py-3 text-sm text-right font-medium text-green-600">{a.helpful}</td>
                  <td className="py-3"><Badge variant={statusColors[a.status]}>{a.status}</Badge></td>
                  <td className="py-3 text-right"><div className="flex items-center justify-end gap-1">
                    <button className="p-1.5 hover:bg-slate-100 rounded"><Eye className="w-4 h-4 text-slate-400" /></button>
                    <button className="p-1.5 hover:bg-slate-100 rounded"><Edit className="w-4 h-4 text-slate-400" /></button>
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
