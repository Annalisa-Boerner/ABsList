import { useState } from "react";
const cohort_name = "2306-GHP-ET-WEB-FT-SF";
const base_url = `https://strangers-things.herokuapp.com/api/${cohort_name}`;
import { useNavigate } from "react-router-dom";
import App from './../App'
import editPost from "./../../services/apiCalls"


//attempt to edit a post based on the postId, which I hoped to deconstruct from props from App
export default function EditPost({ postId }) {
     const [title, setTitle] = useState("");
     const [price, setPrice] = useState("");
     const [location, setLocation] = useState("");
     const [description, setDescription] = useState("");
     const [willDeliver, setWilldeliver] = useState(false);
     const [error, setError] = useState(null);
     const onChange = () => setWilldeliver(!willDeliver);


     //API CALL USING PROPS TO CREATE DYNAMIC URL
     let token =
"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGUzODgwNDJjMjc1MDAwMTQ4Y2ZlNmQiLCJ1c2VybmFtZSI6ImJhZGdlciIsImlhdCI6MTY5MjYzMzA5Mn0.tnmzbv2LRNShm6DfMj9GM6VZ5k9b3jxRwQkdFjEJMLY";

     

     //HANDLESUBMIT THAT CALLS THE EDIT API REQUEST ON SUBMIT

     async function handleSubmit(event) {
          event.preventDefault();
          const APIData = await editPost(
               postId,
               title,
               price,
               location,
               description,
               willDeliver
          );
          if (APIData.success) {
               console.log("Edited Item: ", APIData.data.NewPost);
          } else {
               setError(APIData.error.message);
          }
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
