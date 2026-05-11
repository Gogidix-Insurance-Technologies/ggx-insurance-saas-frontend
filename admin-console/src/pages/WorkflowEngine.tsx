import { Card } from '../components/shared/Card'
import { Badge } from '../components/shared/Badge'
import { GitBranch, Plus, Play, CheckCircle, AlertTriangle } from 'lucide-react'

const workflows = [
  { id: 1, name: 'New Policy Issuance', trigger: 'Customer Application', steps: 8, status: 'active', executions: 12450, avgTime: '4.2 min' },
  { id: 2, name: 'Claims Processing', trigger: 'Claim Filed', steps: 12, status: 'active', executions: 3200, avgTime: '2.5 hrs' },
  { id: 3, name: 'Policy Renewal', trigger: '30 Days Before Expiry', steps: 6, status: 'active', executions: 8900, avgTime: '1.8 min' },
  { id: 4, name: 'Customer Onboarding', trigger: 'New Registration', steps: 10, status: 'active', executions: 6700, avgTime: '8.5 min' },
  { id: 5, name: 'Fraud Detection Review', trigger: 'High Risk Flag', steps: 7, status: 'active', executions: 450, avgTime: '45 min' },
  { id: 6, name: 'Payment Processing', trigger: 'Premium Due', steps: 5, status: 'paused', executions: 15600, avgTime: '2.1 min' },
  { id: 7, name: 'Document Generation', trigger: 'Policy/Claim Event', steps: 4, status: 'active', executions: 22100, avgTime: '30 sec' },
]

const recentExecutions = [
  { workflow: 'New Policy Issuance', trigger: 'Customer: James O.', status: 'completed', time: '2 min ago', duration: '3.8 min' },
  { workflow: 'Claims Processing', trigger: 'Claim #CLM-4521', status: 'running', time: '5 min ago', duration: 'In Progress' },
  { workflow: 'Payment Processing', trigger: 'Premium: POL-8834', status: 'completed', time: '12 min ago', duration: '1.9 min' },
  { workflow: 'Customer Onboarding', trigger: 'New: Sarah K.', status: 'completed', time: '18 min ago', duration: '7.2 min' },
  { workflow: 'Fraud Detection Review', trigger: 'Flag: CLM-4499', status: 'failed', time: '30 min ago', duration: 'Timeout' },
]

export default function WorkflowEngine() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Workflow Engine</h1>
          <p className="text-sm text-slate-500 mt-1">Automated business process orchestration</p>
        </div>
        <button className="flex items-center gap-2 bg-primary-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary-700">
          <Plus className="w-4 h-4" /> New Workflow
        </button>
      </div>

      <Card>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-200">
                <th className="text-left text-xs font-medium text-slate-500 uppercase pb-3">Workflow</th>
                <th className="text-left text-xs font-medium text-slate-500 uppercase pb-3">Trigger</th>
                <th className="text-left text-xs font-medium text-slate-500 uppercase pb-3">Steps</th>
                <th className="text-left text-xs font-medium text-slate-500 uppercase pb-3">Executions</th>
                <th className="text-left text-xs font-medium text-slate-500 uppercase pb-3">Avg Time</th>
                <th className="text-left text-xs font-medium text-slate-500 uppercase pb-3">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {workflows.map(wf => (
                <tr key={wf.id} className="hover:bg-slate-50">
                  <td className="py-3">
                    <div className="flex items-center gap-2">
                      <GitBranch className="w-4 h-4 text-primary-500" />
                      <span className="text-sm font-medium text-slate-900">{wf.name}</span>
                    </div>
                  </td>
                  <td className="py-3 text-sm text-slate-600">{wf.trigger}</td>
                  <td className="py-3 text-sm text-slate-600">{wf.steps}</td>
                  <td className="py-3 text-sm font-medium text-slate-900">{wf.executions.toLocaleString()}</td>
                  <td className="py-3 text-sm text-slate-600">{wf.avgTime}</td>
                  <td className="py-3"><Badge variant={wf.status === 'active' ? 'success' : 'warning'}>{wf.status}</Badge></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      <Card title="Recent Executions">
        <div className="space-y-3">
          {recentExecutions.map((ex, i) => (
            <div key={i} className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
              <div className="flex items-center gap-3">
                {ex.status === 'completed' ? <CheckCircle className="w-4 h-4 text-green-500" /> :
                 ex.status === 'running' ? <Play className="w-4 h-4 text-blue-500" /> :
                 <AlertTriangle className="w-4 h-4 text-red-500" />}
                <div>
                  <p className="text-sm font-medium text-slate-700">{ex.workflow}</p>
                  <p className="text-xs text-slate-500">{ex.trigger}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm text-slate-600">{ex.duration}</p>
                <p className="text-xs text-slate-400">{ex.time}</p>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  )
}
