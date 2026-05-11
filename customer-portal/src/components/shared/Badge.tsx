import { clsx } from 'clsx'

type Variant = 'primary' | 'success' | 'warning' | 'danger' | 'info' | 'accent'
type Size = 'sm' | 'md'

const vClasses: Record<Variant, string> = {
  primary: 'bg-green-50 text-green-700', success: 'bg-emerald-50 text-emerald-700',
  warning: 'bg-yellow-50 text-yellow-700', danger: 'bg-red-50 text-red-700',
  info: 'bg-cyan-50 text-cyan-700', accent: 'bg-blue-50 text-blue-700',
}
const sClasses: Record<Size, string> = { sm: 'text-xs px-1.5 py-0.5', md: 'text-xs px-2.5 py-1' }

export function Badge({ variant = 'primary', size = 'md', children }: { variant?: Variant; size?: Size; children: React.ReactNode }) {
  return <span className={clsx('inline-flex items-center rounded-full font-medium', vClasses[variant], sClasses[size])}>{children}</span>
}
