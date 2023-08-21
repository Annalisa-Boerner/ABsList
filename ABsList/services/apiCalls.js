const cohort_name = "2306-GHP-ET-WEB-FT-SF";
const base_url = `https://strangers-things.herokuapp.com/api/${cohort_name}`;

export async function fetchAllPosts() {
     try {
          const response = await fetch(`${base_url}/posts`);
          const result = await response.json();
          return result.data.posts;
     } catch (error) {
          console.error(error);
     }
}

// export async function fetchSinglePost(id) {
//      try {
//           const response = await fetch(`${base_url}/posts/${id}`);
//           const result = await response.json();
//           console.log(result);
//           return result.data;
//      } catch (error) {
//           console.error(error);
//      }
// }

let token =
     "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGUzODgwNDJjMjc1MDAwMTQ4Y2ZlNmQiLCJ1c2VybmFtZSI6ImJhZGdlciIsImlhdCI6MTY5MjYzMzA5Mn0.tnmzbv2LRNShm6DfMj9GM6VZ5k9b3jxRwQkdFjEJMLY";

export async function createPost(
     title,
     description,
     price,
     location,
     willDeliver
) {
     try {
          const response = await fetch(`${base_url}/posts`, {
               method: "POST",
               headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
               },
               body: JSON.stringify({
                    post: {
                         title,
                         description,
                         price,
                         location,
                         willDeliver,
                    },
               }),
          });
          const result = await response.json();
          console.log(result);
          return result;
     } catch (error) {
          console.error(error);
     }
}

//hardcoded to edit exactly one post, lol (because my props experiments in jsx failed). search thunder

export async function editPost(
          title,
          description,
          price,
          location,
          willDeliver
     ) {
          let edit_id = '64e38bc02c275000148d06cd'

          try {
               const response = await fetch(`${base_url}/posts/${edit_id}`, {
                    method: "PATCH",
                    headers: {
                         "Content-Type": "application/json",
                         Authorization: `Bearer ${token}`,
                    },
                    body: JSON.stringify({
                         post: {
                              title,
                              description,
                              price,
                              location,
                              willDeliver,
                         },
                    }),
               });
               const result = await response.json();
               console.log(result);
               return result;
          } catch (error) {
               console.error(error);
          }
     }

export const deletePost = async () => {
     let delete_id = '64e3e7bc555d2f00149d3917'

     try {
          const response = await fetch(`${base_url}/posts/${delete_id}`, {
               method: "DELETE",
               headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
               }
          
          });
          const result = await response.json();
          console.log(result);
          return result
     } catch (error) {
          alert("We're sorry, there was an error during deletion. Please try again.")
          
     }
}