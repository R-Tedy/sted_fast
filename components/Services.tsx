import { servicesData } from '@/constants'
import Image from 'next/image'
import React from 'react'

const Services = () => {
  return (
    <section className='bg-primary -mx-4 mt-8 lg:mt-0 text-white p-4' id='services'>
      <h2 className='text-center capitalize text-2xl mt-4 pt-8 px-4'>Efficient and integrated <br /> manufacturing services</h2>
      <p className='py-4 text-center'>Simplify operations with our efficient, quality-focused services.</p>

      <div className='w-full grid gap-4 grid-cols-1 md:grid-cols-12 lg:px-12'>
        {servicesData.map(({icon, title, details})=> (
          <div
            key={title}
            className='p-4 h-72 rounded-xl bg-white/10 md:col-span-6 lg:col-span-4 flex flex-col justify-between'
          >
            <div className='flex justify-between items-center'>
              <Image
                src={icon}
                alt={title}
                height={32}
                width={32}
              />
              <Image
                src={'/icons/arrow.svg'}
                alt='arrow'
                height={32}
                width={32}
                className='cursor-pointer'
              />
            </div>

            <div>
              <h3 className='font-bold text-xl capitalize'>
                {title}
              </h3>
              <p>
                {details}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Services