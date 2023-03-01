import React from 'react'

export const Post = ({post}) => {
  return (
    <div>
          <h1>{post.title}</h1>
          <p>{post.desc}</p>
          <img src={post.img} />
        </div>
  )
}
