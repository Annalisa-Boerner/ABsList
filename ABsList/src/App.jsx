// import { useState } from 'react'
import { Route, Routes } from "react-router-dom";
import "./App.css";
// import Form from "./components/form";
import NavBar from "./components/navBar";
import SearchBar from "./components/searchBar";
import AllPosts from "./components/allPosts";
import Login from "./components/login";
import Home from "./components/homepage";
import SinglePost from "./components/singlePost";

function App() {
     return (
          <>
               <NavBar />
               <SearchBar />

               <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/posts" element={<AllPosts />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/players/:_id" element={<SinglePost />} />
               </Routes>
               {/* <AllPosts /> */}
               {/* <Form />
               <Login />
               <SinglePost /> */}
          </>
     );
}

export default App;
