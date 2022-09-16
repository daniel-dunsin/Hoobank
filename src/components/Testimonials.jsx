import React from 'react'
import {people01, people02, people03} from '../assets'
import FeedbackCard from './FeedbackCard';

const testimonialData = [
  {
    text: "Money is only a tool. It will take you wherever you want but it won't replace you as the driver",
    author: "Herman Jensen",
    position: 'Founder & Leader',
    img: people01,
  },
  {
    text: "Money makes your life easier. if you're lucky to have it, you're lucky.",
    author: "Steve Mark",
    position: 'Accountant',
    img: people02,
  },
  {
    text: "It is usually people in the money business, tech and international trade that are really rich.",
    author: "Kenn Gallaghar",
    position: 'Educationist',
    img: people03,
  }
]




const Testimonials = () => {
  return <section className="py-4">
    {/* title */}
    <div className="w-full flex md:flex-row flex-col justify-between md:items-center md:space-y-0 space-y-5">
      <h1 className="text-white md:text-[52px] md:leading-[64px] text-[26px] leading-[32px] flex-1 max-w-[501px]">What people are saying about us</h1>
      <p className='text-dimWhite md:text-[16px] leading-[24px] text-[15px] max-w-[501px] flex-[1.5]'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum neque et pariatur deserunt reiciendis dolorem quisquam.
      </p>
    </div>
    <section className='flex md:gap-16 gap:8 md:justify-between items-center justify-center md:flex-row flex-col mt-16'>
      {
        testimonialData.map((testimonial, index)=> <FeedbackCard key={index} {...testimonial} />)
      }
    </section>
  </section>
}

export default Testimonials