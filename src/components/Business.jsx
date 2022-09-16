import React from 'react'
import Button from './Button';
import {star, shield, send} from '../assets';


const businessData = [
  {
    img: star, 
    title: 'Rewards',
    text: 'The best credit cards offer some tantalizing of promotions and prizes',
  },
  {
    img: shield, 
    title: '100% Secured',
    text: 'We take proactive steps to make sure your information adnd transactions are secure',
  },
  {
    img: send, 
    title: 'Balance Transfer',
    text: 'A balance transfer credit card can save you a lot of money in interest charges',
  }
]


const BusinessCard = ({img, title, text}) =>(
  <article className='flex space-x-5  cursor-pointer items-center hover:bg-black-gradient feature-card max-w-fit p-[15px] rounded-xl'>
    <div className="w-[32px] h-[32px]">
      <img src={img} alt={title} className='w-full h-full ' />
    </div>
    <div className='flex flex-col space-y-1'>
      <h4 className='text-white text-[20px]'>{title}</h4>
      <p className='text-dimWhite md:text-[15px] text-[14px] max-w-[410px]'>{text}</p>
    </div>
  </article>
)


const Business = () => (
  <section className="py-4 mt-20">
    <div className="w-full flex flex-col md:flex-row space-x-0 md:space-x-3 space-y-6 md:space-y-0">


      <div className="flex-1 flex flex-col space-y-5">
          <h1 className="md:text-[52px] md:leading-[64px] text-[26px] leading-[32px] text-white">You do business, <br className='md:block hidden' /> we'll handle the money.</h1>
          <p className="text-dimWhite leading-6 md:text-[16px] text-[15px] max-w-[500px]">With the right credit card, you can improve your financial life by building credit, earning rewards and saving money. But with hundredss of  credit cards on the market</p>
          <Button />
      </div>

      <div className='flex-1 w-full flex flex-col space-y-3'>
        {
          businessData.map((data, index)=> <BusinessCard key={index}  {...data}/>)
        }
      </div>
    </div>
  </section>
)

export default Business;