import { Routes, Route, Navigate } from 'react-router-dom'
import Layout from './components/Layout'
import Dashboard from './pages/Dashboard'
import Clients from './pages/Clients'
import QuoteBind from './pages/QuoteBind'
import Commissions from './pages/Commissions'
import BookOfBusiness from './pages/BookOfBusiness'
import Renewals from './pages/Renewals'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Navigate to="/dashboard" replace />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="clients" element={<Clients />} />
        <Route path="quote-bind" element={<QuoteBind />} />
        <Route path="commissions" element={<Commissions />} />
        <Route path="book-of-business" element={<BookOfBusiness />} />
        <Route path="renewals" element={<Renewals />} />
      </Route>
    </Routes>
  )
}
