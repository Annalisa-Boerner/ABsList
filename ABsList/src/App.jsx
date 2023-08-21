//test comment for github
import React from "react";
import { PropTypes } from "prop-types";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./components/navBar";
import NewPost from "./components/form";
import AllPosts from "./components/allPosts";
import Login from "./components/login";
// import MyPosts from "./components/myPosts";
import EditPost from "./components/editForm";

function App() {
     const [postId, setPostId] = useState("");
     <>
          <AllPosts postId={postId} setPostId={setPostId} />
          <EditPost postId={postId} setPostId={setPostId} />
     </>;
     return (
          <>
               <NavBar id="navbar" />

               <Routes>
                    <Route path="/" element={<AllPosts />} />
                    {/* <Route path="/posts" element={<AllPosts />} /> */}
                    <Route path="/login" element={<Login />} />
                    {/* <Route path="/myposts" element={<MyPosts />} /> */}
                    <Route path="/newpost" element={<NewPost />} />
                    <Route path="/editpost" element={<EditPost />} />
               </Routes>
               {/* <AllPosts /> */}
               {/* <Form />
               <Login />
               <SinglePost /> */}
          </>
     );
}

export default App;
