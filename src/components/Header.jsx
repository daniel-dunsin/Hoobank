import React from 'react';
import { robot , discount} from '../assets';
import GetStarted from './GetStarted';
const Header = () => {
  return <header className='mt-8 w-full'>
    <div className='w-full flex justify-between items-center sm:flex-row md:space-y-0 flex-col space-y-7'>
      {/* Content */}
      <article className='flex-1 flex flex-col py-2 px-6 md:px-16 text-white w-full'>
        <div className='rounded-[10px] bg-black-gradient text-[14px] md:text-[16px] text-dimWhite py-2 px-3 flex flex-row space-x-1 items-center max-w-fit mb-6'>
          <img src={discount} alt="dicount" className='w-[32px]' />
          <p className='uppercase'><span className='text-white'>20%</span> Discount for <span className='text-white'>1 month</span> Account</p>
        </div>


        <div className='flex space-x-20 items-center'>
          <h1 className='md:text-[64px] md:leading-[82px] text-[30px] leading-[40px]'>The Next <br className='hidden md:block' /> <span className='text-gradient'>Generation</span></h1>
          <GetStarted styles='md:block hidden' />
        </div>
        <h1 className='md:text-[64px] md:leading-[82px] text-[30px] leading-[40px]mb-6'>Payment Method</h1>
        <p className='text-[13px] md:text-[15px] mt-2 max-w-[500px]'>Our Team of experts use a methodology to identify the credit cards most likely to fit your needs. We examine annual percentage rates, annual fees</p>
      </article>
      {/* get started component */}
      <GetStarted styles='md:hidden block' />

      {/* Image */}
      <article className='flex-1 relative'>
        <img src={robot} alt="hero" className='w-full h-full z-[5]' />
      </article>

    </div>
  </header>
}

export default Header