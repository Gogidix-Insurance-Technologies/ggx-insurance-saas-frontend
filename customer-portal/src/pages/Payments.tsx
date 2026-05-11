import { Card } from '../components/shared/Card'
import { Badge } from '../components/shared/Badge'
import { CreditCard, Download, ArrowUpRight, ArrowDownRight } from 'lucide-react'

const payments = [
  { id: 'PAY-9845', policy: 'POL-2847', desc: 'Auto Insurance Premium', amount: '₦45,000', method: 'Card ****4521', date: '15 Aug 2025', status: 'paid' },
  { id: 'PAY-9801', policy: 'POL-3102', desc: 'Home Insurance Premium', amount: '₦120,000', method: 'Bank Transfer', date: '22 Sep 2025', status: 'paid' },
  { id: 'PAY-9756', policy: 'POL-3456', desc: 'Health Insurance Premium', amount: '₦280,000', method: 'Card ****4521', date: '01 Dec 2025', status: 'paid' },
  { id: 'PAY-9900', policy: 'POL-3789', desc: 'Gadget Insurance Premium', amount: '₦18,000', method: 'Pending', date: 'N/A', status: 'pending' },
]

const upcomingPremiums = [
  { policy: 'POL-2847', type: 'Auto Insurance', amount: '₦45,000', dueDate: '15 Aug 2026', daysLeft: 34 },
  { policy: 'POL-3102', type: 'Home Insurance', amount: '₦120,000', dueDate: '22 Sep 2026', daysLeft: 72 },
  { policy: 'POL-3456', type: 'Health Insurance', amount: '₦280,000', dueDate: '01 Dec 2026', daysLeft: 142 },
]

export default function Payments() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Payments</h1>
        <p className="text-sm text-slate-500 mt-1">Payment history and upcoming premiums</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card title="Upcoming Premiums" className="lg:col-span-1">
          <div className="space-y-3">
            {upcomingPremiums.map(p => (
              <div key={p.policy} className="p-3 bg-slate-50 rounded-lg">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium text-slate-700">{p.type}</p>
                  <p className="text-sm font-bold text-slate-900">{p.amount}</p>
                </div>
                <div className="flex items-center justify-between mt-1">
                  <p className="text-xs text-slate-500">Due {p.dueDate}</p>
                  <Badge variant={p.daysLeft < 45 ? 'warning' : 'success'} size="sm">{p.daysLeft} days</Badge>
                </div>
              </div>
            ))}
            <button className="w-full mt-2 bg-primary-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary-700">
              Pay Now
            </button>
          </div>
        </Card>

        <Card title="Payment History" className="lg:col-span-2">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-200">
                  <th className="text-left text-xs font-medium text-slate-500 uppercase pb-3">ID</th>
                  <th className="text-left text-xs font-medium text-slate-500 uppercase pb-3">Description</th>
                  <th className="text-left text-xs font-medium text-slate-500 uppercase pb-3">Method</th>
                  <th className="text-right text-xs font-medium text-slate-500 uppercase pb-3">Amount</th>
                  <th className="text-left text-xs font-medium text-slate-500 uppercase pb-3">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {payments.map(p => (
                  <tr key={p.id} className="hover:bg-slate-50">
                    <td className="py-3 text-sm font-medium text-primary-700">{p.id}</td>
                    <td className="py-3">
                      <p className="text-sm text-slate-700">{p.desc}</p>
                      <p className="text-xs text-slate-500">{p.date}</p>
                    </td>
                    <td className="py-3 text-sm text-slate-600">{p.method}</td>
                    <td className="py-3 text-sm font-medium text-slate-900 text-right">{p.amount}</td>
                    <td className="py-3"><Badge variant={p.status === 'paid' ? 'success' : 'warning'}>{p.status}</Badge></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      </div>
    </div>
  )
}
