import { useState } from "react"

export default function Login() {
     const [username, setUsername] = useState('')
     const [password, setPassword] = useState('')

     async function handleSubmit() {
          console.log('motherfucking button time')
     }






     return (<section>
          <h2>Log In, Friend-o</h2>
          {/* {error && <h2>{error}</h2>} */}
          <form onSubmit={handleSubmit}>
               <label>
                    Username: <input type="text" placeholder='whats ur name' value={username} onChange={(event) => setUsername(event.target.value)} />
               </label><br /><br />
               <label>Password: <input type="password"
                    placeholder="passwrod bby"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)} />
               </label><br /><br />
               <button>Submit, if you dare</button>





          </form>



     </section>)
}
