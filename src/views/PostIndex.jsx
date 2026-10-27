import { Link, useLoaderData } from "react-router"
import Card from "../components/Card";

export default function PostIndex() {
  const posts = useLoaderData();
  return (
    <>
      <div className="container">
        <h1>POSTS:</h1>
        <div className="container__grid">
          {posts && posts.map((post) => {
            return (
              <>
                <Card key={post.id} className="w-248px p-3 ">
                  <p className="title">
                    {post.title}
                  </p>
                  <Link to={`/posts/${post.id}`}> Detagglio</Link>
                </Card>
              </>
            );
          })}
        </div>
      </div>
    </>
  )
}