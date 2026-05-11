import { Card, Badge } from '../components/shared/Card'
import { Briefcase, Clock, CheckCircle, UserPlus } from 'lucide-react'

const openPositions = [
  { id: 1, title: 'Senior Claims Analyst', dept: 'Claims', location: 'Lagos', type: 'Full-time', applicants: 24, status: 'open', posted: '15 Jul 2026' },
  { id: 2, title: 'DevOps Engineer', dept: 'IT', location: 'Lagos', type: 'Full-time', applicants: 18, status: 'open', posted: '20 Jul 2026' },
  { id: 3, title: 'Sales Executive', dept: 'Sales', location: 'Abuja', type: 'Full-time', applicants: 32, status: 'open', posted: '22 Jul 2026' },
  { id: 4, title: 'Customer Support Agent', dept: 'Support', location: 'Lagos', type: 'Full-time', applicants: 45, status: 'screening', posted: '10 Jul 2026' },
  { id: 5, title: 'Product Designer', dept: 'Product', location: 'Remote', type: 'Contract', applicants: 15, status: 'interviewing', posted: '05 Jul 2026' },
  { id: 6, title: 'Finance Manager', dept: 'Finance', location: 'Lagos', type: 'Full-time', applicants: 12, status: 'offer', posted: '01 Jul 2026' },
]

const statusColors: Record<string, 'success' | 'warning' | 'info' | 'primary'> = {
  open: 'success', screening: 'warning', interviewing: 'info', offer: 'primary',
}

export default function Recruitment() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div><h1 className="text-2xl font-bold text-slate-900">Recruitment & ATS</h1><p className="text-sm text-slate-500 mt-1">{openPositions.length} open positions</p></div>
        <button className="flex items-center gap-2 bg-primary-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary-700">
          <UserPlus className="w-4 h-4" /> New Position
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="text-center"><Briefcase className="w-6 h-6 text-primary-500 mx-auto mb-2" /><p className="text-2xl font-bold text-slate-900">6</p><p className="text-xs text-slate-500">Open Positions</p></Card>
        <Card className="text-center"><UserPlus className="w-6 h-6 text-blue-500 mx-auto mb-2" /><p className="text-2xl font-bold text-slate-900">146</p><p className="text-xs text-slate-500">Total Applicants</p></Card>
        <Card className="text-center"><Clock className="w-6 h-6 text-yellow-500 mx-auto mb-2" /><p className="text-2xl font-bold text-slate-900">3</p><p className="text-xs text-slate-500">In Pipeline</p></Card>
        <Card className="text-center"><CheckCircle className="w-6 h-6 text-green-500 mx-auto mb-2" /><p className="text-2xl font-bold text-slate-900">4</p><p className="text-xs text-slate-500">Hired (Q3)</p></Card>
      </div>

      <div className="space-y-4">
        {openPositions.map(p => (
          <Card key={p.id}>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary-50 flex items-center justify-center"><Briefcase className="w-6 h-6 text-primary-600" /></div>
                <div>
                  <h3 className="font-semibold text-slate-900">{p.title}</h3>
                  <div className="flex items-center gap-3 text-xs text-slate-500 mt-1">
                    <span>{p.dept}</span><span>·</span><span>{p.location}</span><span>·</span><span>{p.type}</span><span>·</span><span>Posted {p.posted}</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-sm text-slate-600">{p.applicants} applicants</span>
                <Badge variant={statusColors[p.status]}>{p.status}</Badge>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
