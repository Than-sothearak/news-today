import React, { useEffect, useState } from "react";
import { RiEditBoxLine } from "react-icons/ri";
import { MdDeleteOutline } from "react-icons/md";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/authContext";
import { useContext } from "react";
import { posts } from "../../data.js";
import moment from "moment";
import axios from "axios";
import { Modal, Button } from "react-bootstrap";

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
    // try {
    //   await axios.delete(`/api/posts/${postId}`);
    //   navigate("/");
    // } catch (err) {
    //   console.log(err);
    // }
    setShow(true);
  };
  const handleClose = () => {
    setShow(false);
  };
  const checkUsername = () => {
    if (currentUser.username === post.username) {
      return (
        <div className="flex text-xl gap-1 cursor-pointer">
          <RiEditBoxLine />
          <MdDeleteOutline onClick={handleDelete} />
        </div>
      );
    } else {
      return <div></div>;
    }
  };

  return (
    <div className="px-10 container mx-auto flex flex-col justify-center">
      <div className="">
        <Modal 
        show={show} 
        onHide={handleClose}
        className="flex justify-center m-5">
          <Modal.Header closeButton className="block text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800" type="button">
            <Modal.Title>Delete Confirmation</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="alert alert-danger">Do you want to delete?</div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="default" onClick={handleClose}>
              Cancel
            </Button>
            <Button variant="danger" onClick={() => handleClose}>
              Delete
            </Button>
          </Modal.Footer>
        </Modal>
      </div>

      <div className="">
        <div
          className="h-full flex justify-center
         w-full"
        >
          <img
            className="object-center object-cover w-full h-full"
            src={post?.img}
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
            <p>{post.desc}</p>
          </div>
        </div>
      </div>
      <div className="text-start mt-16">
        <h1 className="font-bold text-xl">Other posts you may like</h1>
        <div className="flex flex-wrap gap-5">
          {" "}
          {posts.map((post) => (
            <div key={post.id} className="w-44 h-44 py-5">
              <img src={post.img} className="object-cover w-full h-full" />
              <h3 className="text-start text-md font-bold overflow-hidden whitespace-nowrap text-ellipsis">
                {post.title}
              </h3>
              {/* <button className="float-left my-5 border-blue-500 bg-transparent text-blue-600">
                Read more
              </button> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
