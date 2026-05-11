import { Card } from '../components/shared/Card'
import { Badge } from '../components/shared/Badge'
import { Settings, Database, Mail, Shield, Globe, Bell, Save } from 'lucide-react'

const configSections = [
  { title: 'General Settings', icon: Globe, items: [
    { label: 'Platform Name', value: 'GGX Insurance SaaS', type: 'text' },
    { label: 'Default Language', value: 'English', type: 'select' },
    { label: 'Default Currency', value: 'NGN (₦)', type: 'select' },
    { label: 'Time Zone', value: 'Africa/Lagos (WAT)', type: 'select' },
  ]},
  { title: 'Security Settings', icon: Shield, items: [
    { label: 'Session Timeout', value: '30 minutes', type: 'text' },
    { label: 'Max Login Attempts', value: '5', type: 'text' },
    { label: 'Two-Factor Authentication', value: 'Enabled', type: 'toggle' },
    { label: 'Password Policy', value: 'Strong (8+ chars, special, number)', type: 'text' },
  ]},
  { title: 'Email Configuration', icon: Mail, items: [
    { label: 'SMTP Host', value: 'smtp.gogidix.com', type: 'text' },
    { label: 'SMTP Port', value: '587', type: 'text' },
    { label: 'From Address', value: 'noreply@ggx.io', type: 'text' },
    { label: 'Email Templates', value: '24 configured', type: 'text' },
  ]},
  { title: 'Database & Storage', icon: Database, items: [
    { label: 'Primary Database', value: 'MongoDB 7.0 Cluster', type: 'text' },
    { label: 'Cache Layer', value: 'Redis 7.2', type: 'text' },
    { label: 'File Storage', value: 'AWS S3 (ng-south-1)', type: 'text' },
    { label: 'Backup Schedule', value: 'Every 6 hours', type: 'text' },
  ]},
  { title: 'Notification Settings', icon: Bell, items: [
    { label: 'Push Notifications', value: 'Enabled', type: 'toggle' },
    { label: 'SMS Gateway', value: 'Twilio (Active)', type: 'text' },
    { label: 'Webhook URL', value: 'https://api.ggx.io/webhooks', type: 'text' },
    { label: 'Rate Limit', value: '1000/min per tenant', type: 'text' },
  ]},
]

export default function SystemConfig() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">System Configuration</h1>
          <p className="text-sm text-slate-500 mt-1">Platform-wide settings and configuration</p>
        </div>
        <button className="flex items-center gap-2 bg-primary-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary-700">
          <Save className="w-4 h-4" /> Save All Changes
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {configSections.map(section => (
          <Card key={section.title}>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-lg bg-primary-50 flex items-center justify-center">
                <section.icon className="w-4 h-4 text-primary-600" />
              </div>
              <h3 className="font-semibold text-slate-900">{section.title}</h3>
            </div>
            <div className="space-y-3">
              {section.items.map(item => (
                <div key={item.label} className="flex items-center justify-between py-2 border-b border-slate-100 last:border-0">
                  <span className="text-sm text-slate-600">{item.label}</span>
                  <span className="text-sm font-medium text-slate-900">{item.value}</span>
                </div>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
