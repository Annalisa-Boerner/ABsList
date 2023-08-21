import { useState } from "react";
import { createPost } from "../../services/apiCalls";

export default function NewPost() {
     const [title, setTitle] = useState("");
     const [price, setPrice] = useState("");
     const [location, setLocation] = useState("");
     const [description, setDescription] = useState("");
     const [willDeliver, setWilldeliver] = useState(false);
     const [error, setError] = useState(null);
     const onChange = () => setWilldeliver(!willDeliver);

     async function handleSubmit(event) {
          event.preventDefault();
          const APIData = await createPost(
               title,
               price,
               location,
               description,
               willDeliver
          );
          if (APIData.success) {
               console.log("New Item: ", APIData.data.NewPost);

               // const newPostList = [...posts, APIData.data.newPost];
               // setPosts(newPostList);
          } else {
               setError(APIData.error.message);
          }
     }

     //needs all the API call language here
     //handlesubmit function
     return (
          <section>
               <h2>New Item Submission Form:</h2>
               <form className="formStyles" onSubmit={handleSubmit}>
                    {error && (
                         <p>
                              We're sorry, there's been an error with your
                              submission. Please try again l8r.
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
