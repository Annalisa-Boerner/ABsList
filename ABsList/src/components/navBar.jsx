import { Link } from "react-router-dom";
import AllPosts from "./allPosts";

export default function NavBar() {
     return (
          <div id="navbar">
               <Link to="/" element={<AllPosts />}>
                    Home
               </Link>

               <Link to="/newpost">New Post</Link>
               <Link to="/register">Register</Link>
               <Link to="/login">Login</Link>
          </div>
     );
}
