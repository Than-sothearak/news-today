import React from 'react'

export const Post = ({post}) => {
  return (
    <div>
          <h1>{post.title}dsd</h1>
          <p>{post.desc}dsd</p>
          <img src={post.img} />
        </div>
  )
}
