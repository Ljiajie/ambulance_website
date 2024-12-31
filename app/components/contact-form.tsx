'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { Input } from '@/components/ui/input'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    description: '',
    name: '',
    phone: ''
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log(formData)
  }

  return (
    <div className="w-full max-w-2xl mx-auto p-6">
      <h2 className="text-red-600 text-2xl font-bold mb-6 text-center">
        亲属好！请描述您的需求...
      </h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <Textarea
            placeholder="若写具体状况，从哪里享护理，全国统一标准。比如：病人状况、需要什么特殊物品设备、是否用陪护人员等，平台第一时间与您联系咨询！"
            className="min-h-[150px]"
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          />
        </div>
        <div>
          <Input
            placeholder="姓名"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        </div>
        <div>
          <Input
            placeholder="手机号"
            type="tel"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          />
        </div>
        <Button 
          type="submit" 
          className="w-full bg-red-600 hover:bg-red-700 text-white"
        >
          提交需求
        </Button>
      </form>
    </div>
  )
}

