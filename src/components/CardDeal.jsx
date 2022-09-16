import React from 'react'
import Button from './Button'
import {card} from '../assets'
const CardDeal = () => {
  return <section className="py-4">
    <div className="w-full flex flex-col-reverse md:flex-row items-center md:space-x-4">
      <div className='flex flex-col space-y-6 flex-1 md:mt-0 mt-7'>
        <h1 className='md:text-[52px] md:leading-[64px] text-[26px] leading-[32px] text-white'>Find a better card deal in few steps.</h1>
        <p className='md:text-[16px] leading-[24px] text-[15px] text-dimWhite max-w-[501px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum sunt doloremque deserunt facilis consectetur veniam reiciendis quo ipsa totam! Facere.</p>
        <Button />
      </div>
      <div className="flex-1">
        <img src={card} alt="card-deal" className="w-full" />
      </div>
    </div>
  </section>
}

export default CardDeal