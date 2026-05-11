import { Card, Metric, Badge } from '../components/shared/Card'
import { MessageSquare, Ticket, Clock, Users, CheckCircle } from 'lucide-react'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

const ticketTrend = [
  { day: 'Mon', opened: 45, resolved: 38 }, { day: 'Tue', opened: 52, resolved: 48 },
  { day: 'Wed', opened: 38, resolved: 42 }, { day: 'Thu', opened: 61, resolved: 55 },
  { day: 'Fri', opened: 48, resolved: 52 }, { day: 'Sat', opened: 22, resolved: 25 },
  { day: 'Sun', opened: 15, resolved: 18 },
]

const activeAgents = [
  { name: 'Grace Adeyemi', status: 'online', tickets: 8, resolved: 45, csat: '4.8' },
  { name: 'Emeka Obi', status: 'online', tickets: 12, resolved: 38, csat: '4.5' },
  { name: 'Adebayo Okonkwo', status: 'busy', tickets: 15, resolved: 22, csat: '4.2' },
  { name: 'Funke Adeyemi', status: 'online', tickets: 6, resolved: 52, csat: '4.9' },
]

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <div><h1 className="text-2xl font-bold text-slate-900">Support Dashboard</h1><p className="text-sm text-slate-500 mt-1">Omnichannel support operations</p></div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        <Metric icon={MessageSquare} label="Active Chats" value="23" />
        <Metric icon={Ticket} label="Open Tickets" value="142" />
        <Metric icon={Clock} label="Avg Response" value="2.4 min" />
        <Metric icon={CheckCircle} label="Resolved Today" value="89" />
        <Metric icon={Users} label="Online Agents" value="18" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card title="Ticket Volume (This Week)">
          <ResponsiveContainer width="100%" height={280}>
            <AreaChart data={ticketTrend}>
              <CartesianGrid strokeDasharray="3 3" /><XAxis dataKey="day" /><YAxis /><Tooltip />
              <Area type="monotone" dataKey="opened" stroke="#22c55e" fill="#22c55e" fillOpacity={0.1} />
              <Area type="monotone" dataKey="resolved" stroke="#f43f5e" fill="#f43f5e" fillOpacity={0.1} />
            </AreaChart>
          </ResponsiveContainer>
        </Card>
        <Card title="Active Agents">
          <div className="space-y-3">
            {activeAgents.map(a => (
              <div key={a.name} className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-primary-100 flex items-center justify-center text-primary-700 text-sm font-medium">
                    {a.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div><p className="text-sm font-medium text-slate-700">{a.name}</p><Badge variant={a.status === 'online' ? 'success' : 'warning'}>{a.status}</Badge></div>
                </div>
                <div className="text-right text-sm">
                  <p className="text-slate-600">{a.tickets} active · {a.resolved} resolved</p>
                  <p className="text-xs text-slate-400">CSAT: {a.csat}/5</p>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  )
}
