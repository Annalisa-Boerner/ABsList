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
