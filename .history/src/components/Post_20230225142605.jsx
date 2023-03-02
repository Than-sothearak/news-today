import React from 'react'

export const Post = ({post}) => {
  return (
      <div className='container mx-auto flex'>
                   <img src={post.img} />
                   <h1>{post.title}dsdsdsd</h1>
          <p>{post.desc}dsd</p>
        </div>
  )
}
