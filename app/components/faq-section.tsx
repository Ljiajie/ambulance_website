import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function FAQSection() {
  const faqs = [
    {
      question: "救护车转运遵循注意什么?",
      answer: "一个经常引发争议的话题是，救护车在执行其救援使命的过程中，是否可以被用于非紧急的或者说非医疗的转运工作?这个问题的答案不尽相同，因为它涉及到了法律、伦理、道德等多个层面。那么，究竟救护车转运违法吗?这是本文我要探讨的主题。在..."
    },
    {
      question: "救护车没有拉警报需要避让吗",
      answer: "据《道路交通安全法》第51条规定，机动车驾驶人及现方有救灾、救护、防汛紧急任务以及执行紧急公务的消防车、救护车、工程救险车驶来时，应当迅速让行。确需借道时，在确保安全的前提下，机动车可以借用非机动车道通行，并在..."
    },
    {
      question: "靠谱长途救护车转运多少钱?",
      answer: "提供医疗救助或救护车服务是公共机构和私人公司的关键责任，但每位患者有一样的顾虑，靠谱的长途救护车转运多少钱? 我们从最基本的收费开始，单趟的家庭护理费用会根据距离长短进行计算，每公里6元。主要需要考虑的是护理护工，而..."
    },
    {
      question: "没力气去医院可以叫救护车吗",
      answer: "大多数人在面临突如其来的医疗紧急情况时，会碰到无措，短暂的惊慌可能使我们错过了最佳的抢救时机，幸运的是，科技发展为我们提供了一个创新的解决方案——妙小护微信小程序，它让我们可以方便地预约救护车，确保及时有效的医疗援助。如果没有力气去医院..."
    }
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-2">救护车出租转运常见问题</h2>
        <p className="text-center text-gray-600 mb-12">救护车转运日常路途注意相关事项</p>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible>
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  <span className="text-red-600 mr-2">Q</span>
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent>
                  <div className="pl-6">
                    <span className="text-red-600 mr-2">A</span>
                    {faq.answer}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}

