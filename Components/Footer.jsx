import Image from 'next/image'
import React from 'react'
import { assets } from '@/Assets/assets'

const Footer = () => {
  return (
    <div className="flex justify-around flex-col gap-2 sm:gap-0 sm:flex-row bg-black py-5 items-center  ">
    <Image src={assets.logo_light} alt="logo" width={120} />
    <p className="text-sm text-white">All Rights Reserved. &copy; Blogger 2025 </p>
      <div className="flex">
        <Image src={assets.facebook_icon} width={40} alt="facebook" />
        <Image src={assets.googleplus_icon} width={40} alt="googleplus" />
        <Image src={assets.twitter_icon} width={40} alt="twitter" />
      </div>
    </div>
  )
}

export default Footer
