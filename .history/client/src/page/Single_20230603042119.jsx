import React, { useEffect, useState } from "react";
import { RiEditBoxLine } from "react-icons/ri";
import { MdDeleteOutline } from "react-icons/md";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { AuthContext } from "../context/authContext";
import { useContext } from "react";
import { Menu } from "../components/Menu";
import moment from "moment";
import axios from "axios";


export const Single = () => {
  const [post, setPost] = useState({});
  const location = useLocation();
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const postId = location.pathname.split("/")[2];

  const { currentUser, logout } = useContext(AuthContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/api/posts/${postId}`);
        setPost(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [postId]);

  const handleDelete = async () => {
    try {
      await axios.delete(`/api/posts/${postId}`);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
    setShow(true);
  };
  const handleClose = () => {
    setShow(false);
  };
  const checkUsername = () => {
    if (currentUser.username === post.username) {
      return (
        <div className="flex text-xl gap-1 cursor-pointer">
          <Link to={`/write?edit=2`} state={post}> 
          <RiEditBoxLine />
          </Link>
          <MdDeleteOutline onClick={handleDelete} />
        </div>
      );
    } else {
      return <div></div>;
    }
  };
  
  const htmlString = "<strong>Beware of the leopard</strong><br><h1>sdsdsd</h1>";
  const doc3 = new DOMParser().parseFromString(htmlString, "text/html");

 console.log(doc3.body.text)
    
  const getText = (htmlString) =>{
    const doc = new DOMParser().parseFromString(htmlString, "text/html");
    return doc.body.textContent
  }

  return (
    <div className="px-10 container mx-auto flex flex-col justify-center">
      <div className="">
      <div id="divA">This is <span>some</span> text!</div>
        <div
          className="h-full flex justify-center
         w-full"
        >
          <img
            className="object-center object-cover w-full h-full"
            src={`../upload/${post?.img}`}
          />
        </div>
        <div className="flex flex-wrap pt-5">
          <div>
            {post.userImg ? (
              <img
                className="w-10 h-10 rounded-full"
                src={post.userImg}
                alt="Rounded avatar"
              />
            ) : (
              <img
                className="w-10 h-10 rounded-full"
                src="https://static.vecteezy.com/system/resources/previews/008/442/086/original/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg"
                alt="Rounded avatar"
              />
            )}
          </div>
          <div className="px-4 text-start">
            <h3 className="font-bold">{post.username}</h3>
            <h6>Posted {moment(post.date).fromNow()}</h6>
          </div>

          {currentUser && <div>{checkUsername()}</div>}
          <div className="text-start">
            <h1 className="font-bold text-3xl py-5">{post.title}</h1>
            <p>{getText(post.desc)}</p>
            {console.log(getText(post.desc))}
          </div>
        </div>
      </div>
      <Menu cat={post.cat} />
    </div>
  );
};
