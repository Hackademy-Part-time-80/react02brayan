import { createBrowserRouter } from "react-router";
import Layout from "../components/Layout";
import Homepage from "../views/Homepage";
import PostIndex from "../views/PostIndex";
import { getAllPosts, getSinglePost } from "./loaders";
import PostShow from "../views/PostShow";


const router = createBrowserRouter([
  {
    path: '/',
    Component: Layout,
    children: [
      {
        path: '/',
        Component: Homepage
      },
      {
        path: '/posts',
        Component: PostIndex,
        loader: getAllPosts
      },
      {
        path: '/posts/:id',
        Component: PostShow,
        loader: getSinglePost
      }
    ]
  }
]);

export default router;