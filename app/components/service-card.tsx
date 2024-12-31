import Image from 'next/image'
import { Button } from '@/components/ui/button'

interface ServiceCardProps {
  title: string
  image: string
  price: string
}

export default function ServiceCard({ title, image, price }: ServiceCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="relative h-48">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-center mb-4">{title}</h3>
        <div className="flex items-center justify-between">
          <span className="text-red-600">{price}</span>
          <Button variant="destructive">立即预约</Button>
        </div>
      </div>
    </div>
  )
}

