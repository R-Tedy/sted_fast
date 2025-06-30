import Image from 'next/image'
import React from 'react'

const projectStats = [
  {
    status: 'Finished',
    percentage: 24,
  },
  {
    status: 'In Progress',
    percentage: 32,
  },
  {
    status: 'Rejected',
    percentage: 11,
  },
]

const benefitDetails = [
  {
    title: 'Boosting Qualiy with tech',
    details: 'With advanced technology, we will help you achieve top product quality. Discover how we can enhace your standards.'
  },
  {
    title: 'Optimization production process',
    details: 'Boost factory efficiency and productivity with our innovative solutions. See how the latest technology can maximize your output.'
  },
  {
    title: 'AI-Driven production',
    details: 'Leverage the power of AI to transform your manufacturing processes, achieving faster and more efficient results.'
  },
]

const Benefits = () => {
  return (
    <section className='flex gap-4 flex-col-reverse lg:flex-row px-4 py-8'>
      <div className='flex-1 flex justify-center items-center px-4 py-5 lg:py-12 rounded-xl bg-gray-100'>
        <div className='rounded-xl p-4 w-full lg:w-[75%] bg-white border'>
          <h3 className='font-bold text-gray-400 px-4'>Total Projects</h3>
          <p className='text-2xl py-1 px-4'>2314</p>
          {projectStats.map((project) => (
            <div
              key={project.status}
              className='flex w-full justify-between p-4 border-b'
            >
              <p className='text-gray-400'>
                {project.status}
              </p>
              <p className='font-bold'>
                {project.percentage}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className='flex-1 p-4'>
        <h2 className='text-3xl capitalize font-bold'>Key benefits of our system for your business efficiency.</h2>
        <p className='py-2 text-gray-400'>
          Our systems boost productivity, cut costs and drive business growth.
        </p>
        {benefitDetails.map((benefit) => (
          <div
            key={benefit.title}
            className='flex gap-2'
          >
            <div className=' py-3'>
              <Image
                src={'/icons/check_small.svg'}
                alt='check'
                width={16}
                height={16}
                className=' border rounded-full border-primary bg-primary'
              />
            </div>
            <div>
              <h3 className='font-bold text-lg'>
                {benefit.title}
              </h3>
              <p className='text-gray-400 lg:w-[90%]'>
                {benefit.details}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Benefits