import { Card, MetricCard } from '../components/shared/Card'
import { Badge } from '../components/shared/Badge'
import {
  Users, Building2, FileText, DollarSign, TrendingUp, Activity,
  AlertTriangle, CheckCircle, Clock, Shield
} from 'lucide-react'
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  AreaChart, Area, PieChart, Pie, Cell
} from 'recharts'

const revenueData = [
  { month: 'Jan', revenue: 2400000, policies: 1200 },
  { month: 'Feb', revenue: 2800000, policies: 1350 },
  { month: 'Mar', revenue: 3200000, policies: 1500 },
  { month: 'Apr', revenue: 2900000, policies: 1420 },
  { month: 'May', revenue: 3500000, policies: 1680 },
  { month: 'Jun', revenue: 3900000, policies: 1800 },
  { month: 'Jul', revenue: 4200000, policies: 1950 },
]

const tenantDistribution = [
  { name: 'Auto Insurance', value: 35, color: '#3b82f6' },
  { name: 'Home Insurance', value: 25, color: '#22c55e' },
  { name: 'Health Insurance', value: 20, color: '#f59e0b' },
  { name: 'Gadget Insurance', value: 12, color: '#ef4444' },
  { name: 'GIT Insurance', value: 5, color: '#8b5cf6' },
  { name: 'Haulage', value: 3, color: '#06b6d4' },
]

const systemHealth = [
  { service: 'API Gateway', status: 'healthy', uptime: '99.99%', latency: '12ms' },
  { service: 'Auth Service', status: 'healthy', uptime: '99.98%', latency: '8ms' },
  { service: 'Policy Engine', status: 'healthy', uptime: '99.95%', latency: '45ms' },
  { service: 'Claims Engine', status: 'warning', uptime: '99.80%', latency: '120ms' },
  { service: 'Payment Service', status: 'healthy', uptime: '99.99%', latency: '22ms' },
  { service: 'Notification Hub', status: 'healthy', uptime: '99.97%', latency: '15ms' },
]

const recentActivity = [
  { action: 'New tenant onboarded', tenant: 'SafeDrive Nigeria', time: '5 min ago', type: 'success' },
  { action: 'Policy bulk import completed', tenant: 'Lagos Insurance Corp', time: '12 min ago', type: 'info' },
  { action: 'API rate limit threshold reached', tenant: 'Global', time: '18 min ago', type: 'warning' },
  { action: 'System backup completed', tenant: 'Platform', time: '1 hr ago', type: 'success' },
  { action: 'New product configuration deployed', tenant: 'Auto Division', time: '2 hr ago', type: 'info' },
]

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Central Operations Dashboard</h1>
          <p className="text-sm text-slate-500 mt-1">Platform-wide overview for GGX Insurance SaaS</p>
        </div>
        <div className="flex items-center gap-2">
          <Badge variant="success">System Operational</Badge>
          <Badge variant="info">6 Products Active</Badge>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <MetricCard icon={Users} label="Total Users" value="24,580" change="+12.5%" positive />
        <MetricCard icon={Building2} label="Active Tenants" value="142" change="+8 this month" positive />
        <MetricCard icon={FileText} label="Active Policies" value="156,420" change="+5.3%" positive />
        <MetricCard icon={DollarSign} label="Monthly Revenue" value="$4.2M" change="+18.2%" positive />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card title="Revenue & Policy Trends">
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={revenueData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Area type="monotone" dataKey="revenue" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.1} />
            </AreaChart>
          </ResponsiveContainer>
        </Card>

        <Card title="Product Distribution">
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie data={tenantDistribution} cx="50%" cy="50%" innerRadius={60} outerRadius={100} paddingAngle={2} dataKey="value" label={({ name, value }) => `${name}: ${value}%`}>
                {tenantDistribution.map((entry, index) => (
                  <Cell key={index} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card title="System Health">
          <div className="space-y-3">
            {systemHealth.map(item => (
              <div key={item.service} className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                <div className="flex items-center gap-3">
                  {item.status === 'healthy' ? <CheckCircle className="w-4 h-4 text-green-500" /> : <AlertTriangle className="w-4 h-4 text-yellow-500" />}
                  <span className="text-sm font-medium text-slate-700">{item.service}</span>
                </div>
                <div className="flex items-center gap-4 text-sm">
                  <span className="text-slate-500">{item.uptime}</span>
                  <Badge variant={item.status === 'healthy' ? 'success' : 'warning'}>{item.latency}</Badge>
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card title="Recent Activity">
          <div className="space-y-3">
            {recentActivity.map((item, i) => (
              <div key={i} className="flex items-start gap-3 p-3 bg-slate-50 rounded-lg">
                {item.type === 'success' ? <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" /> :
                 item.type === 'warning' ? <AlertTriangle className="w-4 h-4 text-yellow-500 mt-0.5" /> :
                 <Activity className="w-4 h-4 text-blue-500 mt-0.5" />}
                <div className="flex-1">
                  <p className="text-sm font-medium text-slate-700">{item.action}</p>
                  <p className="text-xs text-slate-500">{item.tenant} · {item.time}</p>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  )
}
