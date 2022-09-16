import React from 'react'
import { quotes } from '../assets'
const FeedbackCard = ({text, author, position, img}) => {
  return <article className='feature-card flex-1 text-white px-6 py-8 min-h-[320px] max-h-[320px] rounded-lg h-full flex flex-col justify-between '>
    <img src={quotes} alt="quotes" className='w-[50px] h-[50px]' />
    <p className='text-[16px] max-w-[501px]'>{text}</p>
    <div className='flex space-x-4 items-center'>
      <img src={img} alt={author} className='w-[64px] h-[64px]' />
      <div className='flex flex-col'>
        <h1>{author}</h1>
        <p>{position}</p>
      </div>
    </div>
  </article>
}

export default FeedbackCard