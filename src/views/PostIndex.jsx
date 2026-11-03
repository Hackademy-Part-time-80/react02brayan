import { Link, useLoaderData } from "react-router"
import Card from "../components/Card";

export default function PostIndex() {
  const posts = useLoaderData();
  return (
    <>
      <div className="w-8/9 mx-auto my-4 p-2">
        <h1 className="mb-5 text-4xl font-bold">POSTS:</h1>
        <div className="flex flex-wrap gap-4">
          {posts && posts.map((post) => {
            return (
              <>
                <Card key={post.id} className="w-62 p-3">
                  <p className="font-bold">
                    {post.title}
                  </p>
                  <Link to={`/posts/${post.id}`} className="link link-info"> Detagglio</Link>
                </Card>
              </>
            );
          })}
        </div>
      </div>
    </>
  )
}