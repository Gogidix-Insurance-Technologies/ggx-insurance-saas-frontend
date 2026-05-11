import { Card } from '../components/shared/Card'
import { MessageSquare, Mail, Phone, Send } from 'lucide-react'
import { useState } from 'react'

const faqs = [
  { q: 'How do I file a claim?', a: 'Navigate to Claims > File New Claim. Upload required documents and submit.' },
  { q: 'What is my deductible?', a: 'Your deductible varies by policy. Check your policy document under My Policies.' },
  { q: 'How long does claim processing take?', a: 'Most claims are processed within 5-7 business days.' },
  { q: 'Can I pay in installments?', a: 'Yes, quarterly and monthly payment plans are available for most products.' },
]

export default function Support() {
  const [message, setMessage] = useState('')
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Help & Support</h1>
        <p className="text-sm text-slate-500 mt-1">Get help with your insurance needs</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card title="Contact Us">
          <div className="space-y-3">
            {[
              { label: 'Live Chat', desc: 'Available 24/7', icon: MessageSquare, action: 'Start Chat' },
              { label: 'Email Support', desc: 'support@ggx.io', icon: Mail, action: 'Send Email' },
              { label: 'Phone Support', desc: '+234 700 GGX HELP', icon: Phone, action: 'Call Now' },
            ].map(c => (
              <div key={c.label} className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                <div className="flex items-center gap-3">
                  <c.icon className="w-5 h-5 text-primary-600" />
                  <div>
                    <p className="text-sm font-medium text-slate-700">{c.label}</p>
                    <p className="text-xs text-slate-500">{c.desc}</p>
                  </div>
                </div>
                <button className="text-xs text-primary-600 font-medium hover:text-primary-700">{c.action}</button>
              </div>
            ))}
          </div>
        </Card>

        <Card title="Frequently Asked Questions">
          <div className="space-y-3">
            {faqs.map(f => (
              <div key={f.q} className="p-3 bg-slate-50 rounded-lg">
                <p className="text-sm font-medium text-slate-700">{f.q}</p>
                <p className="text-xs text-slate-500 mt-1">{f.a}</p>
              </div>
            ))}
          </div>
        </Card>
      </div>

      <Card title="Send us a message">
        <div className="space-y-4">
          <textarea
            value={message}
            onChange={e => setMessage(e.target.value)}
            placeholder="Describe your issue or question..."
            rows={4}
            className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 resize-none"
          />
          <button className="flex items-center gap-2 bg-primary-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary-700">
            <Send className="w-4 h-4" /> Send Message
          </button>
        </div>
      </Card>
    </div>
  )
}
