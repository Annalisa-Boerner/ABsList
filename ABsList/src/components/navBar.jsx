import { Link } from "react-router-dom";
import AllPosts from "./allPosts";


export default function NavBar() {
     return (
          <div id="navbar">
               <h2>navigate me, I am a bar</h2>
               <Link to="/" element={<AllPosts />}>
                    Home
               </Link>


               <Link to="/newpost">New Post</Link>

               <Link to="/login">Login</Link>
          </div>
     );
}
