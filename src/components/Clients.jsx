import React from 'react'
import {airbnb, binance, coinbase, dropbox} from '../assets'
const Clients = () => {
  return <section className="py-4 w-full flex flex-row flex-wrap md:gap-16 gap-x-4 gap-y-6 justify-between">
    <div className='flex-1 flex justify-center items-center'>
      <img src={airbnb} className='min-w-[120px] max-w-[150px]' alt="airbnb" />
    </div>

    <div className='flex-1 flex justify-center items-center'>
      <img src={binance} className='min-w-[120px] max-w-[150px]' alt="binance" />
    </div>

    <div className='flex-1 flex justify-center items-center'>
      <img src={coinbase} className='min-w-[120px] max-w-[150px]' alt="coinbase" />
    </div>

    <div className='flex-1 flex justify-center items-center'>
      <img src={dropbox} className='min-w-[120px] max-w-[150px]' alt="dropbox" />
    </div>
  </section>
}

export default Clients