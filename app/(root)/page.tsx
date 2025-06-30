import Benefits from '@/components/Benefits'
import Companies from '@/components/Companies'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Idea from '@/components/Idea'
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
      <Idea/>
      <Footer/>
    </section>
  )
}

export default page