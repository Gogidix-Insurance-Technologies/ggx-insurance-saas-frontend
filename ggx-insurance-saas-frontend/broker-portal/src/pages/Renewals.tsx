import { Card, Badge } from '../components/shared/Card'
import { RefreshCw, Clock, CheckCircle, AlertTriangle, Send } from 'lucide-react'

const renewals = [
  { id: 'POL-2801', client: 'Adebayo Industries', product: 'Auto', premium: '₦850K', expiry: '15 Aug 2026', daysLeft: 18, status: 'pending', action: 'Send Renewal Notice' },
  { id: 'POL-2945', client: 'Lagos Logistics', product: 'GIT', premium: '₦1.2M', expiry: '22 Aug 2026', daysLeft: 25, status: 'pending', action: 'Review Terms' },
  { id: 'POL-3102', client: 'Ngozi Okafor', product: 'Home', premium: '₦120K', expiry: '01 Sep 2026', daysLeft: 35, status: 'notified', action: 'Follow Up' },
  { id: 'POL-3210', client: 'Port Harcourt Transport', product: 'Haulage', premium: '₦1.8M', expiry: '15 Sep 2026', daysLeft: 49, status: 'notified', action: 'Schedule Meeting' },
  { id: 'POL-2805', client: 'TechHub.ng', product: 'Gadget', premium: '₦85K', expiry: '20 Sep 2026', daysLeft: 54, status: 'upcoming', action: 'Prepare Quote' },
  { id: 'POL-2501', client: 'Sarah Adeyemi', product: 'Auto', premium: '₦38K', expiry: '10 Aug 2026', daysLeft: 13, status: 'urgent', action: 'Call Client' },
]

const statusColors: Record<string, 'danger' | 'warning' | 'success' | 'info'> = { urgent: 'danger', pending: 'warning', notified: 'info', upcoming: 'success', renewed: 'success' }
const statusIcons: Record<string, typeof AlertTriangle> = { urgent: AlertTriangle, pending: Clock, notified: Send, upcoming: RefreshCw, renewed: CheckCircle }

export default function Renewals() {
  return (
    <div className="space-y-6">
      <div><h1 className="text-2xl font-bold text-slate-900">Policy Renewals</h1><p className="text-sm text-slate-500 mt-1">{renewals.length} renewals due</p></div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="text-center"><AlertTriangle className="w-6 h-6 text-red-500 mx-auto mb-2" /><p className="text-2xl font-bold text-slate-900">1</p><p className="text-xs text-slate-500">Urgent</p></Card>
        <Card className="text-center"><Clock className="w-6 h-6 text-yellow-500 mx-auto mb-2" /><p className="text-2xl font-bold text-slate-900">2</p><p className="text-xs text-slate-500">Pending</p></Card>
        <Card className="text-center"><Send className="w-6 h-6 text-blue-500 mx-auto mb-2" /><p className="text-2xl font-bold text-slate-900">2</p><p className="text-xs text-slate-500">Notified</p></Card>
        <Card className="text-center"><RefreshCw className="w-6 h-6 text-green-500 mx-auto mb-2" /><p className="text-2xl font-bold text-slate-900">1</p><p className="text-xs text-slate-500">Upcoming</p></Card>
      </div>

      <div className="space-y-4">
        {renewals.sort((a, b) => a.daysLeft - b.daysLeft).map(r => {
          const Icon = statusIcons[r.status]
          return (
            <Card key={r.id}>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${r.status === 'urgent' ? 'bg-red-50' : 'bg-slate-50'}`}>
                    <Icon className={`w-6 h-6 ${r.status === 'urgent' ? 'text-red-600' : 'text-slate-600'}`} />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="font-semibold text-slate-900">{r.id}</h3>
                      <Badge variant={statusColors[r.status]}>{r.status}</Badge>
                    </div>
                    <p className="text-sm text-slate-600 mt-0.5">{r.client} · {r.product}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-lg font-bold text-slate-900">{r.premium}</p>
                  <p className={`text-xs ${r.daysLeft < 15 ? 'text-red-600 font-semibold' : 'text-slate-500'}`}>{r.daysLeft} days left · Expires {r.expiry}</p>
                </div>
              </div>
              <div className="flex items-center justify-between mt-3 pt-3 border-t border-slate-100">
                <span className="text-sm text-slate-500">Next action: <span className="font-medium text-slate-700">{r.action}</span></span>
                <button className="flex items-center gap-1 text-sm text-primary-600 font-medium hover:text-primary-700">
                  <RefreshCw className="w-3.5 h-3.5" />Process Renewal
                </button>
              </div>
            </Card>
          )
        })}
      </div>
    </div>
  )
}
