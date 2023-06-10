import { db } from "../db.js";
import jwt from "jsonwebtoken";


export const getUser = (req, res) => {
    const q =
      "SELECT username,email, img, link FROM users";
  
    db.query(q, [req.params.id], (err, data) => {
      if (err) return res.status(500).json(err);
  
      return res.status(200).json(data[0]);
    });
  };

  export const updateUser = (req, res) => {
    const token = req.cookies.access_token;
    if (!token) return res.status(401).json("Not authenticated!");
  
    jwt.verify(token, "jwtkey", (err, userInfo) => {
      if (err) return res.status(403).json("Token is not valid!");
  
      const postId = req.params.id;
      const q =
        "UPDATE posts SET `username`=?,`email`=?,`img`=?, WHERE `id` = ? AND `username` = ?";
  
      const values = [req.body.username, req.body.email, req.body.img,];
  
      db.query(q, [...values, postId, userInfo.id], (err, data) => {
        if (err) return res.status(500).json(err);
        return res.json("Post has been updated.");
      });
    });
  };
  