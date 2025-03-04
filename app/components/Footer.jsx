import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <div className='flex justify-around flex-col gap-2 sm:gap-0 sm:flex-row bg-black py-5 items-center'>
      <Image src="/assets/logo-light.png" alt='Logo' width={120} height={40} />
      <p className='text-sm text-white'>All right reserved. Copyright @blogger</p>
        <div className='flex'>
            <Image src="/assets/facebook.png" alt='Facebook' width={40} height={40} />
            <Image src="/assets/twitter.png" alt='Twitter' width={40} height={40} />
            <Image src="/assets/google-plus.png" alt='Google Plus' width={40} height={40} />
        </div>
    </div>
  )
}

export default Footer
