const cohort_name = "2306-GHP-ET-WEB-FT-SF";
const base_url = `https://strangers-things.herokuapp.com/api/${cohort_name}`;

import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login({ setToken }) {
     const [username, setUsername] = useState("");
     const [password, setPassword] = useState("");
     const [error, setError] = useState(null);
     const navigate = useNavigate();

     async function handleSubmit(event) {
          event.preventDefault();
          console.log("motherfucking button time");
          try {
               const response = await fetch(
                    `${base_url}/users/register`,

                    {
                         method: "POST",
                         headers: {
                              "Content-Type": "application/json",
                         },
                         body: JSON.stringify({
                              user: {
                                   username,
                                   password,
                              },
                         }),
                    }
               );
               const result = await response.json();
               console.log("line 35 result: ", result);
               setToken(result.data.token);
               console.log(
                    "this is the token from line 36: ",
                    result.data.token
               );
               navigate("/");
          } catch (error) {
               setError(error.message);
          }
     }

     return (
          <section>
               <h2>Log In, Friend-o</h2>
               {error && <h2>{error}</h2>}

               <form onSubmit={handleSubmit}>
                    <label>
                         Username:{" "}
                         <input
                              type="text"
                              placeholder="whats ur name"
                              value={username}
                              onChange={(event) =>
                                   setUsername(event.target.value)
                              }
                         />
                    </label>
                    <br />
                    <br />
                    <label>
                         Password:{" "}
                         <input
                              type="password"
                              placeholder="passwrod bby"
                              value={password}
                              onChange={(event) =>
                                   setPassword(event.target.value)
                              }
                         />
                    </label>
                    <br />
                    <br />
                    <button>Submit, if you dare</button>
               </form>
          </section>
     );
}
