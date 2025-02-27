'use client'

import React, { useState, useEffect } from 'react'
import { blog_data } from '@/Assets/assets';

const page = ({params}) => {

  const [data, setData] = useState(null);

  const fetchBlogData = () => {
    for(let i = 0; i < blog_data.length; i++) {
      {
          if (Number(params.id) === blog_data[i].id) {
            setData(blog_data[i]);
          }
      }
    }
  };

  useEffect(() => {
    fetchBlogData();
  },[])

  return (
    <div>
      {params.id}
    </div>
  )
}

export default page
