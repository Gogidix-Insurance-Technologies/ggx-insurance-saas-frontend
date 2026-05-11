import { Card } from '../components/shared/Card'
import { Badge } from '../components/shared/Badge'
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, BarChart, Bar, XAxis, YAxis, CartesianGrid } from 'recharts'

const productMix = [
  { name: 'Auto', value: 39, policies: 85000, color: '#9333ea' },
  { name: 'Home', value: 26, policies: 32000, color: '#22c55e' },
  { name: 'Health', value: 19, policies: 28000, color: '#f97316' },
  { name: 'Gadget', value: 7, policies: 8500, color: '#3b82f6' },
  { name: 'GIT', value: 6, policies: 2100, color: '#ef4444' },
  { name: 'Haulage', value: 3, policies: 820, color: '#06b6d4' },
]

const customerSegments = [
  { segment: 'Individual', count: 18500, premium: '$22.5M', retention: '82%' },
  { segment: 'Family', count: 4200, premium: '$12.8M', retention: '88%' },
  { segment: 'Corporate', count: 1200, premium: '$8.2M', retention: '92%' },
  { segment: 'SME', count: 680, premium: '$3.7M', retention: '78%' },
]

const geographic = [
  { region: 'Lagos', gwp: '$18.5M', share: 39 }, { region: 'Abuja', gwp: '$9.2M', share: 19 },
  { region: 'Port Harcourt', gwp: '$7.1M', share: 15 }, { region: 'Kano', gwp: '$5.8M', share: 12 },
  { region: 'Ibadan', gwp: '$3.5M', share: 8 }, { region: 'Other', gwp: '$3.1M', share: 7 },
]

export default function PortfolioAnalytics() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Portfolio Analytics</h1>
        <p className="text-sm text-slate-500 mt-1">Product mix, customer segments & geographic distribution</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card title="Product Mix (GWP Share %)">
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie data={productMix} cx="50%" cy="50%" innerRadius={60} outerRadius={100} paddingAngle={2} dataKey="value">
                {productMix.map((entry, i) => <Cell key={i} fill={entry.color} />)}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
          <div className="flex flex-wrap gap-3 justify-center mt-2">
            {productMix.map(p => (
              <div key={p.name} className="flex items-center gap-1.5">
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: p.color }} />
                <span className="text-xs text-slate-600">{p.name} ({p.value}%)</span>
              </div>
            ))}
          </div>
        </Card>

        <Card title="Geographic Distribution">
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={geographic} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis type="number" />
              <YAxis type="category" dataKey="region" width={80} />
              <Tooltip />
              <Bar dataKey="share" fill="#9333ea" radius={[0, 4, 4, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </Card>
      </div>

      <Card title="Customer Segments">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-200">
                <th className="text-left text-xs font-medium text-slate-500 uppercase pb-3">Segment</th>
                <th className="text-right text-xs font-medium text-slate-500 uppercase pb-3">Customers</th>
                <th className="text-right text-xs font-medium text-slate-500 uppercase pb-3">Premium</th>
                <th className="text-right text-xs font-medium text-slate-500 uppercase pb-3">Retention</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {customerSegments.map(s => (
                <tr key={s.segment} className="hover:bg-slate-50">
                  <td className="py-3 text-sm font-medium text-slate-900">{s.segment}</td>
                  <td className="py-3 text-sm text-right text-slate-700">{s.count.toLocaleString()}</td>
                  <td className="py-3 text-sm text-right font-medium text-slate-900">{s.premium}</td>
                  <td className="py-3 text-right"><Badge variant={parseInt(s.retention) > 85 ? 'success' : 'warning'}>{s.retention}</Badge></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  )
}
