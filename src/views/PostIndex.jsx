import { Link, useLoaderData } from "react-router"

export default function PostIndex() {
  const posts = useLoaderData();
  return (
    <>
      <h1>POSTS:</h1>
      <ul>
        {posts && posts.map((post) => {
          return (
            <li key={post.id}>{post.title}
              <Link to={`/posts/${post.id}`}> Detagglio</Link>
            </li>
          );
        })}
      </ul>
    </>
  )
}