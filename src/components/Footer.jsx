import React from 'react'
import { logo } from '../assets';


const links = [
  {
    title: 'Useful Links',
    lists: ['Content', 'How it works', 'Create', 'Explore', 'Terms & Services']
  },
  {
    title: 'Communities',
    lists: ['Help Center', 'Partner', 'Suggestion', 'Blog', 'Newsletter']
  },
  {
    title: 'Partner',
    lists: ['Our Partners', 'Become a partner']
  }
]

const Footer = () => {
  return <footer className="py-4">
    <div className='flex justify-between gap-8 md:flex-row flex-col'>
      <article className='flex-1 md:mt-7'>
        <img src={logo} alt="hoobank" className='w-[200px] mb-3' />
        <p className='text-[16px] text-dimWhite max-w-[324px]'>A new way to make the payments easy, reliable and secure</p>
      </article>
      <div className='flex flex-[1.5] flex-wrap md:flex-row flex-col md:space-y-0 space-y-5'>
        {
          links.map((link, index) => (
            <article key={index} className='flex-1'>
              <h2 className='text-white mb-4'>{link.title}</h2>
              <ul className='flex flex-col md:gap-y-4 gap-y-2'>
                {
                  link.lists.map((list, index) => (
                    <li key={index} className='text-[15px] transition text-dimWhite hover:text-secondary cursor-pointer'>{list}</li>
                  ))
                }
              </ul>
            </article>
          ))
        }
      </div>
    </div>
    <p className='mt-8 mb-2 text-white text-center md:text-left text-[16px] cursor-pointer w-full md:border-t-2 border-t-gray-500 pt-2'>&copy; Adejare Daniel 2022</p>
  </footer>
}

export default Footer;