import { Routes, Route, Navigate } from 'react-router-dom'
import Layout from './components/Layout'
import Dashboard from './pages/Dashboard'
import FinancialOverview from './pages/FinancialOverview'
import PortfolioAnalytics from './pages/PortfolioAnalytics'
import RiskDashboard from './pages/RiskDashboard'
import OperationalMetrics from './pages/OperationalMetrics'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Navigate to="/dashboard" replace />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="financial" element={<FinancialOverview />} />
        <Route path="portfolio" element={<PortfolioAnalytics />} />
        <Route path="risk" element={<RiskDashboard />} />
        <Route path="operations" element={<OperationalMetrics />} />
      </Route>
    </Routes>
  )
}
