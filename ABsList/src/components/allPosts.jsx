import { useState, useEffect } from "react";
import { fetchAllPosts } from "../../services/apiCalls";
import { useNavigate } from "react-router-dom";
import React from "react";
import App from "./../App";
import { deletePost } from "../../services/apiCalls";
import Post from "./post";
import EditPost from "./editPost";

//AllPost rendering, where I hoped to setPostId via props so that they could be shared with editForm
export default function AllPosts({ token }) {
     const [posts, setPosts] = useState([]);
     const [searchParam, setSearchParam] = useState("");
     const navigate = useNavigate();

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

     function handleDelete() {
          deletePost();
          // navigate('/')
     }

     return (
          <div>
               <h1>Welcome to AB List, your one stop used item shop!</h1>
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
                    const author = post.isAuthor.toString();
                    // const postIdAP = post._id;

                    function handleClick() {
                         navigate(`/editpost`);
                         // setPostId(post._id);
                    }

                    return (
                         <div key={post._id}>
                              <h2>Title: {post.title}</h2>
                              <p>Description: {post.description}</p>
                              <p>Price: {post.price}</p>
                              <p>Location: {post.location}</p>
                              <EditPost post={post} token={token} />
                              <div>
                                   {author ? (
                                        <>
                                             <button onClick={handleClick}>
                                                  Edit Post
                                             </button>{" "}
                                             <button onClick={handleDelete}>
                                                  Delete Post
                                             </button>
                                        </>
                                   ) : (
                                        <button>Send Message</button>
                                   )}
                              </div>
                         </div>
                    );
               })}
          </div>
     );
}
