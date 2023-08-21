import { useState, useEffect } from "react";
import { fetchAllPosts } from "../../services/apiCalls";
import { useNavigate } from "react-router-dom";

export default function AllPosts({ setPostId }) {
     const [posts, setPosts] = useState([]);
     const [searchParam, setSearchParam] = useState("");
     const navigate = useNavigate;

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

     function handleClick() {
          setPostId(posts._id);
          navigate(`/editpost`);
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
                    return (
                         <div key={post._id}>
                              <h2>Title: {post.title}</h2>
                              <p>Description: {post.description}</p>
                              <p>Price: {post.price}</p>
                              <p>Location: {post.location}</p>
                              <button onClick={handleClick}>Edit Post</button>
                         </div>
                    );
               })}
          </div>
     );
}
