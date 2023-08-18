import { Link } from "react-router-dom";
import AllPosts from "./allPosts";
import MyPosts from "./myPosts";

export default function NavBar() {
     return (
          <div id="navbar">
               <h2>navigate me, I am a bar</h2>
               <Link to="/" element={<AllPosts />}>
                    Home
               </Link>

               <Link to="/myposts" element={<MyPosts />}>
                    My Posts
               </Link>

               <Link to="/login">Login</Link>
          </div>
     );
}
