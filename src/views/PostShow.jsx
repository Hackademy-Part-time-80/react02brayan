import { useLoaderData } from "react-router";

export default function PostShow() {
  const [post, comments] = useLoaderData();
  return (
    <>
      <div className="w-8/9 mx-auto my-0  p-2">
        <h2 className="text-3xl font-bold mb-2">Post: {post.title}</h2>
        <h3 className="text-xl font-bold mb-2">Comments:</h3>
        <ul className="list-disc ms-8">
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