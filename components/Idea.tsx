import React from 'react'
import { Button } from './ui/button'

const Idea = () => {
  return (
    <section className='-mx-4 px-4 py-12 lg:p-12 flex flex-col gap-5 items-center justify-center bg-primary text-white'>
      <h2 className='font-bold text-center text-3xl '>
        From idea to production in days
      </h2>
      <p className='text-center w-full lg:w-80%'>
        Accelerate your production with our technology. Reduce downtown and optimize costs. Get a special offer now!
      </p>
      <Button className='bg-[#e3ffcc] text-primary hover:text-white font-bold rounded-full cursor-pointer hover:border'>
        Work with Us
      </Button>
    </section>
  )
}

export default Idea