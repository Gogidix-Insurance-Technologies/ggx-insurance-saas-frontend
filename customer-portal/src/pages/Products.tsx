import { Card } from '../components/shared/Card'
import { Badge } from '../components/shared/Badge'
import { Car, Home, Heart, Smartphone, Package, Truck, ArrowRight, CheckCircle } from 'lucide-react'

const products = [
  { name: 'Auto Insurance', icon: Car, desc: 'Comprehensive, Third Party, Fire & Theft coverage for your vehicles', price: 'From ₦35,000/yr', features: ['Roadside assistance', 'Windscreen cover', 'Personal accident', 'Third party liability'], color: 'bg-blue-50 text-blue-600', popular: true },
  { name: 'Home Insurance', icon: Home, desc: 'Protect your home and belongings against damage, theft, and natural disasters', price: 'From ₦80,000/yr', features: ['Building cover', 'Contents cover', 'Natural disaster', 'Theft protection'], color: 'bg-green-50 text-green-600', popular: false },
  { name: 'Health Insurance', icon: Heart, desc: 'Individual and family health plans with wide hospital network coverage', price: 'From ₦120,000/yr', features: ['Hospital visits', 'Surgery cover', 'Maternity', 'Dental & optical'], color: 'bg-red-50 text-red-600', popular: true },
  { name: 'Gadget Insurance', icon: Smartphone, desc: 'Cover your phones, laptops, and devices against damage and theft', price: 'From ₦8,000/yr', features: ['Screen damage', 'Liquid damage', 'Theft cover', 'Worldwide cover'], color: 'bg-purple-50 text-purple-600', popular: false },
  { name: 'Goods in Transit', icon: Package, desc: 'Protect goods being transported against loss, damage, or theft', price: 'From ₦25,000/trip', features: ['Single trip', 'Annual cover', 'Fleet cover', 'Warehouse to warehouse'], color: 'bg-amber-50 text-amber-600', popular: false },
  { name: 'Haulage Insurance', icon: Truck, desc: 'Comprehensive coverage for haulage trucks and cargo', price: 'Custom quote', features: ['Vehicle cover', 'Cargo protection', 'Third party', 'Employer liability'], color: 'bg-cyan-50 text-cyan-600', popular: false },
]

export default function Products() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Insurance Products</h1>
        <p className="text-sm text-slate-500 mt-1">Browse and purchase insurance coverage</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map(p => (
          <Card key={p.name} className="relative">
            {p.popular && <div className="absolute top-4 right-4"><Badge variant="accent">Popular</Badge></div>}
            <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${p.color} mb-4`}>
              <p.icon className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-semibold text-slate-900">{p.name}</h3>
            <p className="text-sm text-slate-500 mt-1">{p.desc}</p>
            <p className="text-primary-700 font-semibold mt-3">{p.price}</p>
            <div className="mt-4 space-y-2">
              {p.features.map(f => (
                <div key={f} className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-green-500" />
                  <span className="text-xs text-slate-600">{f}</span>
                </div>
              ))}
            </div>
            <button className="w-full mt-4 flex items-center justify-center gap-2 bg-primary-600 text-white px-4 py-2.5 rounded-lg text-sm font-medium hover:bg-primary-700">
              Get Quote <ArrowRight className="w-4 h-4" />
            </button>
          </Card>
        ))}
      </div>
    </div>
  )
}
