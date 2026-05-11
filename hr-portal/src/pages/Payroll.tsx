import { Card } from '../components/shared/Card'
import { DollarSign, Download } from 'lucide-react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

const monthlyPayroll = [
  { month: 'Jan', amount: 38.5 }, { month: 'Feb', amount: 39.2 }, { month: 'Mar', amount: 40.1 },
  { month: 'Apr', amount: 41.0 }, { month: 'May', amount: 41.8 }, { month: 'Jun', amount: 42.5 },
  { month: 'Jul', amount: 43.2 },
]

const payrollBreakdown = [
  { dept: 'Claims', staff: 45, gross: '₦9.0M', deductions: '₦1.8M', net: '₦7.2M' },
  { dept: 'IT', staff: 22, gross: '₦8.8M', deductions: '₦1.8M', net: '₦7.0M' },
  { dept: 'Support', staff: 32, gross: '₦6.4M', deductions: '₦1.3M', net: '₦5.1M' },
  { dept: 'Underwriting', staff: 28, gross: '₦7.0M', deductions: '₦1.4M', net: '₦5.6M' },
  { dept: 'Sales', staff: 18, gross: '₦5.4M', deductions: '₦1.1M', net: '₦4.3M' },
  { dept: 'Finance', staff: 15, gross: '₦4.5M', deductions: '₦0.9M', net: '₦3.6M' },
  { dept: 'HR', staff: 8, gross: '₦2.4M', deductions: '₦0.5M', net: '₦1.9M' },
]

export default function Payroll() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div><h1 className="text-2xl font-bold text-slate-900">Payroll</h1><p className="text-sm text-slate-500 mt-1">Monthly payroll management</p></div>
        <button className="flex items-center gap-2 px-4 py-2 border border-slate-200 rounded-lg text-sm text-slate-600 hover:bg-slate-50">
          <Download className="w-4 h-4" /> Export Report
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="text-center"><DollarSign className="w-6 h-6 text-primary-500 mx-auto mb-2" /><p className="text-2xl font-bold text-slate-900">₦43.2M</p><p className="text-xs text-slate-500">July 2026 Payroll</p></Card>
        <Card className="text-center"><p className="text-2xl font-bold text-slate-900">168</p><p className="text-xs text-slate-500 mt-2">Active Employees</p></Card>
        <Card className="text-center"><p className="text-2xl font-bold text-slate-900">₦256K</p><p className="text-xs text-slate-500 mt-2">Avg per Employee</p></Card>
      </div>

      <Card title="Payroll Trend (₦M)">
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={monthlyPayroll}><CartesianGrid strokeDasharray="3 3" /><XAxis dataKey="month" /><YAxis /><Tooltip />
            <Bar dataKey="amount" fill="#f97316" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </Card>

      <Card title="Department Breakdown">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead><tr className="border-b border-slate-200">
              <th className="text-left text-xs font-medium text-slate-500 uppercase pb-3">Department</th>
              <th className="text-right text-xs font-medium text-slate-500 uppercase pb-3">Staff</th>
              <th className="text-right text-xs font-medium text-slate-500 uppercase pb-3">Gross</th>
              <th className="text-right text-xs font-medium text-slate-500 uppercase pb-3">Deductions</th>
              <th className="text-right text-xs font-medium text-slate-500 uppercase pb-3">Net</th>
            </tr></thead>
            <tbody className="divide-y divide-slate-100">
              {payrollBreakdown.map(d => (
                <tr key={d.dept} className="hover:bg-slate-50">
                  <td className="py-3 text-sm font-medium text-slate-900">{d.dept}</td>
                  <td className="py-3 text-sm text-right text-slate-600">{d.staff}</td>
                  <td className="py-3 text-sm text-right font-medium text-slate-900">{d.gross}</td>
                  <td className="py-3 text-sm text-right text-red-600">{d.deductions}</td>
                  <td className="py-3 text-sm text-right font-medium text-green-700">{d.net}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  )
}
