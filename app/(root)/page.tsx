import Benefits from '@/components/Benefits'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import React from 'react'

const page = () => {
  return (
    <section className='mx-auto px-4'>
      <Hero/>
      <Services/>
      <Benefits/>
    </section>
  )
}

export default page