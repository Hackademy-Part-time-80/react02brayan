import { Link, useLoaderData } from "react-router"
import Card from "../components/Card";

export default function PostIndex() {
  const posts = useLoaderData();
  return (
    <>
      <div className="w-8/9 mx-auto my-4 p-2">
        <h1>POSTS:</h1>
        <div className="flex flex-wrap gap-4">
          {posts && posts.map((post) => {
            return (
              <>
                <Card key={post.id} className="w-62 p-3">
                  <p className="font-bold">
                    {post.title}
                  </p>
                  <Link to={`/posts/${post.id}`} className="text-blue-400 underline"> Detagglio</Link>
                </Card>
              </>
            );
          })}
        </div>
      </div>
    </>
  )
}