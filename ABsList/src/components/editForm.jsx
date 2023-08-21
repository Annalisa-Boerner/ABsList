import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { editPost } from "../../services/apiCalls";

export default function EditPost({ postId }) {
     const { id } = useParams();

     const [title, setTitle] = useState("");
     const [price, setPrice] = useState("");
     const [location, setLocation] = useState("");
     const [description, setDescription] = useState("");
     const [willDeliver, setWilldeliver] = useState(false);
     const [error, setError] = useState(null);
     const onChange = () => setWilldeliver(!willDeliver);

     useEffect(() => {
          async function lookAtPost() {
               const APIResponse = await editPost(id);
               if (APIResponse.success) {
               }
          }
     }, []);
}

//      async function handleSubmit(event) {
//           event.preventDefault();
//           const APIData = await editPost(
//                title,
//                price,
//                location,
//                description,
//                willDeliver
//           );
//           if (APIData.success) {
//                console.log("New Item: ", APIData.data.NewPost);

//           } else {
//                setError(APIData.error.message);
//           }
//      }

//      return (
//           <section>
//                <h2>Edit item:</h2>
//                <form className="formStyles" onSubmit={handleSubmit}>
//                     {error && (
//                          <p>
//                               We're sorry, there's been an error with your
//                               submission. Please try again l8r.
//                          </p>
//                     )}
//                     <label>Title </label>
//                     <input
//                          type="text"
//                          value={title}
//                          name="Title"
//                          placeholder="title"
//                          onChange={(event) => setTitle(event.target.value)}
//                     />
//                     <br />
//                     <br />
//                     <label>Description </label>
//                     <input
//                          type="text"
//                          value={description}
//                          name="Description"
//                          placeholder="description"
//                          onChange={(event) =>
//                               setDescription(event.target.value)
//                          }
//                     />
//                     <br />
//                     <br />
//                     <label>Price </label>
//                     <input
//                          type="text"
//                          value={price}
//                          name="Price"
//                          placeholder="Price"
//                          onChange={(event) => setPrice(event.target.value)}
//                     />
//                     <br />
//                     <br />
//                     <label>Location </label>
//                     <input
//                          type="text"
//                          value={location}
//                          name="Location"
//                          placeholder="Location"
//                          onChange={(event) => setLocation(event.target.value)}
//                     />
//                     <br />
//                     <br />
//                     <input
//                          type="checkbox"
//                          value={willDeliver}
//                          name="willDeliver"
//                          checked={willDeliver}
//                          onChange={onChange}
//                     />
//                     <label> Will Deliver</label>
//                     <br />
//                     <br />
//                     <button>Submit</button>
//                </form>
//           </section>
//      );
// }
