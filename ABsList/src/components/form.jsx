import React, { useState } from "react";
import { createPost } from "../../services/88index";

export default function NewPost({ posts, setPosts }) {
     const [title, setTitle] = useState("");
     const [price, setPrice] = useState("");
     const [location, setLocation] = useState("");
     const [description, setDescription] = useState("");
     const [willDeliver, setWilldeliver] = useState(false);
     const [error, setError] = useState(null);

     return (
          <form>
               {error && (
                    <p>
                         We are sorry, there has been an error with your
                         submission. Please try again l8r.
                    </p>
               )}
               <input
                    type="text"
                    value={title}
                    name="title"
                    placeholder="title"
                    onChange={(event) => setTitle(event.target.value)}
               />
               <input
                    type="text"
                    value={description}
                    name="description"
                    placeholder="description"
                    onChange={(event) => setDescription(event.target.value)}
               />
               <button>Submit</button>
          </form>
     );

     // <h2>I am a form</h2>;
}
