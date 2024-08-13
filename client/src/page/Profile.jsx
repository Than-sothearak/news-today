import { AuthContext } from "../context/authContext";
import React, { useState, useEffect } from "react";
import { Link,} from "react-router-dom";
import { useContext } from "react";
import axios from "axios";


export default function EditProfile() {
  const { currentUser } = useContext(AuthContext);
  const [user, setUser] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/api/user/${currentUser?.id}`);
        setUser(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [currentUser?.id]);

  return (
    <div className="container mx-auto h-screen px-4 2xl:px-72 xl:px-46 lg:px-40 md:px-20 sm:px-4 mt-10">
      {" "}
      <div className="flex gap-x-4">
        <img
          className="h-64 w-64 flex-none bg-gray-50"
          src={`../upload/${user?.img}`}
          alt=""
        />

        <div className="min-w-0 flex-auto">
          <p> {user?.username}</p>

          <p>{user?.email}</p>
          <p>{user?.link}</p>
        </div>
        <Link to={`/edit?id=1`} state={user}>
          <button className="bg-blue-500 text-white">Edit</button>
        </Link>
      </div>
    </div>
  );
}
