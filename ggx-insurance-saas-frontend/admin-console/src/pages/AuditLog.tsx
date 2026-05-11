import { Card } from '../components/shared/Card'
import { Badge } from '../components/shared/Badge'
import { FileText, Search, Download, Filter, ChevronLeft, ChevronRight } from 'lucide-react'
import { useState } from 'react'

const auditLogs = [
  { id: 1, user: 'Olawale Adeniyi', action: 'CREATE', resource: 'Tenant', details: 'Created tenant "SafeDrive Nigeria"', ip: '192.168.1.45', time: '2 min ago', severity: 'info' },
  { id: 2, user: 'System', action: 'DEPLOY', resource: 'Policy Engine', details: 'Deployed v2.4.1 to production', ip: '10.0.0.1', time: '15 min ago', severity: 'info' },
  { id: 3, user: 'Sarah Johnson', action: 'UPDATE', resource: 'User Role', details: 'Changed role for james@lagosins.com to Claims Manager', ip: '192.168.1.67', time: '32 min ago', severity: 'warning' },
  { id: 4, user: 'System', action: 'ALERT', resource: 'Rate Limiter', details: 'Rate limit exceeded for API key ****-xxxx', ip: '10.0.0.1', time: '45 min ago', severity: 'warning' },
  { id: 5, user: 'Amina Bello', action: 'DELETE', resource: 'Product Config', details: 'Removed "Haulage Premium Plus" variant', ip: '192.168.1.89', time: '1 hr ago', severity: 'danger' },
  { id: 6, user: 'Chidi Nwosu', action: 'LOGIN', resource: 'Auth', details: 'Successful login from new device', ip: '203.0.113.45', time: '1.5 hr ago', severity: 'info' },
  { id: 7, user: 'System', action: 'BACKUP', resource: 'Database', details: 'Automated backup completed (45.2 GB)', ip: '10.0.0.1', time: '2 hr ago', severity: 'info' },
  { id: 8, user: 'Fatima Yusuf', action: 'EXPORT', resource: 'Reports', details: 'Exported Q3 financial report', ip: '192.168.1.12', time: '3 hr ago', severity: 'info' },
  { id: 9, user: 'System', action: 'ERROR', resource: 'Claims Engine', details: 'Timeout processing claim #CLM-4499 (retry triggered)', ip: '10.0.0.1', time: '3.5 hr ago', severity: 'danger' },
  { id: 10, user: 'Grace Adeyemi', action: 'UPDATE', resource: 'Workflow', details: 'Modified "Claims Processing" workflow step 5', ip: '192.168.1.34', time: '4 hr ago', severity: 'warning' },
]

const actionColors: Record<string, 'primary' | 'success' | 'warning' | 'danger' | 'info'> = {
  CREATE: 'success',
  UPDATE: 'warning',
  DELETE: 'danger',
  LOGIN: 'info',
  DEPLOY: 'primary',
  ALERT: 'warning',
  BACKUP: 'info',
  EXPORT: 'primary',
  ERROR: 'danger',
}

export default function AuditLog() {
  const [search, setSearch] = useState('')
  const filtered = auditLogs.filter(l =>
    l.user.toLowerCase().includes(search.toLowerCase()) ||
    l.action.toLowerCase().includes(search.toLowerCase()) ||
    l.details.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Audit Log</h1>
          <p className="text-sm text-slate-500 mt-1">Complete platform activity trail</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 border border-slate-200 rounded-lg text-sm text-slate-600 hover:bg-slate-50">
          <Download className="w-4 h-4" /> Export
        </button>
      </div>

      <Card>
        <div className="flex items-center gap-4 mb-4">
          <div className="flex-1 relative">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search audit logs..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
            />
          </div>
          <button className="flex items-center gap-2 px-3 py-2 border border-slate-200 rounded-lg text-sm text-slate-600 hover:bg-slate-50">
            <Filter className="w-4 h-4" /> Filter
          </button>
        </div>

        <div className="space-y-2">
          {filtered.map(log => (
            <div key={log.id} className="flex items-center gap-4 p-3 bg-slate-50 rounded-lg">
              <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center flex-shrink-0">
                <FileText className="w-4 h-4 text-slate-500" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium text-slate-900">{log.user}</span>
                  <Badge variant={actionColors[log.action]} size="sm">{log.action}</Badge>
                  <span className="text-xs text-slate-500">{log.resource}</span>
                </div>
                <p className="text-xs text-slate-500 mt-0.5">{log.details}</p>
              </div>
              <div className="text-right flex-shrink-0">
                <p className="text-xs text-slate-500">{log.time}</p>
                <p className="text-xs text-slate-400 font-mono">{log.ip}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-between mt-4 pt-4 border-t border-slate-200">
          <p className="text-xs text-slate-500">Showing {filtered.length} of {auditLogs.length} entries</p>
          <div className="flex items-center gap-2">
            <button className="p-1 border border-slate-200 rounded hover:bg-slate-50"><ChevronLeft className="w-4 h-4" /></button>
            <span className="text-xs text-slate-600 px-2">Page 1 of 1</span>
            <button className="p-1 border border-slate-200 rounded hover:bg-slate-50"><ChevronRight className="w-4 h-4" /></button>
          </div>
        </div>
      </Card>
    </div>
  )
}
