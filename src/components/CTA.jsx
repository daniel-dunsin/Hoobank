import React from 'react'
import Button from './Button';
const CTA = () => {
  return <article className='w-full md:m-5 p-[40px] bg-black-gradient rounded-lg flex md:flex-row md:gap-y-0 justify-between items-center flex-col gap-y-5 md:text-left text-center'>
    <div className='flex-1 flex flex-col gap-y-5'>
      <h1 className='text-white md:text-[48px] md:leading-[52px] text-[24px] leading-[26px]'>Let's try our service now</h1>
      <p className='text-dimWhite md:text-[16px] leading-[24px] text-[15px] max-w-[501px]'>Everything you need to accept card payment and grow your business anywhere on the planet.</p>
    </div>
    <div className='flex-1 md:flex justify-end items-center w-full'>
      <Button />
    </div>
  </article>
}

export default CTA;