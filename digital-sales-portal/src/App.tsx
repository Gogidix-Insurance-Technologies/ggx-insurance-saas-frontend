import { Routes, Route, Navigate } from 'react-router-dom'
import Layout from './components/Layout'
import Dashboard from './pages/Dashboard'
import Campaigns from './pages/Campaigns'
import Leads from './pages/Leads'
import SalesPipeline from './pages/SalesPipeline'
import AgentPerformance from './pages/AgentPerformance'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Navigate to="/dashboard" replace />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="campaigns" element={<Campaigns />} />
        <Route path="leads" element={<Leads />} />
        <Route path="pipeline" element={<SalesPipeline />} />
        <Route path="agents" element={<AgentPerformance />} />
      </Route>
    </Routes>
  )
}
