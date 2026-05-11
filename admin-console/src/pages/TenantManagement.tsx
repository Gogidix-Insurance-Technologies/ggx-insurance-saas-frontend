import { Card } from '../components/shared/Card'
import { Badge } from '../components/shared/Badge'
import { Plus, Search, Building2, Globe, ChevronRight } from 'lucide-react'
import { useState } from 'react'

const tenants = [
  { id: 1, name: 'SafeDrive Nigeria', domain: 'safedrive.ggx.io', plan: 'Enterprise', users: 450, products: ['Auto', 'Home'], status: 'active', revenue: '$125,000/mo', region: 'Lagos' },
  { id: 2, name: 'Lagos Insurance Corp', domain: 'lagosins.ggx.io', plan: 'Business', users: 280, products: ['Auto', 'Home', 'Health'], status: 'active', revenue: '$89,000/mo', region: 'Lagos' },
  { id: 3, name: 'Global Insurance Ltd', domain: 'globalins.ggx.io', plan: 'Enterprise', users: 620, products: ['Auto', 'Home', 'Health', 'GIT', 'Haulage'], status: 'active', revenue: '$210,000/mo', region: 'Abuja' },
  { id: 4, name: 'Digital Insurance NG', domain: 'digitalins.ggx.io', plan: 'Starter', users: 85, products: ['Gadget'], status: 'active', revenue: '$12,000/mo', region: 'Port Harcourt' },
  { id: 5, name: 'Naija Protect', domain: 'naijaprotect.ggx.io', plan: 'Business', users: 195, products: ['Auto', 'Health'], status: 'trial', revenue: '$0/mo', region: 'Abuja' },
  { id: 6, name: 'CoverAll Insurance', domain: 'coverall.ggx.io', plan: 'Enterprise', users: 380, products: ['Auto', 'Home', 'Health', 'GIT'], status: 'active', revenue: '$156,000/mo', region: 'Lagos' },
]

const planColors: Record<string, 'primary' | 'accent' | 'warning'> = {
  Enterprise: 'primary',
  Business: 'accent',
  Starter: 'warning',
}

export default function TenantManagement() {
  const [search, setSearch] = useState('')
  const filtered = tenants.filter(t => t.name.toLowerCase().includes(search.toLowerCase()))

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Tenant Management</h1>
          <p className="text-sm text-slate-500 mt-1">{tenants.length} tenants · White-label multi-tenant configuration</p>
        </div>
        <button className="flex items-center gap-2 bg-primary-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary-700">
          <Plus className="w-4 h-4" /> Onboard Tenant
        </button>
      </div>

      <div className="relative">
        <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
        <input
          type="text"
          placeholder="Search tenants..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="w-full pl-10 pr-4 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 bg-white"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {filtered.map(tenant => (
          <Card key={tenant.id}>
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-lg bg-primary-100 flex items-center justify-center">
                  <Building2 className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">{tenant.name}</h3>
                  <div className="flex items-center gap-1 text-xs text-slate-500">
                    <Globe className="w-3 h-3" /> {tenant.domain}
                  </div>
                </div>
              </div>
              <Badge variant={planColors[tenant.plan]}>{tenant.plan}</Badge>
            </div>

            <div className="grid grid-cols-3 gap-4 mb-4">
              <div className="text-center p-2 bg-slate-50 rounded">
                <p className="text-lg font-bold text-slate-900">{tenant.users}</p>
                <p className="text-xs text-slate-500">Users</p>
              </div>
              <div className="text-center p-2 bg-slate-50 rounded">
                <p className="text-lg font-bold text-slate-900">{tenant.products.length}</p>
                <p className="text-xs text-slate-500">Products</p>
              </div>
              <div className="text-center p-2 bg-slate-50 rounded">
                <p className="text-sm font-bold text-slate-900">{tenant.revenue}</p>
                <p className="text-xs text-slate-500">Revenue</p>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex gap-1 flex-wrap">
                {tenant.products.map(p => (
                  <Badge key={p} variant="info" size="sm">{p}</Badge>
                ))}
              </div>
              <div className="flex items-center gap-2">
                <Badge variant={tenant.status === 'active' ? 'success' : 'warning'}>{tenant.status}</Badge>
                <button className="p-1 hover:bg-slate-100 rounded"><ChevronRight className="w-4 h-4 text-slate-400" /></button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
