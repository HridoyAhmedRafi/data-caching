//  = 2
// const getPosts = async () => {
//   const res = await fetch("https://jsonplaceholder.typicode.com/posts");
//   return res.json();
// };

import PostCard from "../components/PostCard";

//  = 3
// const getPosts = async () => {
//   try {
//     const res = await fetch("https://jsonplaceholder.typicode.com/posts");
//     return res.json();
//   } catch {
//     throw new Error("Failed to load posts");
//   }
// };

const getPosts = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!res.ok) {
    throw new Error("Failed to load posts");
  }
  return res.json();
};

const PostsPage = async () => {
  //  = 1
  // const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  // const posts = await res.json();

  const posts = await getPosts();


  return (
    <div>
      <h1>Posts : {posts.length}</h1>

      <div className="grid grid-cols-4 gap-4">
        {
          posts.map((post)=> <PostCard post={post} key={post.id}></PostCard>)
        }
      </div>
    </div>
  );
};

export default PostsPage;
