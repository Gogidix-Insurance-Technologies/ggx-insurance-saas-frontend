import { Routes, Route, Navigate } from 'react-router-dom'
import Layout from './components/Layout'
import Dashboard from './pages/Dashboard'
import UserManagement from './pages/UserManagement'
import TenantManagement from './pages/TenantManagement'
import SystemConfig from './pages/SystemConfig'
import AuditLog from './pages/AuditLog'
import ProductManagement from './pages/ProductManagement'
import WorkflowEngine from './pages/WorkflowEngine'
import ApiGateway from './pages/ApiGateway'
import Notifications from './pages/Notifications'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Navigate to="/dashboard" replace />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="users" element={<UserManagement />} />
        <Route path="tenants" element={<TenantManagement />} />
        <Route path="products" element={<ProductManagement />} />
        <Route path="system-config" element={<SystemConfig />} />
        <Route path="workflow-engine" element={<WorkflowEngine />} />
        <Route path="api-gateway" element={<ApiGateway />} />
        <Route path="notifications" element={<Notifications />} />
        <Route path="audit-log" element={<AuditLog />} />
      </Route>
    </Routes>
  )
}
