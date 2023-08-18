import { useState, useEffect } from "react";
import { fetchAllPosts } from "../../services/88index";
import SearchBar from "./searchBar";

export default function AllPosts() {
     const [posts, setPosts] = useState([]);

     async function usefulPosts() {
          let postArray = await fetchAllPosts();
          setPosts(postArray);
     }
     useEffect(() => {
          usefulPosts();
     }, []);

     return (
          <div>
               <SearchBar />
               <h1>Welcome to AB List, your one stop used item shop!</h1>
               {posts.map((post) => {
                    return (
                         <div key={post._id}>
                              <h2>{post.title}</h2>
                              <p>{post.description}</p>
                              <p>{post.price}</p>
                         </div>
                    );
               })}
          </div>
     );
}
