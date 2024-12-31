import Image from 'next/image'

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "古先生",
      image: "/男生1.jpeg",
      text: "平台提供不同级别的救护车服务，包括普通护送、监护和重症监护等。家属可以根据具体情况选择适合自己需求的转服务，可以确保病患得到最佳的途上的照顾。"
    },
    {
      name: "刘女士",
      image: "/女生.jpeg",
      text: "最近使用了救护车网转运服务，我对平台提供的救护车服务价格表示满意。专业护士在转运路途过程中给予来了很大的护理帮助，不仅可以确保的安全，还让家属感到非常安心。"
    },
    {
      name: "曹先生",
      image: "/男生2.jpeg",
      text: "赞扬了平台安排车辆的舒适性和清洁度，认为这让价格转运过程中的体验更加安心。曹先生对我们的救护车转运护送服务非常满意，并强烈推荐我们的服务给其他有需要的人。"
    }
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-2">救护车出租转运家属评价</h2>
        <p className="text-center text-gray-600 mb-12">感谢来自全国各城市家属对平台的相信认可</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-red-50 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <div className="relative w-12 h-12 mr-4">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="rounded-full object-cover"
                  />
                </div>
                <h3 className="font-semibold">{testimonial.name}</h3>
              </div>
              <p className="text-gray-600 text-sm italic">{`"${testimonial.text}"`}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

