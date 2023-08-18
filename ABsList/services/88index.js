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
               },
               body: JSON.stringify({
                    title,
                    description,
                    price,
                    location,
                    willDeliver,
               }),
          });
          const result = await response.json();
          console.log(result);
          return result;
     } catch (error) {
          console.error(error);
     }
}
