import React from 'react'
import { Button } from './ui/button'
import Image from 'next/image'

const Companies = () => {
  return (
    <section className='p-4 flex flex-col gap-4 lg:flex-row lg:items-center'>
      <div className='p-4 flex-1'>
        <h2 className='py-2 text-3xl font-bold'>
          Empowering top companies with seamless intergrations
        </h2>
        <p className='py-2'>
          Experience seamless connections with our innovative solutions, designed to effortlessly intergrate with your existing stystems, enhance productivity and drive your business towards greater success.
        </p>
        <Button className='rounded-full bg-[#e3ffcc] text-primary hover:text-white font-semibold my-2'>
          Work with Us
        </Button>
      </div>
      <div className='p-4 flex-1'>
        <Image
          src={'/photo_01.jpg'}
          alt='image'
          width={250}
          height={200}
          className='object-cover w-full rounded-2xl h-72 lg:h-80'
        />
      </div>
    </section>
  )
}

export default Companies