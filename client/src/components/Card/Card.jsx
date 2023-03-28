import React from 'react'
import './Card.css'
import Post from '../Post/Post.jsx'
const Card = () => {
  return (
    <div className="borderBox">

    <Post></Post>

    </div>
  )
}
export default Card


// import React, { useEffect, useState } from 'react';
// import './Card.css';
// import Post from '../Post/Post.jsx';

// const Card = () => {
//   const [posts, setPosts] = useState([]);

//   useEffect(() => {
//     const fetchPosts = async () => {
//       try {
//         const response = await fetch('/Post');
//         const data = await response.json();
//         setPosts(data); // Set the retrieved post data in the state
//       } catch (error) {
//         console.log(error);
//       }
//     };

//     fetchPosts();
//   }, []);

//   return (
//     <>
//       {posts.map((post) => (
//         <div className="borderBox" key={post.id}>
//           <Post
//             fullName={post.fullName}
//             profileText={post.profileText}
//             comments={post.comments}
//           />
//         </div>
//       ))}
//     </>
//   );
// };

// export default Card;
