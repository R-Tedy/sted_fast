import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'

const Hero = () => {
  return (
    <section className='min-h-dvh pt-16 px-2'>
      <h1 className='text-center text-4xl capitalize font-bold '>
        The future of manufacturing with <span className='text-primary'>latest technology</span>
      </h1>
      <div className='flex lg:justify-between items-center justify-center lg:w-10/12 mx-auto mt-4'>
        <div className='lg:flex items-center gap-2 hidden'>
          <div>
            <Image
              src={'/icons/arrow.svg'}
              alt='arrow'
              width={32}
              height={32}
              className='hero_icons'
            />
          </div>
          <div className='flex flex-col gap-4'>
            <Image
              src={'/icons/stars.svg'}
              alt='stars'
              width={28}
              height={28}
              className='hero_icons'
            />

            <Image
              src={'/icons/docs.svg'}
              alt='docs'
              width={24}
              height={24}
              className='hero_icons'
            />
          </div>
        </div>

        <div className='flex flex-col gap-2 items-center justify-center mt-4'>
          <p className='text-center'>
            Expert tech to elevate your manufacturing. Let&apos;s take your business further.
          </p>
          <div className='flex gap-4'>
            <Button className='text-sm rounded-full' variant='default'>
              Get started
            </Button>
            <Button className='text-sm rounded-full' variant='outline'>
              Try Demo
            </Button>
          </div>
        </div>

        <div className='hidden lg:block'>
          <Image
            src={'/icons/bar_chart.svg'}
            alt='bar_chart'
            width={26}
            height={26}
            className='hero_icons translate-x-2.5 mb-2'
          />

          <Image
            src={'/icons/water.svg'}
            alt='water'
            width={32}
            height={32}
            className='hero_icons'
          />
        </div>
      </div>

      <div className='grid grid-cols-1  lg:grid-cols-12 gap-4 md:px-0  px-5 mt-5'>
        <div className='h-72 lg:h-80 lg:col-span-2 hidden lg:block'>
          <Image
            src={'/photo_01.jpg'}
            alt='photo_01'
            width={100}
            height={250}
            className='object-cover h-full w-full rounded-2xl'
          />
        </div>


        <div className='h-72 lg:h-80 lg:col-span-8 grid gap-2 lg:grid-rows-12'>
          <div className='lg:row-span-3 gap-2 lg:my-auto'>
            <div className='flex gap-2 items-center justify-center'>
              <Image
                src={'/icons/star_rate.svg'}
                alt='star'
                width={24}
                height={24}
                className='rounded-full bg-primary p-0.5'
              />
              <p className='font-semibold'>5.0</p>
            </div>
            <p className='text-gray-500 text-center'>From 80+ <span className='text-black underline font-bold'>reviews</span></p>
          </div>

          <div className='lg:grid-cols-12 grid-cols-1 grid gap-4 lg:row-span-9'>
            <div className='h-72 lg:h-full lg:col-span-3 rounded-2xl bg-primary flex items-center justify-center flex-col gap-2 text-white'>
              <h3 className='text-2xl font-semibold'>100+</h3>
              <p className='text-center px-6'>Our Estimated Clients and Partners.</p>
            </div>

            <div className='h-72 lg:h-full lg:col-span-6 flex items-end'>
              <div className='h-full lg:h-[80%] w-full rounded-2xl border py-4 px-6 flex flex-col justify-between'>
                <Image
                  src={'/icons/construction.svg'}
                  alt='construction'
                  height={32}
                  width={32}
                  className='bg-primary rounded-md'
                />
                <p>
                  Total Projects
                </p>
                <h3 className='text-2xl font-semibold'>
                  2134+
                </h3>
                <p>
                  An increase of 125 this month.
                </p>
              </div>
            </div>
            <div className='h-72 lg:h-full lg:col-span-3 flex items-center justify-center flex-col gap-2 rounded-2xl bg-[#e3ffcc]'>
              <h3 className='text-2xl font-semibold'>2+</h3>
              <p className='text-center px-6'>Years of dedicated service.</p>
            </div>
          </div>
        </div>
        <div className='h-72 lg:h-80 lg:col-span-2 hidden lg:block'>
          <Image
            src={'/photo_02.jpg'}
            alt='photo_02'
            width={100}
            height={250}
            className='object-cover h-full w-full rounded-2xl'
          />
        </div>
      </div>
    </section>
  )
}

export default Hero