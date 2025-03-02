import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const BlogItem = ({mongoId,title,desc,author,authorImg,date,coverImg}) => {

  return (
    <div className='w-full sm:w-[300px] h-[400px] rounded-lg shadow-lg overflow-hidden'>
        <div className='w-full h-[200px] relative'>
            <Image src={coverImg} fill className='object-cover' alt='blog'/>
        </div>
        <p className='ml-5 mt-5 px-1 inline-block bg-black text-white text-sm'>{/* category */}</p>
        <div className="p-5">
            <h5 className='mb-2 text-lg font-medium tracking-tight text-gray-900'>{title}</h5>
            <p className='mb-3 text-sm tracking-tight text-gray-700' dangerouslySetInnerHTML={{"__html":desc.slice(0,120)}}></p>
            <Link href={`/blogs/${/* id */}`} className='inline-flex items-center py-2 font-semibold text-center'>
                Read more <Image src={'/* assets.arrow */'} className='ml-2' alt='' width={12} />
            </Link>
        </div>
    </div>
  )
}

export default BlogItem
