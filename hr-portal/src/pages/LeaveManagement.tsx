import { Card, Badge } from '../components/shared/Card'
import { CheckCircle, Clock, XCircle, CalendarDays } from 'lucide-react'

const leaveRequests = [
  { id: 1, name: 'Emeka Obi', dept: 'Support', type: 'Annual Leave', from: '01 Aug 2026', to: '10 Aug 2026', days: 7, status: 'approved', reason: 'Family vacation' },
  { id: 2, name: 'Sarah Johnson', dept: 'Claims', type: 'Sick Leave', from: '28 Jul 2026', to: '29 Jul 2026', days: 2, status: 'approved', reason: 'Medical appointment' },
  { id: 3, name: 'Amina Bello', dept: 'Product', type: 'Annual Leave', from: '15 Aug 2026', to: '22 Aug 2026', days: 5, status: 'pending', reason: 'Personal travel' },
  { id: 4, name: 'Fatima Yusuf', dept: 'Sales', type: 'Maternity Leave', from: '01 Sep 2026', to: '28 Feb 2027', days: 180, status: 'pending', reason: 'Maternity' },
  { id: 5, name: 'Chidi Nwosu', dept: 'Finance', type: 'Annual Leave', from: '20 Aug 2026', to: '25 Aug 2026', days: 4, status: 'rejected', reason: 'Year-end close period' },
  { id: 6, name: 'Grace Adeyemi', dept: 'HR', type: 'Personal', from: '05 Aug 2026', to: '05 Aug 2026', days: 1, status: 'approved', reason: 'Personal errand' },
]

const statusConfig: Record<string, { variant: 'success' | 'warning' | 'danger'; icon: typeof CheckCircle }> = {
  approved: { variant: 'success', icon: CheckCircle }, pending: { variant: 'warning', icon: Clock }, rejected: { variant: 'danger', icon: XCircle },
}

export default function LeaveManagement() {
  return (
    <div className="space-y-6">
      <div><h1 className="text-2xl font-bold text-slate-900">Leave Management</h1><p className="text-sm text-slate-500 mt-1">Track and approve leave requests</p></div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="text-center"><CalendarDays className="w-6 h-6 text-primary-500 mx-auto mb-2" /><p className="text-2xl font-bold text-slate-900">6</p><p className="text-xs text-slate-500">Total Requests</p></Card>
        <Card className="text-center"><CheckCircle className="w-6 h-6 text-green-500 mx-auto mb-2" /><p className="text-2xl font-bold text-slate-900">3</p><p className="text-xs text-slate-500">Approved</p></Card>
        <Card className="text-center"><Clock className="w-6 h-6 text-yellow-500 mx-auto mb-2" /><p className="text-2xl font-bold text-slate-900">2</p><p className="text-xs text-slate-500">Pending</p></Card>
        <Card className="text-center"><XCircle className="w-6 h-6 text-red-500 mx-auto mb-2" /><p className="text-2xl font-bold text-slate-900">1</p><p className="text-xs text-slate-500">Rejected</p></Card>
      </div>

      <Card>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead><tr className="border-b border-slate-200">
              <th className="text-left text-xs font-medium text-slate-500 uppercase pb-3">Employee</th>
              <th className="text-left text-xs font-medium text-slate-500 uppercase pb-3">Type</th>
              <th className="text-left text-xs font-medium text-slate-500 uppercase pb-3">Duration</th>
              <th className="text-left text-xs font-medium text-slate-500 uppercase pb-3">Days</th>
              <th className="text-left text-xs font-medium text-slate-500 uppercase pb-3">Reason</th>
              <th className="text-left text-xs font-medium text-slate-500 uppercase pb-3">Status</th>
            </tr></thead>
            <tbody className="divide-y divide-slate-100">
              {leaveRequests.map(l => {
                const cfg = statusConfig[l.status]
                return (
                  <tr key={l.id} className="hover:bg-slate-50">
                    <td className="py-3"><div><p className="text-sm font-medium text-slate-900">{l.name}</p><p className="text-xs text-slate-500">{l.dept}</p></div></td>
                    <td className="py-3 text-sm text-slate-600">{l.type}</td>
                    <td className="py-3 text-sm text-slate-600">{l.from} — {l.to}</td>
                    <td className="py-3 text-sm font-medium text-slate-900">{l.days}</td>
                    <td className="py-3 text-sm text-slate-600">{l.reason}</td>
                    <td className="py-3"><Badge variant={cfg.variant}>{l.status}</Badge></td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  )
}
