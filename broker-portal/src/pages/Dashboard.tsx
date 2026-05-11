import { Card, Metric, Badge } from '../components/shared/Card'
import { Users, FileText, DollarSign, TrendingUp, Briefcase, RefreshCw } from 'lucide-react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

const monthlySales = [
  { month: 'Jan', policies: 18, revenue: 2.8 }, { month: 'Feb', policies: 22, revenue: 3.5 },
  { month: 'Mar', policies: 25, revenue: 4.1 }, { month: 'Apr', policies: 20, revenue: 3.2 },
  { month: 'May', policies: 28, revenue: 4.8 }, { month: 'Jun', policies: 32, revenue: 5.5 },
  { month: 'Jul', policies: 35, revenue: 5.8 },
]

const upcomingRenewals = [
  { client: 'Adebayo Industries', policy: 'POL-2801', product: 'Auto', premium: '₦850K', renewal: '15 Aug 2026' },
  { client: 'Lagos Logistics', policy: 'POL-2945', product: 'GIT', premium: '₦1.2M', renewal: '22 Aug 2026' },
  { client: 'Ngozi Okafor', policy: 'POL-3102', product: 'Home', premium: '₦120K', renewal: '01 Sep 2026' },
]

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <div><h1 className="text-2xl font-bold text-slate-900">Broker Dashboard</h1><p className="text-sm text-slate-500 mt-1">Welcome back, Bola Fatade</p></div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        <Metric icon={Users} label="Active Clients" value="85" change="+5" />
        <Metric icon={FileText} label="Active Policies" value="142" change="+12" />
        <Metric icon={DollarSign} label="Commission (MTD)" value="₦1.85M" change="+22%" />
        <Metric icon={TrendingUp} label="Conversion Rate" value="32%" change="+4%" />
        <Metric icon={RefreshCw} label="Renewals Due" value="8" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card title="Monthly Sales Performance">
          <ResponsiveContainer width="100%" height={280}>
            <BarChart data={monthlySales}>
              <CartesianGrid strokeDasharray="3 3" /><XAxis dataKey="month" /><YAxis /><Tooltip />
              <Bar dataKey="revenue" fill="#2563eb" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </Card>
        <Card title="Upcoming Renewals">
          <div className="space-y-3">
            {upcomingRenewals.map(r => (
              <div key={r.policy} className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                <div>
                  <p className="text-sm font-medium text-slate-700">{r.client}</p>
                  <div className="flex items-center gap-2 mt-1"><Badge variant="info">{r.product}</Badge><span className="text-xs text-slate-500">{r.policy}</span></div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-bold text-slate-900">{r.premium}</p>
                  <p className="text-xs text-slate-500">{r.renewal}</p>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  )
}
