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
