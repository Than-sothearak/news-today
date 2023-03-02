import React from "react";
import { RiEditBoxLine } from "react-icons/ri";
import { MdDeleteOutline } from "react-icons/md";
import { posts } from "../../data";
import { useParams } from 'react-router-dom';
export const Single = () => {
  const { id } = useParams();
  const post = posts[id]
  console.log(post);
  return (
    <div className="py-5 container mx-auto flex flex-wrap justify-between">
      <div className="container w-4/5 sm:1/2 md:w-3/7 lg:w-3/5 xl:w-3/4 ml-10 md:ml-5 xl:ml-5">
        <div className="w-full h-80">
          <img
            className="object-top object-cover w-full h-full"
            src={post.img}
          />
        </div>
        <div className="flex flex-wrap pt-5">
          <div>
            <img
              className="w-10 h-10 rounded-full"
              src="data:image/jpeg;base64,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"
              alt="Rounded avatar"
            />
          </div>
          <div className="px-4 text-start">
            <h3 className="font-bold">The Rock</h3>
            <h6>Posted 2 day ago</h6>
          </div>
          <div className="flex text-xl gap-1 cursor-pointer">
            <RiEditBoxLine />
            <MdDeleteOutline />
          </div>
          <div className="text-start">
            <h1 className="font-bold text-3xl py-5">{post.title}</h1>
            <p>
              {post.desc}
            </p>
          </div>
        </div>
      </div>
      <div className="mx-10 sm:ml-2 md:mx-0">
        <h1 className="font-bold text-xl">Other posts you may like</h1>
        {posts.map(post=> (
          <div key={post.id} className="w-full md:w-60 lg:w-72 py-5">
            <img src={post.img} className="object-cover w-full h-full" />
            <h3 className="text-start text-2xl font-bold">{post.title}</h3>
            <button className="float-left my-5 border-blue-500 bg-transparent text-blue-600">Read more</button>
          </div>
        ))}
      </div>
    </div>
  );
};
