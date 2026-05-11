import { ReactNode } from 'react'
import { LucideIcon } from 'lucide-react'

export function Card({ title, children, className = '' }: { title?: string; children: ReactNode; className?: string }) {
  return <div className={`bg-white rounded-xl border border-slate-200 p-6 ${className}`}>{title && <h3 className="text-lg font-semibold text-slate-900 mb-4">{title}</h3>}{children}</div>
}

export function Metric({ icon: Icon, label, value }: { icon: LucideIcon; label: string; value: string }) {
  return <div className="bg-white rounded-xl border border-slate-200 p-5">
    <div className="w-10 h-10 rounded-lg bg-primary-50 flex items-center justify-center mb-3"><Icon className="w-5 h-5 text-primary-600" /></div>
    <p className="text-2xl font-bold text-slate-900">{value}</p><p className="text-sm text-slate-500">{label}</p>
  </div>
}

export function Badge({ variant = 'primary', size = 'md', children }: { variant?: 'primary' | 'success' | 'warning' | 'danger' | 'info' | 'accent'; size?: 'sm' | 'md'; children: React.ReactNode }) {
  const c: Record<string, string> = { primary: 'bg-green-50 text-green-700', success: 'bg-emerald-50 text-emerald-700', warning: 'bg-yellow-50 text-yellow-700', danger: 'bg-red-50 text-red-700', info: 'bg-blue-50 text-blue-700', accent: 'bg-purple-50 text-purple-700' }
  const s = size === 'sm' ? 'text-xs px-1.5 py-0.5' : 'text-xs px-2.5 py-1'
  return <span className={`inline-flex items-center rounded-full font-medium ${s} ${c[variant]}`}>{children}</span>
}
