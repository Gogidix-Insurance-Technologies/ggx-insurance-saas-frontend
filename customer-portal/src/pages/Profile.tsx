import { Card } from '../components/shared/Card'
import { User, Mail, Phone, MapPin, Edit, Save } from 'lucide-react'
import { useState } from 'react'

export default function Profile() {
  const [editing, setEditing] = useState(false)

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">My Profile</h1>
          <p className="text-sm text-slate-500 mt-1">Manage your personal information</p>
        </div>
        <button onClick={() => setEditing(!editing)} className="flex items-center gap-2 px-4 py-2 border border-slate-200 rounded-lg text-sm text-slate-600 hover:bg-slate-50">
          {editing ? <><Save className="w-4 h-4" /> Save</> : <><Edit className="w-4 h-4" /> Edit</>}
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="text-center">
          <div className="w-24 h-24 rounded-full bg-primary-100 flex items-center justify-center text-primary-700 text-2xl font-bold mx-auto">JO</div>
          <h2 className="text-xl font-bold text-slate-900 mt-4">James Okafor</h2>
          <p className="text-sm text-slate-500">Customer since Dec 2023</p>
          <p className="text-sm text-slate-500 mt-1">Policy Holder ID: GGX-2847-NG</p>
        </Card>

        <Card className="lg:col-span-2">
          <h3 className="text-lg font-semibold text-slate-900 mb-4">Personal Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { label: 'Full Name', value: 'James Chidi Okafor', icon: User },
              { label: 'Email', value: 'james.okafor@email.com', icon: Mail },
              { label: 'Phone', value: '+234 801 234 5678', icon: Phone },
              { label: 'Address', value: '15 Admiralty Way, Lekki Phase 1, Lagos', icon: MapPin },
            ].map(field => (
              <div key={field.label}>
                <label className="text-xs font-medium text-slate-500 block mb-1">{field.label}</label>
                {editing ? (
                  <input defaultValue={field.value} className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary-500" />
                ) : (
                  <div className="flex items-center gap-2 text-sm text-slate-900"><field.icon className="w-4 h-4 text-slate-400" />{field.value}</div>
                )}
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  )
}
