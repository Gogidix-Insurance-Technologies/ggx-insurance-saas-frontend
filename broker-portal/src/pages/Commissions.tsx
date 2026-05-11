import { Card, Badge } from '../components/shared/Card'
import { DollarSign, Download } from 'lucide-react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

const monthlyCommissions = [
  { month: 'Jan', amount: 280 }, { month: 'Feb', amount: 320 }, { month: 'Mar', amount: 410 },
  { month: 'Apr', amount: 380 }, { month: 'May', amount: 450 }, { month: 'Jun', amount: 520 },
  { month: 'Jul', amount: 580 },
]

const commissionBreakdown = [
  { product: 'Auto Insurance', policies: 45, premium: '₦4.2M', rate: '15%', earned: '₦630K', pending: '₦120K' },
  { product: 'Home Insurance', policies: 22, premium: '₦2.8M', rate: '12%', earned: '₦336K', pending: '₦45K' },
  { product: 'Health Insurance', policies: 18, premium: '₦3.5M', rate: '10%', earned: '₦350K', pending: '₦80K' },
  { product: 'Gadget Insurance', policies: 35, premium: '₦850K', rate: '18%', earned: '₦153K', pending: '₦25K' },
  { product: 'GIT', policies: 8, premium: '₦1.2M', rate: '12%', earned: '₦144K', pending: '₦30K' },
  { product: 'Haulage', policies: 5, premium: '₦980K', rate: '10%', earned: '₦98K', pending: '₦15K' },
]

export default function Commissions() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div><h1 className="text-2xl font-bold text-slate-900">Commission Tracking</h1><p className="text-sm text-slate-500 mt-1">Earnings and payment history</p></div>
        <button className="flex items-center gap-2 px-4 py-2 border border-slate-200 rounded-lg text-sm text-slate-600 hover:bg-slate-50"><Download className="w-4 h-4" />Export</button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="text-center"><DollarSign className="w-6 h-6 text-green-500 mx-auto mb-2" /><p className="text-2xl font-bold text-slate-900">₦1.85M</p><p className="text-xs text-slate-500">Earned (YTD)</p></Card>
        <Card className="text-center"><p className="text-2xl font-bold text-slate-900">₦315K</p><p className="text-xs text-slate-500 mt-2">Pending</p></Card>
        <Card className="text-center"><p className="text-2xl font-bold text-slate-900">₦580K</p><p className="text-xs text-slate-500 mt-2">This Month</p></Card>
      </div>

      <Card title="Commission Trend (₦K)">
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={monthlyCommissions}><CartesianGrid strokeDasharray="3 3" /><XAxis dataKey="month" /><YAxis /><Tooltip />
            <Bar dataKey="amount" fill="#2563eb" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </Card>

      <Card title="By Product">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead><tr className="border-b border-slate-200">
              <th className="text-left text-xs font-medium text-slate-500 uppercase pb-3">Product</th>
              <th className="text-right text-xs font-medium text-slate-500 uppercase pb-3">Policies</th>
              <th className="text-right text-xs font-medium text-slate-500 uppercase pb-3">Premium</th>
              <th className="text-right text-xs font-medium text-slate-500 uppercase pb-3">Rate</th>
              <th className="text-right text-xs font-medium text-slate-500 uppercase pb-3">Earned</th>
              <th className="text-right text-xs font-medium text-slate-500 uppercase pb-3">Pending</th>
            </tr></thead>
            <tbody className="divide-y divide-slate-100">
              {commissionBreakdown.map(c => (
                <tr key={c.product} className="hover:bg-slate-50">
                  <td className="py-3 text-sm font-medium text-slate-900">{c.product}</td>
                  <td className="py-3 text-sm text-right text-slate-700">{c.policies}</td>
                  <td className="py-3 text-sm text-right text-slate-700">{c.premium}</td>
                  <td className="py-3 text-sm text-right"><Badge variant="info">{c.rate}</Badge></td>
                  <td className="py-3 text-sm text-right font-medium text-green-700">{c.earned}</td>
                  <td className="py-3 text-sm text-right text-yellow-700">{c.pending}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  )
}
