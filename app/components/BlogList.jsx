'use client'
import React, { useEffect, useState } from 'react'
import BlogItem from './BlogItem'
import axios from 'axios'

const BlogList = () => {
  const [blogs, setBlogs] = useState([])

  const fetchBlogs = async () => {
    const response = await axios.get('/api/blog')
    setBlogs(response.data.blogs)
  }

  useEffect(() => {
    fetchBlogs()
  }, [])

  return (
    <div className='flex-1 py-5 px-5 sm:py-12 sm:px-16'>
      <div className='flex flex-wrap gap-8 justify-center'>
        {blogs.map((item, index) => {
          return (
            <BlogItem
              key={index}
              mongoId={item._id}
              title={item.title}
              desc={item.description}
              author={item.author}
              authorImg={item.authorImg}
              date={item.date}
              coverImg={item.image}
              category={item.category}
            />
          )
        })}
      </div>
    </div>
  )
}

export default BlogList
