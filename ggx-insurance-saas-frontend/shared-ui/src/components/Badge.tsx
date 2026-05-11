import { clsx } from 'clsx'
import { X } from 'lucide-react'

type BadgeVariant = 'primary' | 'success' | 'warning' | 'danger' | 'info' | 'accent' | 'neutral'
type BadgeSize = 'sm' | 'md' | 'lg'

interface BadgeProps {
  variant?: BadgeVariant
  size?: BadgeSize
  dot?: boolean
  removable?: boolean
  onRemove?: () => void
  children: React.ReactNode
}

const variantClasses: Record<BadgeVariant, string> = {
  primary: 'bg-blue-50 text-blue-700',
  success: 'bg-green-50 text-green-700',
  warning: 'bg-yellow-50 text-yellow-700',
  danger: 'bg-red-50 text-red-700',
  info: 'bg-cyan-50 text-cyan-700',
  accent: 'bg-purple-50 text-purple-700',
  neutral: 'bg-slate-100 text-slate-700',
}

const dotColors: Record<BadgeVariant, string> = {
  primary: 'bg-blue-500',
  success: 'bg-green-500',
  warning: 'bg-yellow-500',
  danger: 'bg-red-500',
  info: 'bg-cyan-500',
  accent: 'bg-purple-500',
  neutral: 'bg-slate-500',
}

const sizeClasses: Record<BadgeSize, string> = {
  sm: 'text-xs px-1.5 py-0.5',
  md: 'text-xs px-2.5 py-1',
  lg: 'text-sm px-3 py-1',
}

export function Badge({ variant = 'primary', size = 'md', dot, removable, onRemove, children }: BadgeProps) {
  return (
    <span className={clsx('inline-flex items-center rounded-full font-medium gap-1.5', variantClasses[variant], sizeClasses[size])}>
      {dot && <span className={clsx('w-1.5 h-1.5 rounded-full', dotColors[variant])} />}
      {children}
      {removable && (
        <button onClick={onRemove} className="ml-0.5 hover:opacity-70">
          <X className="w-3 h-3" />
        </button>
      )}
    </span>
  )
}
