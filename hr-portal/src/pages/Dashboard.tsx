import { Card, Metric, Badge } from '../components/shared/Card'
import { Users, UserPlus, CalendarDays, DollarSign, Award, TrendingUp } from 'lucide-react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

const deptData = [
  { dept: 'Claims', count: 45 }, { dept: 'Underwriting', count: 28 }, { dept: 'Support', count: 32 },
  { dept: 'Finance', count: 15 }, { dept: 'IT', count: 22 }, { dept: 'Sales', count: 18 }, { dept: 'HR', count: 8 },
]

const recentHires = [
  { name: 'Adebayo Okonkwo', dept: 'Claims', role: 'Claims Analyst', date: '28 Jul 2026' },
  { name: 'Chioma Eze', dept: 'IT', role: 'DevOps Engineer', date: '25 Jul 2026' },
  { name: 'Ibrahim Musa', dept: 'Sales', role: 'Sales Executive', date: '20 Jul 2026' },
  { name: 'Funke Adeyemi', dept: 'Support', role: 'Support Agent', date: '18 Jul 2026' },
]

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <div><h1 className="text-2xl font-bold text-slate-900">HR Dashboard</h1><p className="text-sm text-slate-500 mt-1">Human Resources overview</p></div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Metric icon={Users} label="Total Employees" value="168" />
        <Metric icon={UserPlus} label="New Hires (Month)" value="12" />
        <Metric icon={CalendarDays} label="On Leave" value="8" />
        <Metric icon={DollarSign} label="Monthly Payroll" value="₦42.5M" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card title="Employees by Department">
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={deptData}><CartesianGrid strokeDasharray="3 3" /><XAxis dataKey="dept" /><YAxis /><Tooltip />
              <Bar dataKey="count" fill="#f97316" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </Card>
        <Card title="Recent Hires">
          <div className="space-y-3">
            {recentHires.map(h => (
              <div key={h.name} className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-primary-100 flex items-center justify-center text-primary-700 text-sm font-medium">
                    {h.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div><p className="text-sm font-medium text-slate-700">{h.name}</p><p className="text-xs text-slate-500">{h.role}</p></div>
                </div>
                <div className="text-right"><Badge>{h.dept}</Badge><p className="text-xs text-slate-400 mt-1">{h.date}</p></div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  )
}
