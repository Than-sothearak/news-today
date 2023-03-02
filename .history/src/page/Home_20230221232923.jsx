import React from 'react'
import { posts } from "../../data";

export const Home = () => {
  console.log(posts)
  return (
    <div>
      {posts.map(post=>(
        <div>
          <h1>{post.title}</h1>
          <p>{post.desc}</p>
          <img href={post.img} />
        </div>
      ))}
    </div>
  )
}
