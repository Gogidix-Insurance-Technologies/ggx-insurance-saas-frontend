import { Card, Badge } from '../components/shared/Card'
import { Ticket, Clock, CheckCircle, AlertTriangle } from 'lucide-react'

const tickets = [
  { id: 'TKT-4521', customer: 'James Okafor', subject: 'Auto claim status inquiry', priority: 'high', status: 'open', sla: '2h left', channel: 'chat', created: '28 Jul 14:32' },
  { id: 'TKT-4520', customer: 'Sarah Johnson', subject: 'Policy document update request', priority: 'medium', status: 'in-progress', sla: '12h left', channel: 'email', created: '28 Jul 13:15' },
  { id: 'TKT-4519', customer: 'Amina Bello', subject: 'Add family member to health plan', priority: 'low', status: 'open', sla: '24h left', channel: 'chat', created: '28 Jul 12:45' },
  { id: 'TKT-4518', customer: 'Chidi Nwosu', subject: 'Claim CLM-4499 status', priority: 'high', status: 'escalated', sla: 'OVERDUE', channel: 'phone', created: '27 Jul 16:00' },
  { id: 'TKT-4517', customer: 'Fatima Yusuf', subject: 'Payment not reflecting', priority: 'medium', status: 'in-progress', sla: '8h left', channel: 'chat', created: '28 Jul 10:30' },
  { id: 'TKT-4516', customer: 'Emeka Obi', subject: 'Policy cancellation request', priority: 'high', status: 'resolved', sla: 'Met', channel: 'email', created: '27 Jul 09:00' },
]

const statusColors: Record<string, 'success' | 'warning' | 'danger' | 'info' | 'primary'> = {
  open: 'warning', 'in-progress': 'primary', escalated: 'danger', resolved: 'success',
}
const priorityColors: Record<string, 'danger' | 'warning' | 'info'> = { high: 'danger', medium: 'warning', low: 'info' }

export default function Tickets() {
  return (
    <div className="space-y-6">
      <div><h1 className="text-2xl font-bold text-slate-900">Ticket Management</h1><p className="text-sm text-slate-500 mt-1">SLA tracking and resolution</p></div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="text-center"><Ticket className="w-6 h-6 text-yellow-500 mx-auto mb-2" /><p className="text-2xl font-bold text-slate-900">142</p><p className="text-xs text-slate-500">Open Tickets</p></Card>
        <Card className="text-center"><Clock className="w-6 h-6 text-blue-500 mx-auto mb-2" /><p className="text-2xl font-bold text-slate-900">38</p><p className="text-xs text-slate-500">In Progress</p></Card>
        <Card className="text-center"><AlertTriangle className="w-6 h-6 text-red-500 mx-auto mb-2" /><p className="text-2xl font-bold text-slate-900">5</p><p className="text-xs text-slate-500">SLA Breached</p></Card>
        <Card className="text-center"><CheckCircle className="w-6 h-6 text-green-500 mx-auto mb-2" /><p className="text-2xl font-bold text-slate-900">89</p><p className="text-xs text-slate-500">Resolved Today</p></Card>
      </div>

      <Card>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead><tr className="border-b border-slate-200">
              <th className="text-left text-xs font-medium text-slate-500 uppercase pb-3">Ticket</th>
              <th className="text-left text-xs font-medium text-slate-500 uppercase pb-3">Customer</th>
              <th className="text-left text-xs font-medium text-slate-500 uppercase pb-3">Priority</th>
              <th className="text-left text-xs font-medium text-slate-500 uppercase pb-3">Channel</th>
              <th className="text-left text-xs font-medium text-slate-500 uppercase pb-3">SLA</th>
              <th className="text-left text-xs font-medium text-slate-500 uppercase pb-3">Status</th>
            </tr></thead>
            <tbody className="divide-y divide-slate-100">
              {tickets.map(t => (
                <tr key={t.id} className="hover:bg-slate-50">
                  <td className="py-3"><div><p className="text-sm font-medium text-primary-700">{t.id}</p><p className="text-xs text-slate-500">{t.subject}</p></div></td>
                  <td className="py-3 text-sm text-slate-600">{t.customer}</td>
                  <td className="py-3"><Badge variant={priorityColors[t.priority]}>{t.priority}</Badge></td>
                  <td className="py-3"><Badge variant="info">{t.channel}</Badge></td>
                  <td className="py-3"><Badge variant={t.sla === 'OVERDUE' ? 'danger' : 'success'}>{t.sla}</Badge></td>
                  <td className="py-3"><Badge variant={statusColors[t.status]}>{t.status}</Badge></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  )
}
