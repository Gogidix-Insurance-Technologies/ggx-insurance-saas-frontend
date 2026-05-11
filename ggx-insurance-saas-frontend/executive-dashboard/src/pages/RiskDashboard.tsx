import { Card } from '../components/shared/Card'
import { Badge } from '../components/shared/Badge'
import { AlertTriangle, Shield, CheckCircle, XCircle } from 'lucide-react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

const riskMetrics = [
  { metric: 'Solvency Ratio', value: '185%', target: '>150%', status: 'healthy' },
  { metric: 'Loss Ratio', value: '62.4%', target: '<70%', status: 'healthy' },
  { metric: 'Expense Ratio', value: '31.8%', target: '<35%', status: 'healthy' },
  { metric: 'Combined Ratio', value: '94.2%', target: '<100%', status: 'healthy' },
  { metric: 'Reserve Adequacy', value: '112%', target: '>100%', status: 'healthy' },
  { metric: 'CAT Exposure', value: '$8.5M', target: '<$12M', status: 'healthy' },
]

const claimsByProduct = [
  { product: 'Auto', reported: 1250, settled: 980, pending: 270, ratio: 68 },
  { product: 'Home', reported: 420, settled: 380, pending: 40, ratio: 48 },
  { product: 'Health', reported: 890, settled: 820, pending: 70, ratio: 71 },
  { product: 'Gadget', reported: 210, settled: 180, pending: 30, ratio: 35 },
  { product: 'GIT', reported: 85, settled: 72, pending: 13, ratio: 55 },
  { product: 'Haulage', reported: 42, settled: 35, pending: 7, ratio: 68 },
]

const alerts = [
  { severity: 'high', message: 'Health Insurance loss ratio trending above 70% threshold', action: 'Review underwriting guidelines' },
  { severity: 'medium', message: 'Auto claims frequency up 15% in Lagos region', action: 'Adjust pricing model' },
  { severity: 'low', message: 'Gadget Insurance reserve slightly below target', action: 'Monitor monthly' },
]

const severityColors: Record<string, 'danger' | 'warning' | 'info'> = { high: 'danger', medium: 'warning', low: 'info' }
const severityIcons: Record<string, typeof AlertTriangle> = { high: XCircle, medium: AlertTriangle, low: CheckCircle }

export default function RiskDashboard() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Risk Dashboard</h1>
        <p className="text-sm text-slate-500 mt-1">Insurance risk metrics and exposure analysis</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {riskMetrics.map(m => (
          <Card key={m.metric}>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-slate-500">{m.metric}</p>
                <p className="text-2xl font-bold text-slate-900 mt-1">{m.value}</p>
                <p className="text-xs text-slate-400 mt-1">Target: {m.target}</p>
              </div>
              <Shield className="w-8 h-8 text-green-500" />
            </div>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card title="Loss Ratio by Product (%)">
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={claimsByProduct}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="product" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="ratio" fill="#f97316" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </Card>

        <Card title="Risk Alerts">
          <div className="space-y-3">
            {alerts.map((a, i) => {
              const Icon = severityIcons[a.severity]
              return (
                <div key={i} className="p-3 bg-slate-50 rounded-lg">
                  <div className="flex items-start gap-3">
                    <Icon className={`w-4 h-4 mt-0.5 ${a.severity === 'high' ? 'text-red-500' : a.severity === 'medium' ? 'text-yellow-500' : 'text-blue-500'}`} />
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <Badge variant={severityColors[a.severity]} size="sm">{a.severity}</Badge>
                      </div>
                      <p className="text-sm text-slate-700 mt-1">{a.message}</p>
                      <p className="text-xs text-slate-500 mt-1">Action: {a.action}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </Card>
      </div>
    </div>
  )
}
