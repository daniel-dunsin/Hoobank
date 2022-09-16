import React from 'react'
import { arrowUp } from '../assets'
const GetStarted = ({styles}) => {
  return <article className={`w-[120px] h-[120px] bg-blue-gradient rounded-full p-[1px] ${styles}`}>
    <div className='w-full h-full flex flex-col justify-center items-center bg-primary text-[16px] rounded-full'>
      <div className='flex flex-row items-center'>
        <p className='text-gradient'>Get</p>
        <img src={arrowUp} alt="arrow" />
      </div>
      <p className='text-gradient'>Started</p>
    </div>
  </article>
}

export default GetStarted