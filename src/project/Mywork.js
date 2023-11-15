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
        const response = await axios.get(
          "https://appmomentum.onrender.com/api/posts/"
        );
        setPosts(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchPosts();
  }, []);

  return (
    <div className="work-container">
      <h1 className="project-heading">Projects</h1>
      <div className="project-container">
        {posts.map((post) => (
          <Link to={`/PostDetails/${post.id}`} key={post.id}>
            <div className="project-card">
              <h2 className="project-title">{post.title}</h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Mywork;
