import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { editPost } from "../../services/apiCalls";

export default function EditPost({ post, token, setToken }) {
     const [title, setTitle] = useState("");
     const [price, setPrice] = useState("");
     const [location, setLocation] = useState("");
     const [description, setDescription] = useState("");
     const [willDeliver, setWilldeliver] = useState(false);
     const [error, setError] = useState(null);
     const onChange = () => setWilldeliver(!willDeliver);

     const nav = useNavigate();

     //HANDLESUBMIT THAT CALLS THE EDIT API REQUEST ON SUBMIT

     async function handleSubmit(event) {
          event.preventDefault();
          // console.log("line 25 ", post);
          const updatedPost = {
               post: { title, description, price, location, willDeliver },
          };
          const editedPost = await editPost(post._id, updatedPost, token);
          nav(0);
          setToken(token);
     }
     //FORM FOR EDITING
     return (
          <section>
               <h3>Edit item:</h3>
               <form className="formStyles" onSubmit={handleSubmit}>
                    {error && (
                         <p>
                              We're sorry, there's been an error with your edit.
                              Please try again l8r.
                         </p>
                    )}
                    <label>Title </label>
                    <input
                         type="text"
                         value={title}
                         name="Title"
                         placeholder={title}
                         onChange={(event) => setTitle(event.target.value)}
                    />
                    <br />
                    <br />
                    <label>Description </label>
                    <input
                         type="text"
                         value={description}
                         name="Description"
                         placeholder={description}
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
                         placeholder={price}
                         onChange={(event) => setPrice(event.target.value)}
                    />
                    <br />
                    <br />
                    <label>Location </label>
                    <input
                         type="text"
                         value={location}
                         name="Location"
                         placeholder={location}
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

                    <button>Edit</button>
               </form>
          </section>
     );
}
