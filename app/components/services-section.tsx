import ServiceCard from './service-card'

export default function ServicesSection() {
  const services = [
    {
      title: "救护车转院护送",
      image: "/1.png",
      price: "按公里数收费"
    },
    {
      title: "长途救护车出租",
      image: "/2.png",
      price: "按公里数收费"
    },
    {
      title: "跨省救护车出租",
      image: "/3.png",
      price: "按公里数收费"
    },
    {
      title: "救护车病人出院返乡",
      image: "/4.png",
      price: "按公里数收费"
    }
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-2">救护车转运服务项目</h2>
        <p className="text-center text-gray-600 mb-12">定制多元化的转运护送服务满足不同场景需求</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  )
}

