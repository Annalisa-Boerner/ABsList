// import { useState } from 'react'
import { Route, Routes } from "react-router-dom";
import "./App.css";
// import Form from "./components/form";
import NavBar from "./components/navBar";
import SearchBar from "./components/searchBar";
import AllPosts from "./components/allPosts";
import Login from "./components/login";
import MyPosts from "./components/myPosts";
import { fetchSinglePost } from "../services/88index";

function App() {
     fetchSinglePost("64de73d01430250014e78563");
     return (
          <>
               <NavBar />

               <Routes>
                    <Route path="/" element={<AllPosts />} />
                    {/* <Route path="/posts" element={<AllPosts />} /> */}
                    <Route path="/login" element={<Login />} />
                    <Route path="/myposts" element={<MyPosts />} />
               </Routes>
               {/* <AllPosts /> */}
               {/* <Form />
               <Login />
               <SinglePost /> */}
          </>
     );
}

export default App;
