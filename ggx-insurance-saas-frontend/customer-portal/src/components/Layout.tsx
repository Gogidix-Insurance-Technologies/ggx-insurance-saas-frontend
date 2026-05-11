import { NavLink, Outlet } from 'react-router-dom'
import { LayoutDashboard, FileText, AlertCircle, CreditCard, Package, User, HeadphonesIcon, Menu, X, Shield } from 'lucide-react'
import { useState } from 'react'

const navItems = [
  { to: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { to: '/policies', label: 'My Policies', icon: FileText },
  { to: '/claims', label: 'Claims', icon: AlertCircle },
  { to: '/payments', label: 'Payments', icon: CreditCard },
  { to: '/products', label: 'Products', icon: Package },
  { to: '/support', label: 'Support', icon: HeadphonesIcon },
  { to: '/profile', label: 'Profile', icon: User },
]

export default function Layout() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="flex h-screen bg-slate-50">
      <aside className={`fixed inset-y-0 left-0 z-50 w-64 bg-white border-r border-slate-200 transform transition-transform lg:relative lg:translate-x-0 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="flex items-center justify-between p-4 border-b border-slate-200">
          <div className="flex items-center gap-2">
            <Shield className="w-8 h-8 text-primary-600" />
            <div>
              <h1 className="text-lg font-bold text-slate-900">GGX Portal</h1>
              <p className="text-xs text-slate-500">Customer Dashboard</p>
            </div>
          </div>
          <button onClick={() => setSidebarOpen(false)} className="lg:hidden"><X className="w-5 h-5" /></button>
        </div>
        <nav className="p-3 space-y-1">
          {navItems.map(item => (
            <NavLink
              key={item.to}
              to={item.to}
              onClick={() => setSidebarOpen(false)}
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors ${isActive ? 'bg-primary-50 text-primary-700 font-medium' : 'text-slate-600 hover:bg-slate-50'}`
              }
            >
              <item.icon className="w-4 h-4" />
              {item.label}
            </NavLink>
          ))}
        </nav>
      </aside>

      {sidebarOpen && <div className="fixed inset-0 bg-black/50 z-40 lg:hidden" onClick={() => setSidebarOpen(false)} />}

      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="bg-white border-b border-slate-200 px-6 py-3 flex items-center justify-between">
          <button onClick={() => setSidebarOpen(true)} className="lg:hidden"><Menu className="w-5 h-5" /></button>
          <div className="flex items-center gap-3 ml-auto">
            <span className="text-sm text-slate-500">Welcome, <span className="font-medium text-slate-700">James</span></span>
            <div className="w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center text-primary-700 text-sm font-medium">JO</div>
          </div>
        </header>
        <main className="flex-1 overflow-auto p-6">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
