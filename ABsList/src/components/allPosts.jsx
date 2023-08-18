import { useState, useEffect } from "react";
import { fetchAllPosts } from "../../services/88index";

export default function AllPosts() {
     const [posts, setPosts] = useState([]);

     async function usefulPosts() {
          let postArray = await fetchAllPosts();
          setPosts(postArray);
     }
     useEffect(() => {
          usefulPosts();
     }, []);

     return posts.map((post) => {
          return (
               <div key={post._id}>
                    <h2>{post.title}</h2>
                    <p>{post.description}</p>
                    <p>{post.price}</p>
               </div>
          );
     });
}
