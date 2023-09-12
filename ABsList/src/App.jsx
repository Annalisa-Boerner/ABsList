import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./components/navBar";
import NewPost from "./components/newPost";
import AllPosts from "./components/allPosts";
import Login from "./components/login";
import Register from "./components/register";
// import MyPosts from "./components/myPosts";
import EditPost from "./components/editForm";

function App() {
     // const [postId, setPostId] = useState("");

     const [token, setToken] = useState("");

     return (
          <>
               <NavBar id="navbar" />

               <Routes>
                    <Route path="/" element={<AllPosts token={token} />} />
                    <Route
                         path="/login"
                         element={<Login setToken={setToken} />}
                    />
                    <Route
                         path="/register"
                         element={<Register setToken={setToken} />}
                    />
                    <Route
                         path="/newpost"
                         element={<NewPost token={token} />}
                    />
                    <Route
                         path="/editpost"
                         element={<EditPost token={token} />}
                    />
                    <Route
                         path="/newpost"
                         element={<NewPost token={token} />}
                    />
               </Routes>
          </>
     );
}

export default App;
