import { Card } from '../components/shared/Card'
import { Badge } from '../components/shared/Badge'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

const systemMetrics = [
  { time: '00:00', api: 12.4, claims: 4.2, payments: 2.1 }, { time: '04:00', api: 8.2, claims: 2.1, payments: 1.0 },
  { time: '08:00', api: 18.5, claims: 8.5, payments: 4.2 }, { time: '12:00', api: 22.1, claims: 12.1, payments: 6.8 },
  { time: '16:00', api: 20.3, claims: 10.2, payments: 5.5 }, { time: '20:00', api: 15.2, claims: 6.3, payments: 3.1 },
]

const operationalKpis = [
  { label: 'Avg Policy Issuance', value: '4.2 min', target: '<5 min', status: 'on-track' },
  { label: 'Avg Claims Settlement', value: '3.5 days', target: '<5 days', status: 'on-track' },
  { label: 'Customer Satisfaction', value: '4.6/5', target: '>4.0', status: 'on-track' },
  { label: 'First Contact Resolution', value: '78%', target: '>75%', status: 'on-track' },
  { label: 'Net Promoter Score', value: '+42', target: '>30', status: 'on-track' },
  { label: 'Renewal Rate', value: '85%', target: '>80%', status: 'on-track' },
]

const departmentMetrics = [
  { dept: 'Claims', staff: 45, pending: 270, avgTime: '2.5 days', sla: '96%' },
  { dept: 'Underwriting', staff: 28, pending: 85, avgTime: '4.2 min', sla: '99%' },
  { dept: 'Customer Support', staff: 32, pending: 42, avgTime: '3.1 min', sla: '94%' },
  { dept: 'Finance', staff: 15, pending: 12, avgTime: '1.5 hrs', sla: '98%' },
  { dept: 'IT/Platform', staff: 22, pending: 8, avgTime: '45 min', sla: '99.5%' },
]

export default function OperationalMetrics() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Operational Metrics</h1>
        <p className="text-sm text-slate-500 mt-1">Process efficiency and department performance</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card title="System Throughput (K req/min)">
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={systemMetrics}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="time" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="api" stroke="#9333ea" strokeWidth={2} />
              <Line type="monotone" dataKey="claims" stroke="#f97316" strokeWidth={2} />
              <Line type="monotone" dataKey="payments" stroke="#22c55e" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </Card>

        <Card title="Key Performance Indicators">
          <div className="space-y-3">
            {operationalKpis.map(kpi => (
              <div key={kpi.label} className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                <div>
                  <p className="text-sm font-medium text-slate-700">{kpi.label}</p>
                  <p className="text-xs text-slate-500">Target: {kpi.target}</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-bold text-slate-900">{kpi.value}</span>
                  <Badge variant="success" size="sm">{kpi.status}</Badge>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>

      <Card title="Department Performance">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-200">
                <th className="text-left text-xs font-medium text-slate-500 uppercase pb-3">Department</th>
                <th className="text-right text-xs font-medium text-slate-500 uppercase pb-3">Staff</th>
                <th className="text-right text-xs font-medium text-slate-500 uppercase pb-3">Pending</th>
                <th className="text-right text-xs font-medium text-slate-500 uppercase pb-3">Avg Time</th>
                <th className="text-right text-xs font-medium text-slate-500 uppercase pb-3">SLA</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {departmentMetrics.map(d => (
                <tr key={d.dept} className="hover:bg-slate-50">
                  <td className="py-3 text-sm font-medium text-slate-900">{d.dept}</td>
                  <td className="py-3 text-sm text-right text-slate-700">{d.staff}</td>
                  <td className="py-3 text-sm text-right text-slate-700">{d.pending}</td>
                  <td className="py-3 text-sm text-right text-slate-600">{d.avgTime}</td>
                  <td className="py-3 text-right"><Badge variant={parseFloat(d.sla) > 95 ? 'success' : 'warning'}>{d.sla}</Badge></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  )
}
