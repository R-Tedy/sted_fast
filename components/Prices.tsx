import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const priceDetails = [
  {
    type: 'Starter',
    intro: 'This package offers basic features you need to get started.',
    cost: 39,
    link: '/',
    features: [
      'Production of up to 10,000 units per month',
      '24/7 technical support',
      'Access the production dashboard',
      'Initial setup guide'
    ]
  },
  {
    type: 'Enterprise',
    intro: 'This package provides full access to all premium features.',
    cost: 99,
    link: '/',
    features: [
      'Unlimited production limits',
      'Dedicated account manager',
      'Tailored manufacturing solutions',
      'Productive production and automation'
    ]
  },
]

const Prices = () => {
  return (
    <section className='p-4 -mx-4 bg-[#0B0F13] text-white py-8'>
      <h2 className='text-center text-3xl font-bold py-2 capitalize'>
        Tailored plans for your <br /> manufacturing scale
      </h2>
      <p className='text-center py-2'>
        Flexible pricing for any business size.
      </p>
      <div className='w-full flex flex-col lg:flex-row gap-4 pt-8 justify-center'>
        {priceDetails.map(({type, intro, cost, link, features}) => (
          <div
            key={type}
            className='w-full lg:w-80 py-4 px-8 lg:px-5 bg-[#777c90]/10 rounded-2xl flex flex-col gap-5'
          >
            <h3 className='font-semibold text-lg'>
              {type}
            </h3>
            <p className='text-sm'>
              {intro}
            </p>
            <p>
              <span className='text-2xl font-bold'>${cost}</span>/month
            </p>
            <Link
              href={link}
              className='w-full rounded-full border border-[#e3ffcc] py-2 text-center text-sm font-[400] hover:bg-white hover:text-[#0B0F13]'
            >
              Get Started
            </Link>
            <h4 className='text-center py-2'>
              ------ Features ------
            </h4>
            <ul>
              {features.map((feature, index) => (
                <li
                  key={index}
                  className='flex gap-2 items-center py-2'
                > 
                <div>
                  <Image
                    src={'/icons/check_small.svg'}
                    alt='check'
                    width={12}
                    height={12}
                    className='rounded-full border border-white'
                  />
                </div>
                <p className='text-sm'>
                  {feature}
                </p>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Prices