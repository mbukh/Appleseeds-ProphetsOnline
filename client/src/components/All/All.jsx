import React, { useEffect, useState } from "react";
// import "./App.css";
import './All.css'
function All() {
  const [data, setData] = useState([]);

  const authorUrl = "http://localhost:5000/Author";
  const postUrl = "http://localhost:5000/Post";
  const commentUrl = "http://localhost:5000/Comment";

  useEffect(() => {
    const fetchData = async () => {
      const authorResponse = await fetch(authorUrl);
      const postResponse = await fetch(postUrl);
      const commentResponse = await fetch(commentUrl);

      const authorData = await authorResponse.json();
      const postData = await postResponse.json();
      const commentData = await commentResponse.json();

      const authorNameAndPicture = authorData.author.map((author) => {
        return {
          id: author.id,
          name: author.name,
          picture: author.picture,
        };
      });

      const postDataWithDateAndCounts = postData.post.map((post) => {
        return {
          id: post.id,
          date: post.date,
          likesCount: post.likesCount,
          commentsCount: post.commentsCount,
        };
      });

      const commentText = commentData.comment.map((comment) => {
        return {
          id: comment.id,
          text: comment.text,
        };
      });

      const combinedData = postDataWithDateAndCounts.map((post) => {
        const author = authorNameAndPicture.find(
          (author) => author.id === post.authorId
        );
        const comments = commentText.filter(
          (comment) => comment.postId === post.id
        );

        return {
          id: post.id,
          author: author.name,
          picture: author.picture,
          date: post.date,
          likesCount: post.likesCount,
          commentsCount: post.commentsCount,
          comments: comments.map((comment) => comment.text),
        };
      });

      setData(combinedData);
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      {data.map((post) => (
        <div className="card" key={post.id}>
          <div className="card-header">
            <img src={post.picture} alt={post.author} />
            <div>
            <h2>{post.author}</h2>
            <p>{post.date}</p>
            </div>
          </div>
          <ul className="textCard">
              {post.comments.map((comment, index) => (
                <li key={index}>{comment}</li>
              ))}
            </ul>
          <div className="card-body">
         
            <p>Likes: {post.likesCount}</p>
            <p>Comments: {post.commentsCount}</p>
            
          </div>
        </div>
      ))}
    </div>
  );
}

export default All;
