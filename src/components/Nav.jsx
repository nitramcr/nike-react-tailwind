import { headerLogo } from '../assets/images'
import { navLinks } from '../constants'
import { useState } from 'react'
import {
  AiOutlineClose as CloseIcon,
  AiOutlineMenu as MenuIcon,
} from 'react-icons/ai'

export function Nav() {
  const [nav, setNav] = useState(false)

  const handleNav = () => {
    setNav(!nav)
  }

  return (
    <header className='padding-x py-8 absolute z-20 w-full'>
      <nav className='flex justify-between items-center max-container'>
        <a href='/'>
          <img src={headerLogo} alt='Logo' width={130} height={29} />
        </a>

        <ul className='flex flex-1 justify-center items-center gap-16 max-lg:hidden'>
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className='font-montserrat leading-normal text-lg text-slate-gray'
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div onClick={handleNav} className='block lg:hidden'>
          {nav ? <CloseIcon size={24} /> : <MenuIcon size={24} />}
        </div>

        <div
          className={
            nav
              ? 'fixed pt-[14px] left-0 top-0 w-[75%] h-full bg-black ease-in-out duration-300'
              : 'fixed left-[-100%]'
          }
        >
          <ul className='lg:hidden p-6'>
            {navLinks.map((item) => (
              <li
                key={item.label}
                className='my-[1rem] border-b-2 border-b-coral-red'
              >
                <a
                  href={item.href}
                  className='font-montserrat leading-normal text-xl text-coral-red font-medium'
                  onClick={handleNav}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  )
}
