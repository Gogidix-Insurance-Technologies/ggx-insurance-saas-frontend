import { Card, MetricCard } from '../components/shared/Card'
import { Badge } from '../components/shared/Badge'
import { FileText, AlertCircle, CreditCard, Shield, Clock, CheckCircle, ArrowRight } from 'lucide-react'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

const premiumHistory = [
  { month: 'Jan', amount: 45000 }, { month: 'Feb', amount: 45000 }, { month: 'Mar', amount: 52000 },
  { month: 'Apr', amount: 52000 }, { month: 'May', amount: 68000 }, { month: 'Jun', amount: 68000 },
  { month: 'Jul', amount: 68000 },
]

const activePolicies = [
  { id: 'POL-2847', type: 'Auto Insurance', vehicle: 'Toyota Camry 2022', premium: '₦45,000/yr', status: 'active', renewal: '15 Aug 2026' },
  { id: 'POL-3102', type: 'Home Insurance', vehicle: '3-Bed Flat, Lekki', premium: '₦120,000/yr', status: 'active', renewal: '22 Sep 2026' },
  { id: 'POL-3456', type: 'Health Insurance', vehicle: 'Family Plan', premium: '₦280,000/yr', status: 'active', renewal: '01 Dec 2026' },
  { id: 'POL-3789', type: 'Gadget Insurance', vehicle: 'iPhone 15 Pro Max', premium: '₦18,000/yr', status: 'pending', renewal: 'N/A' },
]

const recentClaims = [
  { id: 'CLM-4521', type: 'Auto', desc: 'Windscreen replacement', amount: '₦85,000', status: 'processing', date: '28 Jul 2026' },
  { id: 'CLM-4480', type: 'Health', desc: 'Hospital visit - Malaria', amount: '₦45,000', status: 'approved', date: '15 Jul 2026' },
]

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Welcome back, James</h1>
        <p className="text-sm text-slate-500 mt-1">Here's your insurance overview</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <MetricCard icon={FileText} label="Active Policies" value="3" change="+1 this month" positive />
        <MetricCard icon={AlertCircle} label="Open Claims" value="1" change="Processing" />
        <MetricCard icon={CreditCard} label="Next Premium" value="₦45,000" change="Due 15 Aug" />
        <MetricCard icon={Shield} label="Coverage Score" value="85%" change="Good" positive />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Card title="Premium History">
            <ResponsiveContainer width="100%" height={250}>
              <AreaChart data={premiumHistory}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip formatter={(v: number) => [`₦${v.toLocaleString()}`, 'Premium']} />
                <Area type="monotone" dataKey="amount" stroke="#22c55e" fill="#22c55e" fillOpacity={0.1} />
              </AreaChart>
            </ResponsiveContainer>
          </Card>
        </div>

        <Card title="Quick Actions">
          <div className="space-y-3">
            {[
              { label: 'File a Claim', desc: 'Report an incident', icon: AlertCircle, color: 'bg-red-50 text-red-600' },
              { label: 'Get a Quote', desc: 'New insurance product', icon: FileText, color: 'bg-blue-50 text-blue-600' },
              { label: 'Make Payment', desc: 'Pay premium due', icon: CreditCard, color: 'bg-green-50 text-green-600' },
              { label: 'Download Policy', desc: 'Get policy documents', icon: FileText, color: 'bg-purple-50 text-purple-600' },
            ].map(a => (
              <button key={a.label} className="w-full flex items-center gap-3 p-3 rounded-lg border border-slate-200 hover:bg-slate-50 text-left">
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${a.color}`}><a.icon className="w-5 h-5" /></div>
                <div className="flex-1"><p className="text-sm font-medium text-slate-900">{a.label}</p><p className="text-xs text-slate-500">{a.desc}</p></div>
                <ArrowRight className="w-4 h-4 text-slate-400" />
              </button>
            ))}
          </div>
        </Card>
      </div>

      <Card title="My Policies">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-200">
                <th className="text-left text-xs font-medium text-slate-500 uppercase pb-3">Policy</th>
                <th className="text-left text-xs font-medium text-slate-500 uppercase pb-3">Type</th>
                <th className="text-left text-xs font-medium text-slate-500 uppercase pb-3">Cover</th>
                <th className="text-left text-xs font-medium text-slate-500 uppercase pb-3">Premium</th>
                <th className="text-left text-xs font-medium text-slate-500 uppercase pb-3">Renewal</th>
                <th className="text-left text-xs font-medium text-slate-500 uppercase pb-3">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {activePolicies.map(p => (
                <tr key={p.id} className="hover:bg-slate-50">
                  <td className="py-3 text-sm font-medium text-primary-700">{p.id}</td>
                  <td className="py-3 text-sm text-slate-600">{p.type}</td>
                  <td className="py-3 text-sm text-slate-600">{p.vehicle}</td>
                  <td className="py-3 text-sm font-medium text-slate-900">{p.premium}</td>
                  <td className="py-3 text-sm text-slate-500">{p.renewal}</td>
                  <td className="py-3"><Badge variant={p.status === 'active' ? 'success' : 'warning'}>{p.status}</Badge></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      <Card title="Recent Claims">
        <div className="space-y-3">
          {recentClaims.map(c => (
            <div key={c.id} className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
              <div className="flex items-center gap-3">
                {c.status === 'processing' ? <Clock className="w-4 h-4 text-yellow-500" /> : <CheckCircle className="w-4 h-4 text-green-500" />}
                <div>
                  <p className="text-sm font-medium text-slate-700">{c.id} — {c.desc}</p>
                  <p className="text-xs text-slate-500">{c.type} · {c.date}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm font-medium text-slate-900">{c.amount}</p>
                <Badge variant={c.status === 'approved' ? 'success' : 'warning'} size="sm">{c.status}</Badge>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  )
}
