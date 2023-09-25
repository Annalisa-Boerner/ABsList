import { useState, useEffect } from "react";
import { fetchAllPosts } from "../../services/apiCalls";
// import React from "react";
import EditPost from "./editPost";
import DeletePost from "./deletePost";

//RENDER ALL POSTS AND PASS IN TOKEN FOR USE BY CHILDREN
export default function AllPosts({ token }) {
     const [posts, setPosts] = useState([]);
     const [searchParam, setSearchParam] = useState("");

     async function usefulPosts() {
          let postArray = await fetchAllPosts();
          setPosts(postArray);
     }
     useEffect(() => {
          usefulPosts();
     }, []);

     const postsToDisplay = searchParam
          ? posts.filter((post) =>
                 post.title.toLowerCase().includes(searchParam)
            )
          : posts;

     return (
          <div>
               <h2>Welcome to AB's List, your one stop used item shop!</h2>
               <div>
                    <label>
                         Search:{""}
                         <input
                              type="text"
                              placeholder="search"
                              onChange={(event) =>
                                   setSearchParam(
                                        event.target.value.toLowerCase()
                                   )
                              }
                         />
                    </label>
               </div>
               {postsToDisplay.map((post) => {
                    return (
                         <div key={post._id} className="post">
                              <h2>Title: {post.title}</h2>
                              <p>Description: {post.description}</p>
                              <p>Price: {post.price}</p>
                              <p>Location: {post.location}</p>
                              <EditPost post={post} token={token} />
                              <DeletePost post={post} token={token} />
                         </div>
                    );
               })}
          </div>
     );
}
