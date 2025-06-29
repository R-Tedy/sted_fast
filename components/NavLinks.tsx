'use client'

import { navLinks } from '@/constants'
import { cn } from '@/lib/utils'
import { usePathname } from 'next/navigation'
import React from 'react'

const NavLinks = () => {
  const pathname = usePathname()

  return (
    <ul className='flex items-center gap-4'>
      {navLinks.map(({link, label}) => (
        <li 
          key={label}
        >
          <a 
            href={link}
             className={cn(
            'text-sm',
            pathname === link && 'font-bold' 
          )}
          >
            {label}
          </a>
        </li>
      ))}
    </ul>
  )
}

export default NavLinks