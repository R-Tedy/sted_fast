import Image from 'next/image'
import React from 'react'

const footerData = [
  {
    title: 'Company',
    links: [
      'About Us',
      'Customers',
      'Newsroom',
      'Events'
    ]
  },
  {
    title: 'Industries',
    links: [
      'Precision Manufacturing',
      'Industrial Manufacturing',
      'High Tech & Electronics',
      'Aerospace'
    ]
  },
  {
    title: 'Products',
    links: [
      'Manufacturing Execution Systems',
      'Enterprice Resource Planning',
      'Quality Management Systems',
      'Supply Chain Planning'
    ]
  },
]

const Footer = () => {
  return (
    <footer className='-mx-4 p-4 lg:p-12 bg-[#0B0F13] flex flex-col gap-4 text-white'>
      <div className='border-b pb-5 flex flex-col lg:flex-row gap-8'>
        <div className='flex flex-col gap-4'>
          <Image
            src={'/logo.svg'}
            alt='logo'
            width={64}
            height={32}
          />
          <p className='text-sm w-full lg:w-[50%]'>
            Our solutions make production faster and cheaper. Contact us for more information.
          </p>
        </div>
        <div className='flex flex-wrap gap-8'>
          {footerData.map(({title, links}) => (
            <div 
              key={title}
              className='flex flex-col gap-4'
            >
              <h3 className='font-semibold'>
                {title}
              </h3>
              <ul className='flex flex-col gap-2'>
                {links.map((link, index) => (
                  <li key={index} className='text-sm italic cursor-pointer hover:underline'>
                    {link}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className='text-sm flex flex-col lg:flex-row justify-between'>
        <div>
          <p>
            © 2025 Stedy. All rights reserved.
          </p>
        </div>
        <div className='flex gap-2.5 flex-wrap'>
          <p className='hover:underline cursor-pointer'>
            Terms and Conditions
          </p>
          <p className='hover:underline cursor-pointer'>
            Privacy Policy
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer