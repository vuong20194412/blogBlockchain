import { useEffect, useState } from "react";
import "./Blog.css";
import { useParams } from "react-router-dom";
// import { Url } from "../config/constants";

function Blog() {

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  return (
    <div className="singleBlog">
      <div className="singleBlogWrapper">
        <div className="singleBlogContent">
          <h1 className="singleBlogTitle">{title}</h1>
          <p className="singleBlogText">{content}</p>
        </div>
      </div>
    </div>
  );
}

export default Blog;