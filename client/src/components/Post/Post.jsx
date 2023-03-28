import React from 'react'

 const Post = () => {
  return (
    <div>Post</div>
  )
}
export default Post


// import React from 'react';

// const Post = ({ fullName, profileText, comments }) => {
//   return (
//     <div>
//       <h3>{fullName}</h3>
//       <p>{profileText}</p>
//       <ul>
//         {comments.map((comment, index) => (
//           <li key={index}>{comment}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Post;



// // Create a new post
// const createPost = async (postData) => {
//   try {
//     const response = await fetch('/Post', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(postData)
//     });
//     const data = await response.json();
//     console.log(data); // handle response data
//   } catch (error) {
//     console.log(error); // handle error
//   }
// };

// // Get all posts
// const getPosts = async () => {
//   try {
//     const response = await fetch('/Post');
//     const data = await response.json();
//     console.log(data); // handle response data
//   } catch (error) {
//     console.log(error); // handle error
//   }
// };

// // Get a single post by ID
// const getPostById = async (postId) => {
//   try {
//     const response = await fetch(`/Post/${postId}`);
//     const data = await response.json();
//     console.log(data); // handle response data
//   } catch (error) {
//     console.log(error); // handle error
//   }
// };

// // Update a post by ID
// const updatePost = async (postId, postData) => {
//   try {
//     const response = await fetch(`/Post/${postId}`, {
//       method: 'PUT',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(postData)
//     });
//     const data = await response.json();
//     console.log(data); // handle response data
//   } catch (error) {
//     console.log(error); // handle error
//   }
// };

// // Delete a post by ID
// const deletePost = async (postId) => {
//   try {
//     const response = await fetch(`/Post/${postId}`, {
//       method: 'DELETE'
//     });
//     const data = await response.json();
//     console.log(data); // handle response data
//   } catch (error) {
//     console.log(error); // handle error
//   }
// };
