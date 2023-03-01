import React ,{useState} from "react";

export const Post = ({ post }) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const date = currentDate.getFullYear;
  return (
    <div className="container mx-auto flex m-10">
      <div className="container mx-auto bg-cover">
        <img src={post.img} className="bg-auto" />
      </div>
      <div>
        
        <h1>{post.title}</h1>
        <p>{post.desc}</p>
      </div>
    </div>
  );
};
