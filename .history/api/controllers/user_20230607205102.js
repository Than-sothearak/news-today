import { db } from "../db.js";
import jwt from "jsonwebtoken";
export const addUser = (req, res)=>{
    res.json("From controller User");
}

export const getPost = (req, res) => {
    const q =
      "SELECT p.id, `username`, `title`, `desc`, p.img, u.img AS userImg, `link`, `cat`,`date` FROM users u JOIN posts p ON u.id = p.uid WHERE p.id = ? ";
  
    db.query(q, [req.params.id], (err, data) => {
      if (err) return res.status(500).json(err);
  
      return res.status(200).json(data[0]);
    });
  };