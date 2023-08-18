import { useState, useEffect } from "react";
import { fetchAllPosts } from "../../services/88index";

export default function AllPosts() {
     const [posts, setPosts] = useState([]);
     const [error, setError] = useState(null);

     fetchAllPosts();

     return <h2>I render all posts</h2>;
}
