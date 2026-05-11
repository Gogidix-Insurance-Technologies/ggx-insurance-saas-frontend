import { ReactNode } from 'react'
import { LucideIcon } from 'lucide-react'
import { TrendingUp, TrendingDown } from 'lucide-react'
import { clsx } from 'clsx'

interface CardProps {
  title?: string
  children: ReactNode
  className?: string
  onClick?: () => void
  loading?: boolean
}

export function Card({ title, children, className = '', onClick, loading }: CardProps) {
  if (loading) return <CardSkeleton />
  return (
    <div
      onClick={onClick}
      className={clsx(
        'bg-white rounded-xl border border-slate-200 p-6',
        onClick && 'cursor-pointer hover:shadow-md transition-shadow',
        className
      )}
    >
      {title && <h3 className="text-lg font-semibold text-slate-900 mb-4">{title}</h3>}
      {children}
    </div>
  )
}

export function CardSkeleton() {
  return (
    <div className="bg-white rounded-xl border border-slate-200 p-6 animate-pulse">
      <div className="h-4 bg-slate-200 rounded w-1/3 mb-4" />
      <div className="space-y-3">
        <div className="h-3 bg-slate-200 rounded" />
        <div className="h-3 bg-slate-200 rounded w-5/6" />
      </div>
    </div>
  )
}

interface MetricCardProps {
  icon: LucideIcon
  label: string
  value: string
  change?: string
  positive?: boolean
  onClick?: () => void
}

export function MetricCard({ icon: Icon, label, value, change, positive, onClick }: MetricCardProps) {
  return (
    <div
      onClick={onClick}
      className={clsx(
        'bg-white rounded-xl border border-slate-200 p-5',
        onClick && 'cursor-pointer hover:shadow-md transition-shadow'
      )}
    >
      <div className="flex items-center justify-between mb-3">
        <div className="w-10 h-10 rounded-lg bg-primary-50 flex items-center justify-center">
          <Icon className="w-5 h-5 text-primary-600" />
        </div>
        {change && positive !== undefined && (
          <div className={clsx(
            'flex items-center gap-1 text-xs font-medium',
            positive ? 'text-green-600' : 'text-red-600'
          )}>
            {positive ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
            {change}
          </div>
        )}
      </div>
      <p className="text-2xl font-bold text-slate-900">{value}</p>
      <p className="text-sm text-slate-500 mt-1">{label}</p>
    </div>
  )
}
