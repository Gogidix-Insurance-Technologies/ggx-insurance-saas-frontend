import { Card, Badge } from '../components/shared/Card'
import { BookOpen, TrendingUp, AlertTriangle } from 'lucide-react'

const bookStats = [
  { product: 'Auto Insurance', active: 45, lapsed: 3, premium: '₦4.2M', retention: '94%', growth: '+12%' },
  { product: 'Home Insurance', active: 22, lapsed: 1, premium: '₦2.8M', retention: '96%', growth: '+8%' },
  { product: 'Health Insurance', active: 18, lapsed: 2, premium: '₦3.5M', retention: '89%', growth: '+15%' },
  { product: 'Gadget Insurance', active: 35, lapsed: 5, premium: '₦850K', retention: '86%', growth: '+28%' },
  { product: 'GIT', active: 8, lapsed: 0, premium: '₦1.2M', retention: '100%', growth: '+5%' },
  { product: 'Haulage', active: 5, lapsed: 1, premium: '₦980K', retention: '83%', growth: '+3%' },
]

export default function BookOfBusiness() {
  const totalActive = bookStats.reduce((sum, b) => sum + b.active, 0)
  const totalPremium = '₦13.5M'

  return (
    <div className="space-y-6">
      <div><h1 className="text-2xl font-bold text-slate-900">Book of Business</h1><p className="text-sm text-slate-500 mt-1">Portfolio overview by product</p></div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="text-center"><BookOpen className="w-6 h-6 text-primary-500 mx-auto mb-2" /><p className="text-2xl font-bold text-slate-900">{totalActive}</p><p className="text-xs text-slate-500">Active Policies</p></Card>
        <Card className="text-center"><TrendingUp className="w-6 h-6 text-green-500 mx-auto mb-2" /><p className="text-2xl font-bold text-slate-900">{totalPremium}</p><p className="text-xs text-slate-500">Total Premium</p></Card>
        <Card className="text-center"><AlertTriangle className="w-6 h-6 text-yellow-500 mx-auto mb-2" /><p className="text-2xl font-bold text-slate-900">12</p><p className="text-xs text-slate-500">Lapsed Policies</p></Card>
      </div>

      <Card>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead><tr className="border-b border-slate-200">
              <th className="text-left text-xs font-medium text-slate-500 uppercase pb-3">Product</th>
              <th className="text-right text-xs font-medium text-slate-500 uppercase pb-3">Active</th>
              <th className="text-right text-xs font-medium text-slate-500 uppercase pb-3">Lapsed</th>
              <th className="text-right text-xs font-medium text-slate-500 uppercase pb-3">Premium</th>
              <th className="text-right text-xs font-medium text-slate-500 uppercase pb-3">Retention</th>
              <th className="text-right text-xs font-medium text-slate-500 uppercase pb-3">Growth</th>
            </tr></thead>
            <tbody className="divide-y divide-slate-100">
              {bookStats.map(b => (
                <tr key={b.product} className="hover:bg-slate-50">
                  <td className="py-3 text-sm font-medium text-slate-900">{b.product}</td>
                  <td className="py-3 text-sm text-right text-slate-700">{b.active}</td>
                  <td className="py-3 text-sm text-right text-red-600">{b.lapsed}</td>
                  <td className="py-3 text-sm text-right font-medium text-slate-900">{b.premium}</td>
                  <td className="py-3 text-right"><Badge variant={parseInt(b.retention) > 90 ? 'success' : 'warning'}>{b.retention}</Badge></td>
                  <td className="py-3 text-sm text-right text-green-600">{b.growth}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  )
}
