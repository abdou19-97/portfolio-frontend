import "./MyworkStyle.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Mywork = () => {
  const [posts, setPosts] = useState([]);

  // Fetch all posts from your Django API
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get("http://0.0.0.0:8000/api/posts/");
        setPosts(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchPosts();
  }, []);

  // Once the Button is clicked it should goes to the PostDetails page

  return (
    <div className="work-container">
      <h1 className="project-heading">Projects</h1>
      <div className="project-container">
        {posts.map((post) => (
          <div className="project-card" key={post.id}>
            <h2 className="project-title">{post.title}</h2>
            <div className="project-description">
              <p>{post.content}</p>
              <Link to={`../PostDetails/${post.id}`} className="btn">
                Read More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Mywork;
