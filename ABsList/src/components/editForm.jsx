import { useState } from "react";
const cohort_name = "2306-GHP-ET-WEB-FT-SF";
const base_url = `https://strangers-things.herokuapp.com/api/${cohort_name}`;
import { useNavigate } from "react-router-dom";

export default function EditPost() {
     const [title, setTitle] = useState("");
     const [price, setPrice] = useState("");
     const [location, setLocation] = useState("");
     const [description, setDescription] = useState("");
     const [willDeliver, setWilldeliver] = useState(false);
     const [error, setError] = useState(null);
     const onChange = () => setWilldeliver(!willDeliver);
     const navigate = useNavigate();

     //API CALL USING PROPS TO CREATE DYNAMIC URL
     async function editPost(
          title,
          description,
          price,
          location,
          willDeliver,
          postId
     ) {
          try {
               const response = await fetch(`${base_url}/posts/${postId}`, {
                    method: "PATCH",
                    headers: {
                         "Content-Type": "application/json",
                         Authorization: `Bearer ${token}`,
                    },
                    body: JSON.stringify({
                         post: {
                              title,
                              description,
                              price,
                              location,
                              willDeliver,
                         },
                    }),
               });
               const result = await response.json();
               console.log(result);
               return result;
          } catch (error) {
               console.error(error);
          }
     }

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
