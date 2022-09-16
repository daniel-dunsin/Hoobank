
import { Navbar, Header, Stats, Billing, Business, CardDeal,Testimonials,  Clients, CTA, FeedbackCard, GetStarted, Footer } from './components'

function App() {
  return <div className="bg-primary w-full">
    <div className="flex justify-center items-center px-5">
      <div className='w-full max-w-[1440px] mx-auto'>
        <Navbar />
      </div>
    </div>
    <div className="flex justify-start">
      <div className='w-full max-w-[1440px] mx-auto'>
        <Header />
      </div>
    </div>

    <div className="flex justify-center">
      <div className='w-full max-w-[1440px] mx-auto px-6 md:px-16 flex flex-col space-y-10'>
        <Stats />
        <Business />
        <Billing />
        <CardDeal />
        <Testimonials />
        <Clients />
        <CTA />
        <Footer />
      </div>
    </div>
  </div>
}
export default App
