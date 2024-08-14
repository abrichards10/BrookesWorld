// // src/components/Posts.js
// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const Posts = () => {
//   const [posts, setPosts] = useState([]);

//   useEffect(() => {
//     const fetchPosts = async () => {
//       try {
//         const response = await axios.get("http://localhost:3001/posts");
//         setPosts(response.data);
//       } catch (error) {
//         console.error("Error fetching posts:", error);
//       }
//     };

//     fetchPosts();
//   }, []);

//   return (
//     <div>
//       <h1>Posts</h1>
//       <ul>
//         {posts.map((post) => (
//           <li key={post._id}>
//             <h2>{post.title}</h2>
//             <p>{post.content}</p>
//             <p>
//               <strong>Author:</strong> {post.author}
//             </p>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Posts;
