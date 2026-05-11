import { Card } from '../components/shared/Card'
import { Badge } from '../components/shared/Badge'
import { Network, Activity, Clock, AlertTriangle, CheckCircle, Zap } from 'lucide-react'

const apiEndpoints = [
  { path: '/api/auth/*', method: 'ALL', service: 'Auth Service', latency: '8ms', throughput: '2.4K/min', status: 'healthy' },
  { path: '/api/policies/*', method: 'ALL', service: 'Policy Engine', latency: '45ms', throughput: '1.8K/min', status: 'healthy' },
  { path: '/api/claims/*', method: 'ALL', service: 'Claims Engine', latency: '120ms', throughput: '850/min', status: 'degraded' },
  { path: '/api/payments/*', method: 'ALL', service: 'Payment Service', latency: '22ms', throughput: '3.2K/min', status: 'healthy' },
  { path: '/api/quotes/*', method: 'ALL', service: 'Quote Engine', latency: '35ms', throughput: '1.5K/min', status: 'healthy' },
  { path: '/api/notifications/*', method: 'ALL', service: 'Notification Hub', latency: '15ms', throughput: '5.1K/min', status: 'healthy' },
  { path: '/api/analytics/*', method: 'GET', service: 'Analytics Service', latency: '180ms', throughput: '420/min', status: 'healthy' },
  { path: '/api/underwriting/*', method: 'ALL', service: 'Underwriting Engine', latency: '95ms', throughput: '680/min', status: 'healthy' },
]

const rateLimits = [
  { tier: 'Free', limit: '100 req/min', burst: '150', current: '45%' },
  { tier: 'Starter', limit: '500 req/min', burst: '750', current: '32%' },
  { tier: 'Business', limit: '2,000 req/min', burst: '3,000', current: '58%' },
  { tier: 'Enterprise', limit: '10,000 req/min', burst: '15,000', current: '12%' },
]

export default function ApiGateway() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">API Gateway</h1>
          <p className="text-sm text-slate-500 mt-1">API routing, rate limiting & service mesh</p>
        </div>
        <Badge variant="success"><Activity className="w-3 h-3 mr-1 inline" />All Services Up</Badge>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="text-center"><Zap className="w-6 h-6 text-primary-500 mx-auto mb-2" /><p className="text-2xl font-bold text-slate-900">15.8K</p><p className="text-xs text-slate-500">Req/min Total</p></Card>
        <Card className="text-center"><Clock className="w-6 h-6 text-accent-500 mx-auto mb-2" /><p className="text-2xl font-bold text-slate-900">42ms</p><p className="text-xs text-slate-500">Avg Latency</p></Card>
        <Card className="text-center"><CheckCircle className="w-6 h-6 text-green-500 mx-auto mb-2" /><p className="text-2xl font-bold text-slate-900">99.97%</p><p className="text-xs text-slate-500">Uptime (30d)</p></Card>
        <Card className="text-center"><AlertTriangle className="w-6 h-6 text-yellow-500 mx-auto mb-2" /><p className="text-2xl font-bold text-slate-900">1</p><p className="text-xs text-slate-500">Degraded Service</p></Card>
      </div>

      <Card title="API Endpoints">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-200">
                <th className="text-left text-xs font-medium text-slate-500 uppercase pb-3">Endpoint</th>
                <th className="text-left text-xs font-medium text-slate-500 uppercase pb-3">Service</th>
                <th className="text-left text-xs font-medium text-slate-500 uppercase pb-3">Latency</th>
                <th className="text-left text-xs font-medium text-slate-500 uppercase pb-3">Throughput</th>
                <th className="text-left text-xs font-medium text-slate-500 uppercase pb-3">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {apiEndpoints.map(ep => (
                <tr key={ep.path} className="hover:bg-slate-50">
                  <td className="py-3">
                    <div className="flex items-center gap-2">
                      <Network className="w-4 h-4 text-slate-400" />
                      <code className="text-xs bg-slate-100 px-2 py-0.5 rounded font-mono text-slate-700">{ep.path}</code>
                    </div>
                  </td>
                  <td className="py-3 text-sm text-slate-600">{ep.service}</td>
                  <td className="py-3 text-sm font-medium text-slate-900">{ep.latency}</td>
                  <td className="py-3 text-sm text-slate-600">{ep.throughput}</td>
                  <td className="py-3"><Badge variant={ep.status === 'healthy' ? 'success' : 'warning'}>{ep.status}</Badge></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      <Card title="Rate Limits by Tier">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {rateLimits.map(rl => (
            <div key={rl.tier} className="p-4 bg-slate-50 rounded-lg">
              <h4 className="font-semibold text-slate-900 mb-2">{rl.tier}</h4>
              <div className="space-y-1 text-sm">
                <p className="text-slate-600">Limit: <span className="font-medium">{rl.limit}</span></p>
                <p className="text-slate-600">Burst: <span className="font-medium">{rl.burst}</span></p>
                <div className="mt-2 w-full bg-slate-200 rounded-full h-2">
                  <div className="bg-primary-500 h-2 rounded-full" style={{ width: rl.current }} />
                </div>
                <p className="text-xs text-slate-500">{rl.current} utilized</p>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  )
}
