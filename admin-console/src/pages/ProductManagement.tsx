import { Card } from '../components/shared/Card'
import { Badge } from '../components/shared/Badge'
import { Package, Plus, Edit } from 'lucide-react'

const products = [
  { id: 1, name: 'Auto Insurance', code: 'AUTO', tenants: 142, policies: 85000, status: 'active', variants: ['Comprehensive', 'Third Party', 'Fire & Theft'] },
  { id: 2, name: 'Home Insurance', code: 'HOME', tenants: 98, policies: 32000, status: 'active', variants: ['Building Only', 'Contents Only', 'Combined'] },
  { id: 3, name: 'Health Insurance', code: 'HEALTH', tenants: 87, policies: 28000, status: 'active', variants: ['Individual', 'Family', 'Corporate'] },
  { id: 4, name: 'Gadget Insurance', code: 'GADGET', tenants: 45, policies: 8500, status: 'active', variants: ['Phone', 'Laptop', 'Multi-Device'] },
  { id: 5, name: 'Goods in Transit', code: 'GIT', tenants: 32, policies: 2100, status: 'active', variants: ['Single Trip', 'Annual', 'Fleet'] },
  { id: 6, name: 'Haulage Insurance', code: 'HAULAGE', tenants: 28, policies: 820, status: 'beta', variants: ['Per Trip', 'Annual', 'Fleet'] },
]

export default function ProductManagement() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Product Management</h1>
          <p className="text-sm text-slate-500 mt-1">Configure insurance products across all tenants</p>
        </div>
        <button className="flex items-center gap-2 bg-primary-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary-700">
          <Plus className="w-4 h-4" /> New Product
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {products.map(product => (
          <Card key={product.id}>
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-lg bg-primary-100 flex items-center justify-center">
                  <Package className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">{product.name}</h3>
                  <p className="text-xs text-slate-500 font-mono">{product.code}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant={product.status === 'active' ? 'success' : 'warning'}>{product.status}</Badge>
                <button className="p-1 hover:bg-slate-100 rounded"><Edit className="w-4 h-4 text-slate-400" /></button>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="text-center p-2 bg-slate-50 rounded">
                <p className="text-lg font-bold text-slate-900">{product.tenants}</p>
                <p className="text-xs text-slate-500">Tenants</p>
              </div>
              <div className="text-center p-2 bg-slate-50 rounded">
                <p className="text-lg font-bold text-slate-900">{(product.policies / 1000).toFixed(1)}K</p>
                <p className="text-xs text-slate-500">Policies</p>
              </div>
            </div>

            <div>
              <p className="text-xs font-medium text-slate-500 mb-2">Variants</p>
              <div className="flex gap-1 flex-wrap">
                {product.variants.map(v => (
                  <Badge key={v} variant="info" size="sm">{v}</Badge>
                ))}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
