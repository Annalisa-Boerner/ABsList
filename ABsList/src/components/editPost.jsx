import { useEffect, useState } from "react";
const cohort_name = "2306-GHP-ET-WEB-FT-SF";
const base_url = `https://strangers-things.herokuapp.com/api/${cohort_name}`;
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { editPost } from "../../services/apiCalls";

export default function EditPost({ post, token }) {
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
          // console.log("updatedPost ", updatedPost);
          // console.log("line 31", post._id);
          const editedPost = await editPost(post._id, updatedPost, token);
          // console.log("API response in line 32: ", editedPost);
          nav("/");
     }
     //FORM FOR EDITING
     return (
          <section>
               <h2>Edit item:</h2>
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

                    <button>Submit</button>
               </form>
          </section>
     );
}
