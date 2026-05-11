import { Card, Badge } from '../components/shared/Card'
import { FileText, Plus, Calculator, Send } from 'lucide-react'
import { useState } from 'react'

const products = [
  { id: 'auto', name: 'Auto Insurance', variants: ['Comprehensive', 'Third Party', 'Fire & Theft'] },
  { id: 'home', name: 'Home Insurance', variants: ['Building Only', 'Contents Only', 'Combined'] },
  { id: 'health', name: 'Health Insurance', variants: ['Individual', 'Family', 'Corporate'] },
  { id: 'gadget', name: 'Gadget Insurance', variants: ['Phone', 'Laptop', 'Multi-Device'] },
  { id: 'git', name: 'Goods in Transit', variants: ['Single Trip', 'Annual', 'Fleet'] },
  { id: 'haulage', name: 'Haulage Insurance', variants: ['Per Trip', 'Annual', 'Fleet'] },
]

const recentQuotes = [
  { id: 'QT-8945', client: 'Adebayo Industries', product: 'Auto', variant: 'Comprehensive', premium: '₦45,000', status: 'quoted', date: '28 Jul 2026' },
  { id: 'QT-8944', client: 'TechHub.ng', product: 'Gadget', variant: 'Multi-Device', premium: '₦85,000', status: 'bound', date: '27 Jul 2026' },
  { id: 'QT-8943', client: 'Port Harcourt Transport', product: 'Haulage', variant: 'Fleet', premium: '₦1.2M', status: 'quoted', date: '26 Jul 2026' },
  { id: 'QT-8942', client: 'Ngozi Okafor', product: 'Health', variant: 'Family', premium: '₦280,000', status: 'expired', date: '20 Jul 2026' },
]

const statusColors: Record<string, 'success' | 'warning' | 'danger' | 'info'> = { quoted: 'info', bound: 'success', expired: 'danger', draft: 'warning' }

export default function QuoteBind() {
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null)

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div><h1 className="text-2xl font-bold text-slate-900">Quote & Bind</h1><p className="text-sm text-slate-500 mt-1">Multi-product quote generation</p></div>
        <button className="flex items-center gap-2 bg-primary-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary-700"><Plus className="w-4 h-4" />New Quote</button>
      </div>

      <Card title="Select Product">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {products.map(p => (
            <button key={p.id} onClick={() => setSelectedProduct(p.id)}
              className={`p-4 rounded-lg border-2 text-left transition-colors ${selectedProduct === p.id ? 'border-primary-500 bg-primary-50' : 'border-slate-200 hover:border-primary-300'}`}>
              <FileText className={`w-5 h-5 mb-2 ${selectedProduct === p.id ? 'text-primary-600' : 'text-slate-400'}`} />
              <p className="text-sm font-semibold text-slate-900">{p.name}</p>
              <div className="flex flex-wrap gap-1 mt-2">
                {p.variants.map(v => <Badge key={v} variant="info" size="sm">{v}</Badge>)}
              </div>
            </button>
          ))}
        </div>
      </Card>

      {selectedProduct && (
        <Card title="Quote Details">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-medium text-slate-500 block mb-1">Client</label>
              <select className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary-500">
                <option>Select client...</option>
                <option>Adebayo Industries</option>
                <option>Lagos Logistics Ltd</option>
                <option>Ngozi Okafor</option>
              </select>
            </div>
            <div>
              <label className="text-xs font-medium text-slate-500 block mb-1">Variant</label>
              <select className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary-500">
                {products.find(p => p.id === selectedProduct)?.variants.map(v => <option key={v}>{v}</option>)}
              </select>
            </div>
            <div>
              <label className="text-xs font-medium text-slate-500 block mb-1">Sum Insured</label>
              <input type="text" placeholder="Enter amount" className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary-500" />
            </div>
            <div>
              <label className="text-xs font-medium text-slate-500 block mb-1">Duration</label>
              <select className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary-500">
                <option>12 months</option><option>6 months</option><option>3 months</option>
              </select>
            </div>
          </div>
          <div className="flex items-center gap-3 mt-4">
            <button className="flex items-center gap-2 px-4 py-2 bg-slate-100 text-slate-700 rounded-lg text-sm font-medium hover:bg-slate-200"><Calculator className="w-4 h-4" />Calculate Premium</button>
            <button className="flex items-center gap-2 px-4 py-2 bg-primary-600 text-white rounded-lg text-sm font-medium hover:bg-primary-700"><Send className="w-4 h-4" />Send Quote</button>
          </div>
        </Card>
      )}

      <Card title="Recent Quotes">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead><tr className="border-b border-slate-200">
              <th className="text-left text-xs font-medium text-slate-500 uppercase pb-3">Quote ID</th>
              <th className="text-left text-xs font-medium text-slate-500 uppercase pb-3">Client</th>
              <th className="text-left text-xs font-medium text-slate-500 uppercase pb-3">Product</th>
              <th className="text-right text-xs font-medium text-slate-500 uppercase pb-3">Premium</th>
              <th className="text-left text-xs font-medium text-slate-500 uppercase pb-3">Status</th>
            </tr></thead>
            <tbody className="divide-y divide-slate-100">
              {recentQuotes.map(q => (
                <tr key={q.id} className="hover:bg-slate-50">
                  <td className="py-3 text-sm font-medium text-primary-700">{q.id}</td>
                  <td className="py-3 text-sm text-slate-700">{q.client}</td>
                  <td className="py-3"><Badge variant="info">{q.product} — {q.variant}</Badge></td>
                  <td className="py-3 text-sm font-medium text-slate-900 text-right">{q.premium}</td>
                  <td className="py-3"><Badge variant={statusColors[q.status]}>{q.status}</Badge></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  )
}
