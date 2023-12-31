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

export async function createPost(post, token) {
     try {
          const response = await fetch(`${base_url}/posts`, {
               method: "POST",
               headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
               },
               body: JSON.stringify({
                    post: {
                         title: post.title,
                         description: post.description,
                         price: post.price,
                         location: post.location,
                         willDeliver: post.willDeliver,
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

export async function editPost(postId, post, token) {
     try {
          const response = await fetch(`${base_url}/posts/${postId}`, {
               method: "PATCH",
               headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
               },
               body: JSON.stringify(post),
          });
          const result = await response.json();
          return result;
     } catch (error) {
          console.error(error);
     }
}

//again, hard coded for just one post
export const deletePost = async (postId, token) => {
     try {
          const response = await fetch(`${base_url}/posts/${postId}`, {
               method: "DELETE",
               headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
               },
          });
          const result = await response.json();
          console.log(result);
          return result;
     } catch (error) {
          console.error(
               "We're sorry, there was an error during deletion. Please try again."
          );
     }
};
