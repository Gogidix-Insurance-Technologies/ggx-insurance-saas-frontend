import { Card, Badge } from '../components/shared/Card'
import { Send, Bot, User, Sparkles } from 'lucide-react'
import { useState } from 'react'

const conversations = [
  { id: 1, customer: 'James Okafor', channel: 'chat', preview: 'I need help with my auto claim...', time: '2 min ago', unread: 3, priority: 'high' },
  { id: 2, customer: 'Sarah Johnson', channel: 'email', preview: 'Requesting policy document update', time: '8 min ago', unread: 1, priority: 'medium' },
  { id: 3, customer: 'Amina Bello', channel: 'chat', preview: 'How do I add a family member to...', time: '15 min ago', unread: 0, priority: 'low' },
  { id: 4, customer: 'Chidi Nwosu', channel: 'phone', preview: 'Claim status inquiry CLM-4499', time: '22 min ago', unread: 0, priority: 'high' },
  { id: 5, customer: 'Fatima Yusuf', channel: 'chat', preview: 'Payment not reflecting on my account', time: '30 min ago', unread: 2, priority: 'medium' },
]

const chatMessages = [
  { from: 'customer', text: 'Hi, I filed a claim last week (CLM-4521) and haven\'t heard back. Could you check the status?', time: '14:32' },
  { from: 'agent', text: 'Hello James! Let me check that for you right away.', time: '14:33' },
  { from: 'ai', text: 'AI Suggestion: Claim CLM-4521 is in processing stage. Windscreen replacement approved. Waiting for repair shop confirmation. Suggest updating customer with timeline.', time: '14:33' },
  { from: 'agent', text: 'I can see your claim CLM-4521 is currently being processed. The windscreen replacement has been approved and we\'re just waiting for confirmation from the repair shop. You should hear back within 24-48 hours.', time: '14:34' },
  { from: 'customer', text: 'Great, thank you! Will I get an email update?', time: '14:35' },
]

const priorityColors: Record<string, 'danger' | 'warning' | 'info'> = { high: 'danger', medium: 'warning', low: 'info' }

export default function Inbox() {
  const [selected, setSelected] = useState(1)
  const [message, setMessage] = useState('')

  return (
    <div className="space-y-6">
      <div><h1 className="text-2xl font-bold text-slate-900">Omnichannel Inbox</h1><p className="text-sm text-slate-500 mt-1">Live conversations across all channels</p></div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-[calc(100vh-220px)]">
        <Card className="overflow-auto">
          <div className="space-y-2">
            {conversations.map(c => (
              <button key={c.id} onClick={() => setSelected(c.id)}
                className={`w-full text-left p-3 rounded-lg transition-colors ${selected === c.id ? 'bg-primary-50 border border-primary-200' : 'hover:bg-slate-50'}`}>
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium text-slate-900">{c.customer}</p>
                  <div className="flex items-center gap-1">
                    {c.unread > 0 && <span className="w-5 h-5 rounded-full bg-accent-500 text-white text-xs flex items-center justify-center">{c.unread}</span>}
                    <Badge variant={priorityColors[c.priority]} size="sm">{c.priority}</Badge>
                  </div>
                </div>
                <p className="text-xs text-slate-500 mt-1 truncate">{c.preview}</p>
                <div className="flex items-center justify-between mt-1">
                  <Badge variant="info" size="sm">{c.channel}</Badge>
                  <span className="text-xs text-slate-400">{c.time}</span>
                </div>
              </button>
            ))}
          </div>
        </Card>

        <div className="lg:col-span-2 flex flex-col">
          <Card className="flex-1 flex flex-col">
            <div className="flex items-center justify-between pb-3 border-b border-slate-200">
              <div className="flex items-center gap-2"><User className="w-5 h-5 text-primary-600" /><span className="font-medium text-slate-900">James Okafor</span><Badge variant="info">chat</Badge></div>
              <Badge variant="danger">high</Badge>
            </div>
            <div className="flex-1 overflow-auto space-y-4 py-4">
              {chatMessages.map((msg, i) => (
                <div key={i} className={`flex gap-2 ${msg.from === 'customer' ? '' : msg.from === 'ai' ? '' : 'flex-row-reverse'}`}>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${msg.from === 'customer' ? 'bg-slate-200' : msg.from === 'ai' ? 'bg-purple-100' : 'bg-primary-100'}`}>
                    {msg.from === 'customer' ? <User className="w-4 h-4 text-slate-600" /> : msg.from === 'ai' ? <Sparkles className="w-4 h-4 text-purple-600" /> : <Bot className="w-4 h-4 text-primary-600" />}
                  </div>
                  <div className={`max-w-[70%] p-3 rounded-lg text-sm ${msg.from === 'customer' ? 'bg-slate-100 text-slate-800' : msg.from === 'ai' ? 'bg-purple-50 text-purple-800 border border-purple-200' : 'bg-primary-50 text-slate-800'}`}>
                    {msg.from === 'ai' && <p className="text-xs font-semibold text-purple-600 mb-1">AI Suggestion</p>}
                    <p>{msg.text}</p>
                    <p className="text-xs text-slate-400 mt-1">{msg.time}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex items-center gap-2 pt-3 border-t border-slate-200">
              <input type="text" value={message} onChange={e => setMessage(e.target.value)} placeholder="Type your response..."
                className="flex-1 px-3 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary-500" />
              <button className="p-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700"><Send className="w-4 h-4" /></button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}
