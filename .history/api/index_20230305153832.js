import express from "express";
import path from "path";
import postRoutes from "./routes/posts.js";
import userRoutes from "./routes/users.js";
import authRoutes from "./routes/auth.js";
import { db } from "./db.js";
const PORT = 8080;
const app = express()

app.use(express.json())

app.get("/api/v1", (req, res) => {
  res.json({
    project: "React and Express Boilerplate",
    from: "Vanaldito",
  });
});
app.get("/*", (_req, res) => {
    res.send("hello !!!!");
})

app.get("/api/v1", (req, res)=>{
  
})
app.use("/api/auth", authRoutes)
app.use("/api/posts", postRoutes)
app.use("/api/users", userRoutes)



db.connect((err)=> {
    if(err){
        throw(err)
    } else {
        console.log(`Connected! to port: ${PORT}`)
    }
})

app.listen(PORT, () => console.log(`start listening on port : ${PORT}`));