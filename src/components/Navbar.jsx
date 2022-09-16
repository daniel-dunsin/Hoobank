import React from 'react';
import { useState } from 'react';
import { logo, close, menu } from '../assets';


const links = [
  {
    text: 'home'
  },
  {
    text: 'features'
  },
  {
    text: 'product'
  },
  {
    text: 'clients'
  }
]

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  return <nav className='py-4 md:px-16 px-5 text-white w-full flex justify-between items-center'>
    <div className='min-w-[120px] max-w-[150px]'>
      <img src={logo} alt="hoobank" className='w-[100%]' />
    </div>
    <ul className='list-none md:flex hidden justify-center items-center space-x-8'>
      {
        links.map((link, index) => <li key={index} className='capitalize  hover:text-blue-200 transition duration-300'>
          <a href={`#${link.text}`}>{link.text}</a>
        </li>)
      }
    </ul>
    <div className='relative md:hidden block'>
      <img src={isNavOpen ? close : menu} alt="menu" onClick={() => { setIsNavOpen((prev) => !prev) }} />
      {
        isNavOpen && <ul className='sidebar absolute top-8 right-0 my-2 mx-4 bg-black-gradient p-4 w-[150px] flex flex-col space-y-5 items-center rounded-xl'>
          {
            links.map((link, index) => <li key={index} className='capitalize list-none hover:text-blue-200 transition duration-300'>
              <a href={`#${link.text}`}>{link.text}</a>
            </li>)
          }
        </ul>
      }
    </div>
  </nav>
}

export default Navbar