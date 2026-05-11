import { ReactNode } from 'react'
import { LucideIcon } from 'lucide-react'

export function Card({ title, children, className = '' }: { title?: string; children: ReactNode; className?: string }) {
  return <div className={`bg-white rounded-xl border border-slate-200 p-6 ${className}`}>{title && <h3 className="text-lg font-semibold text-slate-900 mb-4">{title}</h3>}{children}</div>
}

export function Metric({ icon: Icon, label, value, change }: { icon: LucideIcon; label: string; value: string; change?: string }) {
  return <div className="bg-white rounded-xl border border-slate-200 p-5">
    <div className="w-10 h-10 rounded-lg bg-primary-50 flex items-center justify-center mb-3"><Icon className="w-5 h-5 text-primary-600" /></div>
    <p className="text-2xl font-bold text-slate-900">{value}</p>
    <p className="text-sm text-slate-500">{label}</p>
    {change && <p className="text-xs text-green-600 mt-1">{change}</p>}
  </div>
}

export function Badge({ variant = 'primary', children }: { variant?: 'primary' | 'success' | 'warning' | 'danger' | 'info' | 'accent'; children: React.ReactNode }) {
  const c: Record<string, string> = { primary: 'bg-cyan-50 text-cyan-700', success: 'bg-green-50 text-green-700', warning: 'bg-yellow-50 text-yellow-700', danger: 'bg-red-50 text-red-700', info: 'bg-blue-50 text-blue-700', accent: 'bg-fuchsia-50 text-fuchsia-700' }
  return <span className={`inline-flex items-center rounded-full text-xs font-medium px-2.5 py-1 ${c[variant]}`}>{children}</span>
}
