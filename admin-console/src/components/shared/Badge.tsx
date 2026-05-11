import { clsx } from 'clsx'

type BadgeVariant = 'primary' | 'success' | 'warning' | 'danger' | 'info' | 'accent'
type BadgeSize = 'sm' | 'md'

interface BadgeProps {
  variant?: BadgeVariant
  size?: BadgeSize
  children: React.ReactNode
}

const variantClasses: Record<BadgeVariant, string> = {
  primary: 'bg-blue-50 text-blue-700',
  success: 'bg-green-50 text-green-700',
  warning: 'bg-yellow-50 text-yellow-700',
  danger: 'bg-red-50 text-red-700',
  info: 'bg-cyan-50 text-cyan-700',
  accent: 'bg-purple-50 text-purple-700',
}

const sizeClasses: Record<BadgeSize, string> = {
  sm: 'text-xs px-1.5 py-0.5',
  md: 'text-xs px-2.5 py-1',
}

export function Badge({ variant = 'primary', size = 'md', children }: BadgeProps) {
  return (
    <span className={clsx('inline-flex items-center rounded-full font-medium', variantClasses[variant], sizeClasses[size])}>
      {children}
    </span>
  )
}
