import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import NavLinks from './NavLinks'
import { Button } from './ui/button'

const Navbar = () => {
  return (
    <nav className='fixed w-full max-w-[1240px]'>
      <div className='flex justify-between mx-auto px-4 py-1'>
        <Link href={'/'}>
        <Image
          src={'/logo.svg'}
          alt='logo'
          height={32}
          width={72}
          className='object-contain'
        />
      </Link>

      <NavLinks/>

      <Button className='rounded-full bg-[#142F32] text-sm flex'>
        Sign Up
      </Button>
      </div>
      
    </nav>
  )
}

export default Navbar