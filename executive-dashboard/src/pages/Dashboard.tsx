import { Card, MetricCard } from '../components/shared/Card'
import { Badge } from '../components/shared/Badge'
import { DollarSign, Users, FileText, TrendingUp, ArrowUpRight, ArrowDownRight } from 'lucide-react'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell } from 'recharts'

const revenueData = [
  { month: 'Jan', revenue: 24, claims: 18, policies: 12 }, { month: 'Feb', revenue: 28, claims: 22, policies: 14 },
  { month: 'Mar', revenue: 32, claims: 19, policies: 15 }, { month: 'Apr', revenue: 29, claims: 24, policies: 13 },
  { month: 'May', revenue: 35, claims: 20, policies: 17 }, { month: 'Jun', revenue: 39, claims: 25, policies: 18 },
  { month: 'Jul', revenue: 42, claims: 21, policies: 20 },
]

const divisionPerformance = [
  { name: 'Auto', gwp: 18.5, loss: 62, policies: 85000, growth: 15.2 },
  { name: 'Home', gwp: 12.3, loss: 48, policies: 32000, growth: 8.7 },
  { name: 'Health', gwp: 8.9, loss: 71, policies: 28000, growth: 22.1 },
  { name: 'Gadget', gwp: 3.2, loss: 35, policies: 8500, growth: 45.3 },
  { name: 'GIT', gwp: 2.8, loss: 55, policies: 2100, growth: 12.5 },
  { name: 'Haulage', gwp: 1.5, loss: 68, policies: 820, growth: 5.2 },
]

const kpiCards = [
  { label: 'Total GWP', value: '$47.2M', change: '+18.2%', positive: true, icon: DollarSign },
  { label: 'Active Policies', value: '156.4K', change: '+5.3%', positive: true, icon: FileText },
  { label: 'Customer Count', value: '24.6K', change: '+12.5%', positive: true, icon: Users },
  { label: 'Combined Ratio', value: '94.2%', change: '-2.1%', positive: true, icon: TrendingUp },
]

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Executive Overview</h1>
          <p className="text-sm text-slate-500 mt-1">GGX Insurance Group — Q3 FY2026 Performance</p>
        </div>
        <div className="flex items-center gap-2">
          <Badge variant="success">All Targets On Track</Badge>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {kpiCards.map(kpi => (
          <MetricCard key={kpi.label} icon={kpi.icon} label={kpi.label} value={kpi.value} change={kpi.change} positive={kpi.positive} />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card title="Gross Written Premium ($M)">
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={revenueData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Area type="monotone" dataKey="revenue" stroke="#9333ea" fill="#9333ea" fillOpacity={0.1} />
            </AreaChart>
          </ResponsiveContainer>
        </Card>

        <Card title="Division Performance">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-200">
                  <th className="text-left text-xs font-medium text-slate-500 uppercase pb-3">Division</th>
                  <th className="text-right text-xs font-medium text-slate-500 uppercase pb-3">GWP ($M)</th>
                  <th className="text-right text-xs font-medium text-slate-500 uppercase pb-3">Loss %</th>
                  <th className="text-right text-xs font-medium text-slate-500 uppercase pb-3">Growth</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {divisionPerformance.map(d => (
                  <tr key={d.name} className="hover:bg-slate-50">
                    <td className="py-3 text-sm font-medium text-slate-900">{d.name}</td>
                    <td className="py-3 text-sm text-right text-slate-700">${d.gwp}M</td>
                    <td className="py-3 text-sm text-right">
                      <Badge variant={d.loss < 60 ? 'success' : d.loss < 70 ? 'warning' : 'danger'} size="sm">{d.loss}%</Badge>
                    </td>
                    <td className="py-3 text-sm text-right">
                      <span className={`flex items-center justify-end gap-1 ${d.growth > 0 ? 'text-green-600' : 'text-red-600'}`}>
                        {d.growth > 0 ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}
                        {d.growth}%
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      </div>
    </div>
  )
}
