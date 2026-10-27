import { useLoaderData } from "react-router";

export default function PostShow() {
  const [post, comments] = useLoaderData();
  return (
    <>
      <h2>Post: {post.title}</h2>
      <ul>
        {comments && comments.map((comment) => {
          return (
            <li key={comment.id}>{comment.body}</li>
          );
        })}
      </ul>
    </>
  );
}