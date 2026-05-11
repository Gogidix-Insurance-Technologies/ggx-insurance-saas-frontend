import { clsx } from 'clsx'
import { ReactNode, useState } from 'react'

interface TabsProps {
  tabs: { id: string; label: string; icon?: ReactNode; count?: number }[]
  activeTab: string
  onChange: (id: string) => void
  children: ReactNode
}

export function Tabs({ tabs, activeTab, onChange, children }: TabsProps) {
  return (
    <div>
      <div className="border-b border-slate-200">
        <nav className="flex gap-0 -mb-px">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => onChange(tab.id)}
              className={clsx(
                'flex items-center gap-2 px-4 py-3 text-sm font-medium border-b-2 transition-colors whitespace-nowrap',
                activeTab === tab.id
                  ? 'border-primary-600 text-primary-600'
                  : 'border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300'
              )}
            >
              {tab.icon}
              {tab.label}
              {tab.count !== undefined && (
                <span className={clsx(
                  'ml-1 px-2 py-0.5 rounded-full text-xs',
                  activeTab === tab.id ? 'bg-primary-100 text-primary-700' : 'bg-slate-100 text-slate-600'
                )}>
                  {tab.count}
                </span>
              )}
            </button>
          ))}
        </nav>
      </div>
      <div className="pt-4">{children}</div>
    </div>
  )
}

interface TabProps {
  children: ReactNode
}

export function Tab({ children }: TabProps) {
  return <>{children}</>
}
