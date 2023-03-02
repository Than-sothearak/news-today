import React from 'react'
import { posts } from "../../data";
import { Post } from "../components/Post"
export const Home = () => {
  return (
    <div>
      {posts.map(post=>(
        <Post post={post}/>
      ))}
    </div>
  )
}
