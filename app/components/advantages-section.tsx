import { Truck, Layout, Users, Stethoscope } from 'lucide-react'

export default function AdvantagesSection() {
  const advantages = [
    {
      icon: <Truck className="w-8 h-8 text-red-600" />,
      title: "车辆充足",
      description: "为伤员、病患、行动不便者、老人等多种需求，提供便利的条件"
    },
    {
      icon: <Layout className="w-8 h-8 text-red-600" />,
      title: "类型多样",
      description: "普通转送、医护转送、重症转送、省外跨市转运长短途转运各种病人"
    },
    {
      icon: <Users className="w-8 h-8 text-red-600" />,
      title: "专业团队",
      description: "多年护理经验，路上处理病人突发情况，熟练掌握各种医护设备的操作"
    },
    {
      icon: <Stethoscope className="w-8 h-8 text-red-600" />,
      title: "设备齐全",
      description: "呼吸机、制氧机、心电监护仪、微量泵、吸痰器、急救药箱、移动担架等"
    }
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-2">救护车出租转运我们的优势</h2>
        <p className="text-center text-gray-600 mb-12">选择救护车平台就是多选择一种转运保障</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {advantages.map((advantage, index) => (
            <div key={index} className="text-center">
              <div className="bg-red-50 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                {advantage.icon}
              </div>
              <h3 className="font-semibold mb-2">{advantage.title}</h3>
              <p className="text-gray-600 text-sm">{advantage.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

