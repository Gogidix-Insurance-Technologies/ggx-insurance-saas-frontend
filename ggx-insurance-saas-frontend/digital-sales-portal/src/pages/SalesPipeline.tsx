import { Card, Badge } from '../components/shared/Card'
import { DollarSign, Clock, CheckCircle, Phone } from 'lucide-react'

const pipelineStages = [
  { stage: 'Prospect', count: 45, value: '₦8.2M', items: ['Adebayo Industries', 'TechHub.ng', 'Fresh Leads x43'] },
  { stage: 'Qualified', count: 28, value: '₦5.6M', items: ['Lagos Logistics', 'Ngozi Okafor', 'Others x26'] },
  { stage: 'Proposal', count: 15, value: '₦4.1M', items: ['Port Harcourt Transport', 'Others x14'] },
  { stage: 'Negotiation', count: 8, value: '₦2.8M', items: ['Adebayo Industries', 'Others x7'] },
  { stage: 'Closed Won', count: 12, value: '₦12.5M', items: ['12 deals this month'] },
  { stage: 'Closed Lost', count: 5, value: '₦1.2M', items: ['5 lost this month'] },
]

const stageColors: Record<string, string> = {
  Prospect: 'bg-blue-500', Qualified: 'bg-cyan-500', Proposal: 'bg-yellow-500',
  Negotiation: 'bg-orange-500', 'Closed Won': 'bg-green-500', 'Closed Lost': 'bg-red-500',
}

export default function SalesPipeline() {
  return (
    <div className="space-y-6">
      <div><h1 className="text-2xl font-bold text-slate-900">Sales Pipeline</h1><p className="text-sm text-slate-500 mt-1">Visual pipeline management</p></div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="text-center"><DollarSign className="w-6 h-6 text-green-500 mx-auto mb-2" /><p className="text-2xl font-bold text-slate-900">₦12.5M</p><p className="text-xs text-slate-500">Won This Month</p></Card>
        <Card className="text-center"><Clock className="w-6 h-6 text-yellow-500 mx-auto mb-2" /><p className="text-2xl font-bold text-slate-900">23</p><p className="text-xs text-slate-500">Active Deals</p></Card>
        <Card className="text-center"><CheckCircle className="w-6 h-6 text-green-500 mx-auto mb-2" /><p className="text-2xl font-bold text-slate-900">52%</p><p className="text-xs text-slate-500">Win Rate</p></Card>
        <Card className="text-center"><Phone className="w-6 h-6 text-primary-500 mx-auto mb-2" /><p className="text-2xl font-bold text-slate-900">18</p><p className="text-xs text-slate-500">Avg Days to Close</p></Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {pipelineStages.map(s => (
          <Card key={s.stage}>
            <div className="flex items-center gap-3 mb-3">
              <div className={`w-3 h-3 rounded-full ${stageColors[s.stage]}`} />
              <h3 className="font-semibold text-slate-900">{s.stage}</h3>
              <Badge variant="primary">{s.count}</Badge>
            </div>
            <p className="text-lg font-bold text-slate-900 mb-3">{s.value}</p>
            <div className="space-y-2">
              {s.items.map((item, i) => (
                <div key={i} className="p-2 bg-slate-50 rounded text-sm text-slate-600">{item}</div>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
