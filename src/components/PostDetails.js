/**
 * I had some challenges to have this pages working.
 * I later figured out that the problem was that I didn't route
 * the page in the App.js file since all the pages must be routed
 * in the App.js file.
 */

import axios from "axios";
import "./PostDetailsStyle.css";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// Time to create a comment for the post
function CreateComment({ id }) {
  const [comment, setComment] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `https://appmomentum.onrender.com/api/posts/${id}/comments/`,
        {
          content: comment,
          post: id,
        }
      );

      setComment("");
    } catch (error) {
      console.error("Error creating comment:", error);
    }
  };

  // Return the form for creating a comment
  return (
    <form onSubmit={handleSubmit}>
      <textarea
        placeholder="Add a comment"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      <button type="submit">Add Comment</button>
    </form>
  );
}

// Function to get comments for the post
async function fetchComments(id, setComments) {
  try {
    const response = await axios.get(
      `https://appmomentum.onrender.com/api/posts/${id}/comments/`
    );
    setComments(response.data);
  } catch (error) {
    console.error("Error getting comments:", error);
  }
}

const PostDetails = () => {
  const { id } = useParams(); // This is how you get the id from the URL
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);

  // Use effect to fetch the posts
  useEffect(() => {
    console.log("Posting details...");
    // Fetch the post details using Axios
    axios
      .get(`https://appmomentum.onrender.com/api/posts/${id}/`)
      .then((response) => {
        // Set the post details in the state
        setPost(response.data);
        console.log("Response data:", response.data);
      })
      .catch((error) => {
        console.log(error);
      });

    // Fetch comments for the post
    fetchComments(id, setComments);
  }, [id]);

  return (
    <div className="post">
      {/* <h1>Post Details</h1> */}
      {post ? (
        <div className="post-details">
          <h2>{post.title}</h2>
          <p>{post.content}</p>
          <div className="comments">
            <h3>Comments:</h3>
            {comments && Array.isArray(comments) && comments.length > 0 ? (
              <ul>
                {comments.map((comment) => (
                  <li key={comment.id}>{comment.content}</li>
                ))}
              </ul>
            ) : (
              <p>No comments yet.</p>
            )}
          </div>
          <CreateComment id={id} />
        </div>
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
};

export default PostDetails;
