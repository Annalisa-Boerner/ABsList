import { deletePost } from "../../services/apiCalls";
import { useNavigate } from "react-router-dom";

export default function DeletePost({ post, token }) {
     //  console.log("entering DeletePost component, then token", token);
     //  console.log("this is the post ", post);
     const navigate = useNavigate();

     async function handleDelete(event) {
          event.preventDefault();
          try {
               const result = await deletePost(post._id, token);
               //    console.log("line 13 token and post._id", token, post._id);
               //    navigate(0);
          } catch (error) {
               console.error(error);
          }
     }
     return (
          <div>
               <button onClick={handleDelete}>Delete</button>
          </div>
     );
}
