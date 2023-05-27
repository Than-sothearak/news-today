import React, { useEffect, useState } from "react";
import { RiEditBoxLine } from "react-icons/ri";
import { MdDeleteOutline } from "react-icons/md";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/authContext";
import { useContext } from "react";
import moment from "moment";
import axios from "axios";
import { Modal, Button } from "react-bootstrap";
import { Menu } from "@headlessui/react";

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
      <Modal show={show} onHide={handleClose}>
        {" "}
        <Modal.Header
          closeButton
          className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-modal md:h-full"
          type="button"
        >
          <Modal.Title>Delete Confirmation</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="alert alert-danger ">Do you want to delete?</div>
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
         <Menu />
        </div>
      </div>
    </div>
  );
};
