import Header from './components/header'
import ContactForm from './components/contact-form'
import StatsSection from './components/stats-section'
import ServicesSection from './components/services-section'
import AdvantagesSection from './components/advantages-section'
import FAQSection from './components/faq-section'
import TestimonialsSection from './components/testimonials-section'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section with Contact Form */}
        <div className="relative min-h-[400px] flex items-center justify-center bg-gradient-to-r from-red-900 via-red-600 to-orange-500 overflow-hidden">
          <div className="absolute inset-0 opacity-30">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2),transparent_50%)]" />
          </div>
          <div className="relative z-10 w-full max-w-4xl mx-auto px-4">
            <div className="bg-white rounded-lg shadow-xl">
              <ContactForm />
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <StatsSection />

        {/* Services Section */}
        <ServicesSection />

        {/* Advantages Section */}
        <AdvantagesSection />

        {/* FAQ Section */}
        <FAQSection />

        {/* Testimonials Section */}
        <TestimonialsSection />

        {/* Quick Actions */}
        <div className="fixed right-4 bottom-4 flex flex-col gap-2">
          <button className="bg-white p-3 rounded-lg shadow-lg border border-red-100 hover:border-red-200">
            <span className="text-red-600 text-sm">交通指南</span>
          </button>
          <button className="bg-white p-3 rounded-lg shadow-lg border border-red-100 hover:border-red-200">
            <span className="text-red-600 text-sm">上门接送</span>
          </button>
          <button className="bg-white p-3 rounded-lg shadow-lg border border-red-100 hover:border-red-200">
            <span className="text-red-600 text-sm">微信咨询</span>
          </button>
        </div>
      </main>
    </div>
  )
}

