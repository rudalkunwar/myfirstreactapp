import React, { useEffect, useState } from "react";
import  axios  from 'axios';
export default function App() {
  const [posts, setPosts] = useState([]);
  const endpoint = "https://jsonplaceholder.typicode.com/posts";
  const getPosts = () => {
    axios.get(endpoint)
      .then((respond) => {
        setPosts(respond.data);
        console.log(respond.data);
        console.log(posts)
      })
      .catch((e) => console.log("cannot load posts"));
  };
  useEffect(() => {
    getPosts();
    console.log(posts);
  }, []);

  return (
    <div className="h-full">
      <div className="grid grid-cols-5 gap-2">
        <div className="bg-green-200 p-5 text-center">
          <h1>User ID</h1>
          <p>Title</p>
          <p>Body</p>
        </div>
        <div>
          <h1>User ID</h1>
          <p>Title</p>
          <p>Body</p>
        </div>
        <div>
          <h1>User ID</h1>
          <p>Title</p>
          <p>Body</p>
        </div>
        <div>
          <h1>User ID</h1>
          <p>Title</p>
          <p>Body</p>
        </div>
        <div>
          <h1>User ID</h1>
          <p>Title</p>
          <p>Body</p>
        </div>
        <div>
          <h1>User ID</h1>
          <p>Title</p>
          <p>Body</p>
        </div>
        <div>
          <h1>User ID</h1>
          <p>Title</p>
          <p>Body</p>
        </div>
      </div>
    </div>
  );
}
