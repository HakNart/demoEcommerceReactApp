import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from "../../assets/images/logo.png"
import { Search } from '../Sections/Search'

export function Header() {
  
  const [searchSection, setSearchSection] = useState(false);

  // Setting: mode (*implement later)

  // Search setting

  // Cart 
  return (
    <header>
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-4 md:px-6 py-2.5">
          <Link to='/' className="flex items-center">
            <img src={Logo} className="h-6 mr-3 sm:h-9" alt="KT Logo" />
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">KT</span>
          </Link>
          <div className="flex items-center">
            <span className="cursor-pointer text-xl text-gray-800 dark:text-white mr-5 bi bi-gear"></span>
            <span onClick={() => setSearchSection(!searchSection)} className="cursor-pointer text-xl text-gray-800 dark:text-white mr-5 bi bi-search"></span>
            <Link to='/cart' className='text-gray-700 dark:text-white mr-5'>
              <span className='text-2xl bi bi-cart4 relative'>
                <span className='text-white text-sm absolute -top-1 left-2.5 bg-rose-500 px-1 rounded-full'>0</span>
              </span>

            </Link>
            
            <span className="cursor-pointer text-xl text-gray-800 dark:text-white mr-5 bi bi-person-circle"></span>
          </div>
        </div>
      </nav>
      {searchSection && <Search setSearchSection={setSearchSection}/>} 
    </header>
  )
}
