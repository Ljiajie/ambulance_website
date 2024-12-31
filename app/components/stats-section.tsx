export default function StatsSection() {
  const stats = [
    { number: "8", suffix: "年", label: "转运护送经验" },
    { number: "12000", suffix: "+", label: "安全送达家属" },
    { number: "120", suffix: "+", label: "住院部病房合作" },
    { number: "500", suffix: "+", label: "派车网点遍布各省" },
    { number: "99", suffix: "%", label: "司机高素质保障" },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-2">救护车转运砥砺前行大数据</h2>
        <p className="text-center text-gray-600 mb-12">互联网+救护车让家属更快捷安排转运服务</p>
        
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="flex items-center justify-center">
                <span className="text-4xl font-bold text-red-600">{stat.number}</span>
                <span className="text-xl text-red-600">{stat.suffix}</span>
              </div>
              <p className="text-gray-600 mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

