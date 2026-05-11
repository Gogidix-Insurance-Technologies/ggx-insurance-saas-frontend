import { NavLink, Outlet } from 'react-router-dom'
import { LayoutDashboard, Users, FileText, DollarSign, BookOpen, RefreshCw, Menu, X, Briefcase } from 'lucide-react'
import { useState } from 'react'

const nav = [
  { to: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { to: '/clients', label: 'Clients', icon: Users },
  { to: '/quote-bind', label: 'Quote & Bind', icon: FileText },
  { to: '/commissions', label: 'Commissions', icon: DollarSign },
  { to: '/book-of-business', label: 'Book of Business', icon: BookOpen },
  { to: '/renewals', label: 'Renewals', icon: RefreshCw },
]

export default function Layout() {
  const [open, setOpen] = useState(false)
  return (
    <div className="flex h-screen bg-slate-50">
      <aside className={`fixed inset-y-0 left-0 z-50 w-64 bg-primary-900 text-white transform transition-transform lg:relative lg:translate-x-0 ${open ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="flex items-center justify-between p-4 border-b border-primary-800">
          <div className="flex items-center gap-2"><Briefcase className="w-7 h-7 text-accent-400" /><div><h1 className="font-bold">GGX Broker</h1><p className="text-xs text-primary-300">Agent Portal</p></div></div>
          <button onClick={() => setOpen(false)} className="lg:hidden"><X className="w-5 h-5" /></button>
        </div>
        <nav className="p-3 space-y-1">
          {nav.map(i => <NavLink key={i.to} to={i.to} onClick={() => setOpen(false)}
            className={({ isActive }) => `flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm ${isActive ? 'bg-primary-800 text-white' : 'text-primary-200 hover:bg-primary-800/50'}`}>
            <i.icon className="w-4 h-4" />{i.label}</NavLink>)}
        </nav>
      </aside>
      {open && <div className="fixed inset-0 bg-black/50 z-40 lg:hidden" onClick={() => setOpen(false)} />}
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="bg-white border-b border-slate-200 px-6 py-3 flex items-center justify-between">
          <button onClick={() => setOpen(true)} className="lg:hidden"><Menu className="w-5 h-5" /></button>
          <div className="ml-auto flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center text-primary-700 text-sm font-medium">BF</div>
            <span className="text-sm font-medium text-slate-700">Bola Fatade</span>
          </div>
        </header>
        <main className="flex-1 overflow-auto p-6"><Outlet /></main>
      </div>
    </div>
  )
}
