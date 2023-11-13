import React, { useEffect, useState } from "react";
import axios from "axios";
import "./PostDetailsStyle.css";

function PostDetails({ match }) {
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchPostAndComments = async () => {
      try {
        const postResponse = await axios.get(
          `https://appmomentum.onrender.com/api/posts/${match.params.id}/`
        );
        const commentsResponse = await axios.get(
          `https://appmomentum.onrender.com/api/posts/${match.params.id}/comments/`
        );

        setPost(postResponse.data);
        setComments(commentsResponse.data);
      } catch (error) {
        console.error("Error fetching post and comments:", error);
      }
    };

    fetchPostAndComments();
  }, [match.params.id]);

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>

      <h2>Comments</h2>
      {comments.length > 0 ? (
        <ul>
          {comments.map((comment) => (
            <li key={comment.id}>{comment.content}</li>
          ))}
        </ul>
      ) : (
        <p>No comments yet.</p>
      )}
    </div>
  );
}

export default PostDetails;

// const PostDetails = () => {
//   const { id } = useParams(); // This is how you get the id from the URL
//   const [post, setPost] = useState({});
//   const [comments, setComments] = useState([]);

//   // Use effect to fetch the posts
//   useEffect(() => {
//     // Fetch the post details using Axios
//     axios
//       .get(`https://appmomentum.onrender.com/api/posts/${id}/`)
//       .then((response) => {
//         // Set the post details in the state
//         setPost(response.data);
//       })
//       .catch((error) => {
//         console.log(error);
//       });

//     // Fetch comments for the post
//     fetchComments(id, setComments);
//   }, [id]);

//   return (
//     <div className="post">
//       <h1>Post Details</h1>
//       {post ? (
//         <div className="post-details">
//           <h2>{post.title}</h2>
//           <p>{post.content}</p>
//           <div className="comments">
//             <h3>Comments:</h3>
//             {comments && Array.isArray(comments) && comments.length > 0 ? (
//               <ul>
//                 {comments.map((comment) => (
//                   <li key={comment.id}>{comment.content}</li>
//                 ))}
//               </ul>
//             ) : (
//               <p>No comments yet.</p>
//             )}
//           </div>
//           <CreateComment id={id} />
//         </div>
//       ) : (
//         <h1>Loading...</h1>
//       )}
//     </div>
//   );
// };

// export default PostDetails;
