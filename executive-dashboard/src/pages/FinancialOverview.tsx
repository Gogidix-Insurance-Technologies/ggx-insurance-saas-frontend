import { Card } from '../components/shared/Card'
import { Badge } from '../components/shared/Badge'
import { DollarSign, TrendingUp, ArrowUpRight } from 'lucide-react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

const monthlyFinancials = [
  { month: 'Jan', gwp: 6.8, claims: 4.2, profit: 1.8 }, { month: 'Feb', gwp: 7.2, claims: 4.5, profit: 2.0 },
  { month: 'Mar', gwp: 7.9, claims: 4.1, profit: 2.5 }, { month: 'Apr', gwp: 7.5, claims: 5.2, profit: 1.6 },
  { month: 'May', gwp: 8.4, claims: 4.8, profit: 2.4 }, { month: 'Jun', gwp: 9.1, claims: 5.0, profit: 2.8 },
  { month: 'Jul', gwp: 9.8, claims: 4.6, profit: 3.2 },
]

const expenseBreakdown = [
  { category: 'Claims Paid', amount: '$32.2M', pct: '68%', trend: '+5.2%' },
  { category: 'Operating Costs', amount: '$8.5M', pct: '18%', trend: '-2.1%' },
  { category: 'Marketing', amount: '$3.2M', pct: '7%', trend: '+12.5%' },
  { category: 'Technology', amount: '$2.1M', pct: '4%', trend: '+8.3%' },
  { category: 'Admin & Legal', amount: '$1.2M', pct: '3%', trend: '-1.5%' },
]

export default function FinancialOverview() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Financial Overview</h1>
        <p className="text-sm text-slate-500 mt-1">Revenue, profitability and expense analysis</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="text-center">
          <DollarSign className="w-8 h-8 text-primary-500 mx-auto mb-2" />
          <p className="text-3xl font-bold text-slate-900">$47.2M</p>
          <p className="text-sm text-slate-500">Total GWP (YTD)</p>
          <p className="text-xs text-green-600 mt-1">+18.2% vs last year</p>
        </Card>
        <Card className="text-center">
          <TrendingUp className="w-8 h-8 text-green-500 mx-auto mb-2" />
          <p className="text-3xl font-bold text-slate-900">$16.3M</p>
          <p className="text-sm text-slate-500">Net Profit (YTD)</p>
          <p className="text-xs text-green-600 mt-1">+24.5% margin improvement</p>
        </Card>
        <Card className="text-center">
          <ArrowUpRight className="w-8 h-8 text-accent-500 mx-auto mb-2" />
          <p className="text-3xl font-bold text-slate-900">94.2%</p>
          <p className="text-sm text-slate-500">Combined Ratio</p>
          <p className="text-xs text-green-600 mt-1">Below 100% target</p>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card title="GWP vs Claims vs Profit ($M)">
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={monthlyFinancials}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="gwp" fill="#9333ea" radius={[4, 4, 0, 0]} />
              <Bar dataKey="claims" fill="#ef4444" radius={[4, 4, 0, 0]} />
              <Bar dataKey="profit" fill="#22c55e" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </Card>

        <Card title="Expense Breakdown">
          <div className="space-y-3">
            {expenseBreakdown.map(e => (
              <div key={e.category} className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                <div>
                  <p className="text-sm font-medium text-slate-700">{e.category}</p>
                  <p className="text-xs text-slate-500">{e.pct} of total</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-bold text-slate-900">{e.amount}</p>
                  <Badge variant={e.trend.startsWith('+') ? 'warning' : 'success'} size="sm">{e.trend}</Badge>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  )
}
