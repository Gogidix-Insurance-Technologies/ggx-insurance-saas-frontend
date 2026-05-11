import { Card, Badge } from '../components/shared/Card'
import { User, Mail, Phone, FileText, AlertCircle, CreditCard } from 'lucide-react'

const customers = [
  { id: 1, name: 'James Okafor', email: 'james.okafor@email.com', phone: '+234 801 234 5678', policies: 3, claims: 2, tickets: 1, ltv: '₦650K', status: 'active', joinDate: 'Dec 2023', segment: 'Premium' },
  { id: 2, name: 'Sarah Johnson', email: 'sarah.j@email.com', phone: '+234 802 345 6789', policies: 2, claims: 0, tickets: 1, ltv: '₦320K', status: 'active', joinDate: 'Mar 2024', segment: 'Standard' },
  { id: 3, name: 'Chidi Nwosu', email: 'chidi.n@email.com', phone: '+234 803 456 7890', policies: 1, claims: 1, tickets: 1, ltv: '₦180K', status: 'at-risk', joinDate: 'Feb 2024', segment: 'Basic' },
  { id: 4, name: 'Fatima Yusuf', email: 'fatima.y@email.com', phone: '+234 804 567 8901', policies: 4, claims: 3, tickets: 1, ltv: '₦1.2M', status: 'active', joinDate: 'Jan 2023', segment: 'VIP' },
  { id: 5, name: 'Amina Bello', email: 'amina.b@email.com', phone: '+234 805 678 9012', policies: 2, claims: 0, tickets: 0, ltv: '₦280K', status: 'active', joinDate: 'Sep 2023', segment: 'Standard' },
]

const segmentColors: Record<string, 'primary' | 'info' | 'warning' | 'accent'> = { VIP: 'accent', Premium: 'primary', Standard: 'info', Basic: 'warning' }
const statusColors: Record<string, 'success' | 'warning' | 'danger'> = { active: 'success', 'at-risk': 'warning', churned: 'danger' }

export default function Customer360() {
  return (
    <div className="space-y-6">
      <div><h1 className="text-2xl font-bold text-slate-900">Customer 360</h1><p className="text-sm text-slate-500 mt-1">Complete customer profiles and interaction history</p></div>

      <div className="space-y-4">
        {customers.map(c => (
          <Card key={c.id}>
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-primary-100 flex items-center justify-center text-primary-700 text-lg font-bold">
                  {c.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-lg font-semibold text-slate-900">{c.name}</h3>
                    <Badge variant={statusColors[c.status]}>{c.status}</Badge>
                    <Badge variant={segmentColors[c.segment]}>{c.segment}</Badge>
                  </div>
                  <div className="flex items-center gap-4 mt-1 text-sm text-slate-500">
                    <span className="flex items-center gap-1"><Mail className="w-3.5 h-3.5" />{c.email}</span>
                    <span className="flex items-center gap-1"><Phone className="w-3.5 h-3.5" />{c.phone}</span>
                    <span>Joined {c.joinDate}</span>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <p className="text-lg font-bold text-slate-900">{c.ltv}</p>
                <p className="text-xs text-slate-500">Lifetime Value</p>
              </div>
            </div>
            <div className="grid grid-cols-4 gap-4 mt-4 pt-4 border-t border-slate-100">
              <div className="flex items-center gap-2"><FileText className="w-4 h-4 text-primary-500" /><div><p className="text-sm font-bold text-slate-900">{c.policies}</p><p className="text-xs text-slate-500">Policies</p></div></div>
              <div className="flex items-center gap-2"><AlertCircle className="w-4 h-4 text-yellow-500" /><div><p className="text-sm font-bold text-slate-900">{c.claims}</p><p className="text-xs text-slate-500">Claims</p></div></div>
              <div className="flex items-center gap-2"><User className="w-4 h-4 text-blue-500" /><div><p className="text-sm font-bold text-slate-900">{c.tickets}</p><p className="text-xs text-slate-500">Tickets</p></div></div>
              <div className="flex items-center gap-2"><CreditCard className="w-4 h-4 text-green-500" /><div><p className="text-sm font-bold text-slate-900">{c.ltv}</p><p className="text-xs text-slate-500">LTV</p></div></div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
