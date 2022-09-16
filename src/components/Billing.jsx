import React from 'react'
import {bill, apple, google} from '../assets'
const Billing = () => {
  return <section className='py-4'>
    <div className="w-full flex md:flex-row flex-col md:space-x-4 space-x-0 md:space-y-0 space-y-5 items-center justify-between">
      <div className='flex-1'>
        <img src={bill} alt="billing" className='w-full'/>
      </div>
      <div className="flex flex-1 flex-col space-y-8">
        <h1 className='md:text-[52px] md:leading-[64px] text-[26px] leading-[32px] text-white'>Easily control your billing & invoicing.</h1>
        <p className='text-dimWhite md:text-[16px] text-[15px] max-w-[500px]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas voluptatem laborum quisquam culpa, quod iste enim esse? Exercitationem.</p>
        <div className='flex items-center space-x-6'>
          <img src={google} alt="play-store" />
          <img src={apple} alt="app-store" />
        </div>
      </div>
    </div>
  </section>
}

export default Billing