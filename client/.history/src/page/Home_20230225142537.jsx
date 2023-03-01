import React from 'react'
import { posts } from "../../data";
import { Post } from "../components/Post"
import { HeroBanner } from '../components/HeroBanner';
export const Home = () => {
  return (
    <div>
      <div>
        <HeroBanner />
      </div>
      <div className='container mx-auto flex'>
      {posts.map(post=>(
        <Post key={post.id} post={post}/>
      ))}
    </div>
    </div>
    
  )
}
