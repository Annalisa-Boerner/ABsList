//worked until 7 pm when it suddenly broke; previous version shopping on github didn't get me past this error:

// error: {name: 'ValidationError', message: 'Post validation failed: price: Path `price` is required.'}

import { useState } from "react";
import { createPost, fetchAllPosts } from "../../services/apiCalls";
// import { useNavigate } from "react-router-dom";

export default function NewPost({ setPosts, token }) {
     const [title, setTitle] = useState("");
     const [price, setPrice] = useState("");
     const [location, setLocation] = useState("");
     const [description, setDescription] = useState("");
     const [willDeliver, setWilldeliver] = useState(false);
     // const [error, setError] = useState(null);
     const onChange = () => setWilldeliver(!willDeliver);
     // const navigate = useNavigate();

     async function handleSubmit(event) {
          event.preventDefault();
          async function newPost() {
               const myPost = {
                    title,
                    description,
                    price,
                    location,
                    willDeliver,
               };
               const result = await createPost(myPost, token);
               const updatePosts = await fetchAllPosts();
               setPosts(updatePosts.data.posts);
               return result;
          }
          newPost();
     }

     return (
          <section className="formstyles">
               <h2>New Item Submission Form:</h2>
               <h4>(Redirects on success)</h4>
               <form className="formStyles" onSubmit={handleSubmit}>
                    {/* {error && (
                         <p>
                              We're sorry, there's been an error with your
                              submission. Please try again l8r.
                         </p>
                    )} */}
                    <label>Title </label>
                    <input
                         type="text"
                         value={title}
                         name="Title"
                         placeholder="title"
                         onChange={(event) => setTitle(event.target.value)}
                    />
                    <br />
                    <br />
                    <label>Description </label>
                    <input
                         type="text"
                         value={description}
                         name="Description"
                         placeholder="description"
                         onChange={(event) =>
                              setDescription(event.target.value)
                         }
                    />
                    <br />
                    <br />
                    <label>Price </label>
                    <input
                         type="text"
                         value={price}
                         name="Price"
                         placeholder="Price"
                         onChange={(event) => setPrice(event.target.value)}
                    />
                    <br />
                    <br />
                    <label>Location </label>
                    <input
                         type="text"
                         value={location}
                         name="Location"
                         placeholder="Location"
                         onChange={(event) => setLocation(event.target.value)}
                    />
                    <br />
                    <br />
                    <input
                         type="checkbox"
                         value={willDeliver}
                         name="willDeliver"
                         checked={willDeliver}
                         onChange={onChange}
                    />
                    <label> Will Deliver</label>
                    <br />
                    <br />
                    <button>Submit</button>
               </form>
          </section>
     );
}
