import Link from 'next/link'
import Image from 'next/image'
import { Phone } from 'lucide-react'

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <div className="relative w-8 h-8">
                <Image
                  src="/救护车.jpg"
                  alt="Emergency Service Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-red-600 text-xl font-bold">救护车网</span>
            </Link>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-red-600">首页</Link>
            <Link href="/knowledge" className="text-gray-700 hover:text-red-600">救护车知识</Link>
            <Link href="/services" className="text-gray-700 hover:text-red-600">救护车服务</Link>
            <Link href="/faq" className="text-gray-700 hover:text-red-600">救护车问答</Link>
            <Link href="/about" className="text-gray-700 hover:text-red-600">关于我们</Link>
            <Link href="/contact" className="text-gray-700 hover:text-red-600">联系方式</Link>
          </nav>

          <div className="flex items-center">
            <div className="hidden md:flex items-center space-x-2 text-red-600">
              <Phone className="h-5 w-5" />
              <span className="font-bold">400-9090-120</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

