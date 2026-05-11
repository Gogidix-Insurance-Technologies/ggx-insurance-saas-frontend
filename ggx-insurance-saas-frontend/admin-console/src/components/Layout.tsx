import { NavLink, Outlet } from 'react-router-dom'
import {
  LayoutDashboard, Users, Building2, Settings, Shield, FileText,
  Package, GitBranch, Network, Bell, Menu, X, ChevronDown
} from 'lucide-react'
import { useState } from 'react'

const navItems = [
  { to: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { to: '/users', label: 'User Management', icon: Users },
  { to: '/tenants', label: 'Tenants', icon: Building2 },
  { to: '/products', label: 'Products', icon: Package },
  { to: '/system-config', label: 'System Config', icon: Settings },
  { to: '/workflow-engine', label: 'Workflows', icon: GitBranch },
  { to: '/api-gateway', label: 'API Gateway', icon: Network },
  { to: '/notifications', label: 'Notifications', icon: Bell },
  { to: '/audit-log', label: 'Audit Log', icon: FileText },
  { to: '/roles', label: 'Roles & Permissions', icon: Shield },
]

export default function Layout() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="flex h-screen bg-slate-50">
      <aside className={`fixed inset-y-0 left-0 z-50 w-64 bg-primary-900 text-white transform transition-transform lg:relative lg:translate-x-0 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="flex items-center justify-between p-4 border-b border-primary-800">
          <div className="flex items-center gap-2">
            <Shield className="w-8 h-8 text-accent-400" />
            <div>
              <h1 className="text-lg font-bold">GGX Console</h1>
              <p className="text-xs text-primary-300">Admin Orchestrator</p>
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
                `flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors ${isActive ? 'bg-primary-800 text-white' : 'text-primary-200 hover:bg-primary-800/50'}`
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
        <header className="bg-white border-b border-slate-200 px-4 py-3 flex items-center justify-between">
          <button onClick={() => setSidebarOpen(true)} className="lg:hidden"><Menu className="w-5 h-5" /></button>
          <div className="flex items-center gap-4 ml-auto">
            <Bell className="w-5 h-5 text-slate-500" />
            <div className="flex items-center gap-2 cursor-pointer">
              <div className="w-8 h-8 rounded-full bg-primary-600 flex items-center justify-center text-white text-sm font-medium">SA</div>
              <span className="text-sm font-medium text-slate-700">Super Admin</span>
              <ChevronDown className="w-4 h-4 text-slate-400" />
            </div>
          </div>
        </header>
        <main className="flex-1 overflow-auto p-6">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
