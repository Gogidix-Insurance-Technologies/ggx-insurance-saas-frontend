import { Routes, Route, Navigate } from 'react-router-dom'
import Layout from './components/Layout'
import Dashboard from './pages/Dashboard'
import EmployeeDirectory from './pages/EmployeeDirectory'
import LeaveManagement from './pages/LeaveManagement'
import Recruitment from './pages/Recruitment'
import Payroll from './pages/Payroll'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Navigate to="/dashboard" replace />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="employees" element={<EmployeeDirectory />} />
        <Route path="leave" element={<LeaveManagement />} />
        <Route path="recruitment" element={<Recruitment />} />
        <Route path="payroll" element={<Payroll />} />
      </Route>
    </Routes>
  )
}
