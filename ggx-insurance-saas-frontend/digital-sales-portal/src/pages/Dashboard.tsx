import { Card, Metric, Badge } from '../components/shared/Card'
import { Megaphone, Users, DollarSign, TrendingUp, Target } from 'lucide-react'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

const conversionData = [
  { week: 'W1', leads: 245, converted: 38 }, { week: 'W2', leads: 312, converted: 52 },
  { week: 'W3', leads: 278, converted: 45 }, { week: 'W4', leads: 389, converted: 68 },
]

const topCampaigns = [
  { name: 'Auto Insurance Summer Promo', channel: 'Digital', leads: 1250, conv: '4.2%', cpl: '₦2,800', status: 'active' },
  { name: 'Health Insurance Corporate Drive', channel: 'Direct', leads: 840, conv: '8.1%', cpl: '₦5,200', status: 'active' },
  { name: 'Gadget Insurance Social Media', channel: 'Social', leads: 2100, conv: '2.8%', cpl: '₦1,200', status: 'active' },
  { name: 'Home Insurance Referral', channel: 'Referral', leads: 320, conv: '12.5%', cpl: '₦800', status: 'paused' },
]

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <div><h1 className="text-2xl font-bold text-slate-900">Digital & Sales Dashboard</h1><p className="text-sm text-slate-500 mt-1">Marketing campaigns, leads & conversion analytics</p></div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        <Metric icon={Megaphone} label="Active Campaigns" value="4" />
        <Metric icon={Users} label="Total Leads" value="4,510" change="+22%" />
        <Metric icon={Target} label="Conversion Rate" value="5.8%" change="+1.2%" />
        <Metric icon={DollarSign} label="Revenue (MTD)" value="₦12.5M" change="+18%" />
        <Metric icon={TrendingUp} label="Avg CPL" value="₦2,500" change="-8%" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card title="Lead Generation Trend">
          <ResponsiveContainer width="100%" height={280}>
            <AreaChart data={conversionData}>
              <CartesianGrid strokeDasharray="3 3" /><XAxis dataKey="week" /><YAxis /><Tooltip />
              <Area type="monotone" dataKey="leads" stroke="#06b6d4" fill="#06b6d4" fillOpacity={0.1} />
              <Area type="monotone" dataKey="converted" stroke="#d946ef" fill="#d946ef" fillOpacity={0.1} />
            </AreaChart>
          </ResponsiveContainer>
        </Card>
        <Card title="Top Campaigns">
          <div className="space-y-3">
            {topCampaigns.map(c => (
              <div key={c.name} className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                <div><p className="text-sm font-medium text-slate-700">{c.name}</p><div className="flex items-center gap-2 mt-1"><Badge variant="info" >{c.channel}</Badge><span className="text-xs text-slate-500">{c.leads} leads · {c.conv} conv</span></div></div>
                <div className="text-right"><p className="text-sm font-medium text-slate-900">{c.cpl}</p><Badge variant={c.status === 'active' ? 'success' : 'warning'}>{c.status}</Badge></div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  )
}
