import { NavLink, Outlet } from 'react-router-dom'
import { LayoutDashboard, MessageSquare, Ticket, Users, BookOpen, Menu, X, Headphones } from 'lucide-react'
import { useState } from 'react'

const nav = [
  { to: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { to: '/inbox', label: 'Inbox', icon: MessageSquare },
  { to: '/tickets', label: 'Tickets', icon: Ticket },
  { to: '/customers', label: 'Customer 360', icon: Users },
  { to: '/knowledge-base', label: 'Knowledge Base', icon: BookOpen },
]

export default function Layout() {
  const [open, setOpen] = useState(false)
  return (
    <div className="flex h-screen bg-slate-50">
      <aside className={`fixed inset-y-0 left-0 z-50 w-64 bg-primary-800 text-white transform transition-transform lg:relative lg:translate-x-0 ${open ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="flex items-center justify-between p-4 border-b border-primary-700">
          <div className="flex items-center gap-2"><Headphones className="w-7 h-7 text-primary-200" /><div><h1 className="font-bold">GGX Support</h1><p className="text-xs text-primary-300">Customer Support</p></div></div>
          <button onClick={() => setOpen(false)} className="lg:hidden"><X className="w-5 h-5" /></button>
        </div>
        <nav className="p-3 space-y-1">
          {nav.map(i => <NavLink key={i.to} to={i.to} onClick={() => setOpen(false)}
            className={({ isActive }) => `flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm ${isActive ? 'bg-primary-700 text-white' : 'text-primary-200 hover:bg-primary-700/50'}`}>
            <i.icon className="w-4 h-4" />{i.label}</NavLink>)}
        </nav>
      </aside>
      {open && <div className="fixed inset-0 bg-black/50 z-40 lg:hidden" onClick={() => setOpen(false)} />}
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="bg-white border-b border-slate-200 px-6 py-3"><button onClick={() => setOpen(true)} className="lg:hidden"><Menu className="w-5 h-5" /></button></header>
        <main className="flex-1 overflow-auto p-6"><Outlet /></main>
      </div>
    </div>
  )
}
