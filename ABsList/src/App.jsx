//test comment for github

// import { useState } from 'react'
import { Route, Routes } from "react-router-dom";
import "./App.css";
// import Form from "./components/form";
import NavBar from "./components/navBar";
import NewPost from "./components/form";
import AllPosts from "./components/allPosts";
import Login from "./components/login";
import MyPosts from "./components/myPosts";

function App() {
     return (
          <>
               <NavBar />

               <Routes>
                    <Route path="/" element={<AllPosts />} />
                    {/* <Route path="/posts" element={<AllPosts />} /> */}
                    <Route path="/login" element={<Login />} />
                    <Route path="/myposts" element={<MyPosts />} />
                    <Route path="/newpost" element={<NewPost />} />
               </Routes>
               {/* <AllPosts /> */}
               {/* <Form />
               <Login />
               <SinglePost /> */}
          </>
     );
}

export default App;
