import React from 'react'


const stats = [
  {
    text: 'user active',
    value: '3800'
  },
  {
    text: 'trusted by company',
    value: '230'
  },
  {
    text: 'Transaction',
    value: '$230M'
  }
]


const Stats = () => {
  return <section className="py-4 w-full flex flex-wrap justify-between mt-10">
    {
      stats.map((data, index)=> {
        return <div key={index} className='flex-1 flex md:space-x-2 items-center md:justify-center md:flex-row flex-col text-center'>
          <h2 className='text-white text-[24px] cursor-pointer'>{data.value}+</h2>
          <h4 className='text-gradient uppercase text-[16px] cursor-pointer'>{data.text}</h4>
        </div>
      })
    }
  </section>
}

export default Stats