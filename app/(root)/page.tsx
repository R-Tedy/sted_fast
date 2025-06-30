import Benefits from '@/components/Benefits'
import Companies from '@/components/Companies'
import Hero from '@/components/Hero'
import Prices from '@/components/Prices'
import Services from '@/components/Services'
import React from 'react'

const page = () => {
  return (
    <section className='mx-auto px-4'>
      <Hero/>
      <Services/>
      <Benefits/>
      <Prices/>
      <Companies/>
    </section>
  )
}

export default page