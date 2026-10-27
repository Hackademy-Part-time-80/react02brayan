import { useLoaderData } from "react-router";

export default function PostShow() {
  const [post, comments] = useLoaderData();
  return (
    <>
      <div className="container">
        <h2>Post: {post.title}</h2>
        <h3>Comments:</h3>
        <ul>
          {comments && comments.map((comment) => {
            return (
              <li key={comment.id}>{comment.body}</li>
            );
          })}
        </ul>
      </div>
    </>
  );
}