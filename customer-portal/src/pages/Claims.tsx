import { Card } from '../components/shared/Card'
import { Badge } from '../components/shared/Badge'
import { AlertCircle, Plus, Clock, CheckCircle, XCircle, Upload } from 'lucide-react'

const claims = [
  { id: 'CLM-4521', policy: 'POL-2847', type: 'Auto', desc: 'Windscreen replacement due to road debris', amount: '₦85,000', status: 'processing', date: '28 Jul 2026', documents: 3 },
  { id: 'CLM-4480', policy: 'POL-3456', type: 'Health', desc: 'Hospital visit - Malaria treatment', amount: '₦45,000', status: 'approved', date: '15 Jul 2026', documents: 5 },
  { id: 'CLM-4100', policy: 'POL-3102', type: 'Home', desc: 'Water damage from burst pipe', amount: '₦350,000', status: 'paid', date: '02 Jun 2026', documents: 8 },
  { id: 'CLM-3890', policy: 'POL-2847', type: 'Auto', desc: 'Minor fender bender - rear bumper', amount: '₦120,000', status: 'rejected', date: '18 Apr 2026', documents: 4 },
]

const statusConfig: Record<string, { variant: 'success' | 'warning' | 'danger' | 'info'; icon: typeof Clock }> = {
  processing: { variant: 'warning', icon: Clock },
  approved: { variant: 'success', icon: CheckCircle },
  paid: { variant: 'info', icon: CheckCircle },
  rejected: { variant: 'danger', icon: XCircle },
}

export default function Claims() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Claims</h1>
          <p className="text-sm text-slate-500 mt-1">Track and manage your insurance claims</p>
        </div>
        <button className="flex items-center gap-2 bg-primary-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary-700">
          <Plus className="w-4 h-4" /> File New Claim
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {[
          { label: 'Total Claims', value: '4', color: 'text-slate-900' },
          { label: 'Processing', value: '1', color: 'text-yellow-600' },
          { label: 'Approved', value: '2', color: 'text-green-600' },
          { label: 'Total Paid', value: '₦395,000', color: 'text-blue-600' },
        ].map(s => (
          <Card key={s.label} className="text-center">
            <p className={`text-2xl font-bold ${s.color}`}>{s.value}</p>
            <p className="text-xs text-slate-500 mt-1">{s.label}</p>
          </Card>
        ))}
      </div>

      <div className="space-y-4">
        {claims.map(c => {
          const config = statusConfig[c.status]
          const Icon = config.icon
          return (
            <Card key={c.id}>
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-red-50 flex items-center justify-center">
                    <AlertCircle className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="font-semibold text-slate-900">{c.id}</h3>
                      <Badge variant={variant}>{c.status}</Badge>
                    </div>
                    <p className="text-sm text-slate-600 mt-0.5">{c.desc}</p>
                    <div className="flex items-center gap-4 mt-1 text-xs text-slate-500">
                      <span>{c.type} · {c.policy}</span>
                      <span>{c.documents} documents</span>
                      <span>{c.date}</span>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-lg font-bold text-slate-900">{c.amount}</p>
                  {c.status === 'processing' && (
                    <button className="flex items-center gap-1 text-xs text-primary-600 hover:text-primary-700 mt-1">
                      <Upload className="w-3 h-3" /> Upload Docs
                    </button>
                  )}
                </div>
              </div>
            </Card>
          )
        })}
      </div>
    </div>
  )
}
