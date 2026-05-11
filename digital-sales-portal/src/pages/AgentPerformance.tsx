import { Card, Badge } from '../components/shared/Card'
import { Award, TrendingUp, Target, Phone } from 'lucide-react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

const agents = [
  { name: 'Fatima Yusuf', region: 'Abuja', leads: 85, converted: 22, revenue: '₦4.2M', convRate: '25.9%', target: 92 },
  { name: 'Emeka Walter', region: 'Port Harcourt', leads: 72, converted: 18, revenue: '₦3.5M', convRate: '25.0%', target: 85 },
  { name: 'Bola Fatade', region: 'Lagos', leads: 95, converted: 28, revenue: '₦5.8M', convRate: '29.5%', target: 110 },
  { name: 'Chidi Nnamdi', region: 'Lagos', leads: 68, converted: 15, revenue: '₦2.8M', convRate: '22.1%', target: 78 },
  { name: 'Amina Bello', region: 'Kano', leads: 45, converted: 12, revenue: '₦2.1M', convRate: '26.7%', target: 95 },
]

const agentPerformance = agents.map(a => ({ name: a.name.split(' ')[0], revenue: parseFloat(a.revenue.replace('₦', '').replace('M', '')), leads: a.leads }))

export default function AgentPerformance() {
  return (
    <div className="space-y-6">
      <div><h1 className="text-2xl font-bold text-slate-900">Agent Performance</h1><p className="text-sm text-slate-500 mt-1">Individual sales agent metrics</p></div>

      <Card title="Revenue by Agent (₦M)">
        <ResponsiveContainer width="100%" height={280}>
          <BarChart data={agentPerformance}><CartesianGrid strokeDasharray="3 3" /><XAxis dataKey="name" /><YAxis /><Tooltip />
            <Bar dataKey="revenue" fill="#06b6d4" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </Card>

      <Card>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead><tr className="border-b border-slate-200">
              <th className="text-left text-xs font-medium text-slate-500 uppercase pb-3">Agent</th>
              <th className="text-left text-xs font-medium text-slate-500 uppercase pb-3">Region</th>
              <th className="text-right text-xs font-medium text-slate-500 uppercase pb-3">Leads</th>
              <th className="text-right text-xs font-medium text-slate-500 uppercase pb-3">Converted</th>
              <th className="text-right text-xs font-medium text-slate-500 uppercase pb-3">Revenue</th>
              <th className="text-right text-xs font-medium text-slate-500 uppercase pb-3">Conv Rate</th>
              <th className="text-right text-xs font-medium text-slate-500 uppercase pb-3">Target</th>
            </tr></thead>
            <tbody className="divide-y divide-slate-100">
              {agents.map(a => (
                <tr key={a.name} className="hover:bg-slate-50">
                  <td className="py-3"><div className="flex items-center gap-2"><Award className="w-4 h-4 text-primary-500" /><span className="text-sm font-medium text-slate-900">{a.name}</span></div></td>
                  <td className="py-3 text-sm text-slate-600">{a.region}</td>
                  <td className="py-3 text-sm text-right text-slate-700">{a.leads}</td>
                  <td className="py-3 text-sm text-right font-medium text-slate-900">{a.converted}</td>
                  <td className="py-3 text-sm text-right font-bold text-slate-900">{a.revenue}</td>
                  <td className="py-3 text-sm text-right text-green-600">{a.convRate}</td>
                  <td className="py-3 text-right"><Badge variant={a.target >= 100 ? 'success' : a.target >= 80 ? 'warning' : 'danger'}>{a.target}%</Badge></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  )
}
