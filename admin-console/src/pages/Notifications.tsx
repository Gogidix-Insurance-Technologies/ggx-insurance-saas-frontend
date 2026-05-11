import { Card } from '../components/shared/Card'
import { Badge } from '../components/shared/Badge'
import { Bell, Plus, Mail, MessageSquare, Smartphone, Send, Clock } from 'lucide-react'

const notifications = [
  { id: 1, title: 'New Tenant Onboarding', message: 'SafeDrive Nigeria has completed onboarding', channel: 'email', recipients: 3, status: 'sent', time: '5 min ago' },
  { id: 2, title: 'Claims Alert', message: 'High-value claim detected: #CLM-4521 (₦5.2M)', channel: 'push', recipients: 8, status: 'delivered', time: '12 min ago' },
  { id: 3, title: 'System Update', message: 'Policy Engine v2.4.1 deployed successfully', channel: 'email', recipients: 25, status: 'sent', time: '1 hr ago' },
  { id: 4, title: 'Payment Failure', message: '3 failed payment transactions in last hour', channel: 'sms', recipients: 5, status: 'delivered', time: '2 hr ago' },
  { id: 5, title: 'Fraud Alert', message: 'Suspicious claim pattern detected for tenant #28', channel: 'push', recipients: 4, status: 'pending', time: '3 hr ago' },
]

const templates = [
  { name: 'Welcome Email', channel: 'email', usage: '2.4K' },
  { name: 'Policy Renewal Reminder', channel: 'email', usage: '8.9K' },
  { name: 'Claim Status Update', channel: 'push', usage: '3.2K' },
  { name: 'Payment Confirmation', channel: 'sms', usage: '5.6K' },
  { name: 'Fraud Alert', channel: 'push', usage: '450' },
  { name: 'System Maintenance', channel: 'email', usage: '120' },
]

const channelIcons: Record<string, typeof Mail> = {
  email: Mail,
  push: Bell,
  sms: Smartphone,
}

export default function Notifications() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Notification Center</h1>
          <p className="text-sm text-slate-500 mt-1">Multi-channel notification management</p>
        </div>
        <button className="flex items-center gap-2 bg-primary-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary-700">
          <Plus className="w-4 h-4" /> New Notification
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card title="Recent Notifications">
          <div className="space-y-3">
            {notifications.map(n => {
              const Icon = channelIcons[n.channel] || Bell
              return (
                <div key={n.id} className="flex items-start gap-3 p-3 bg-slate-50 rounded-lg">
                  <div className="w-8 h-8 rounded-lg bg-primary-100 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-4 h-4 text-primary-600" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-medium text-slate-700">{n.title}</p>
                      <Badge variant={n.status === 'sent' || n.status === 'delivered' ? 'success' : 'warning'} size="sm">{n.status}</Badge>
                    </div>
                    <p className="text-xs text-slate-500 mt-1">{n.message}</p>
                    <p className="text-xs text-slate-400 mt-1">{n.recipients} recipients · {n.time}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </Card>

        <Card title="Notification Templates">
          <div className="space-y-2">
            {templates.map(t => {
              const Icon = channelIcons[t.channel] || Bell
              return (
                <div key={t.name} className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <Icon className="w-4 h-4 text-slate-500" />
                    <div>
                      <p className="text-sm font-medium text-slate-700">{t.name}</p>
                      <p className="text-xs text-slate-500">{t.channel.toUpperCase()}</p>
                    </div>
                  </div>
                  <span className="text-xs text-slate-500">{t.usage} sent</span>
                </div>
              )
            })}
          </div>
        </Card>
      </div>
    </div>
  )
}
