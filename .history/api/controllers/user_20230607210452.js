import { db } from "../db.js";
import jwt from "jsonwebtoken";


export const getUser = (req, res) => {
    const q =
      "SELECT `username`,`email`, `img`, `link`, FROM users WHERE username = ? ";
  
    db.query(q, [req.params.id], (err, data) => {
      if (err) return res.status(500).json(err);
  
      return res.status(200).json(data[0]);
    });
  };