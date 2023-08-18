import { Link } from "react-router-dom";
import AllPosts from "./allPosts";

export default function NavBar() {
     return (
          <div id="navbar">
               <h2>navigate me, I am a bar</h2>
               <Link to="/">Home</Link>
               <br />
               <Link to="/posts" element={<AllPosts />}>
                    Posts
               </Link>
               <br />
               <Link to="/login">Login</Link>
               <br />
          </div>
     );
}
