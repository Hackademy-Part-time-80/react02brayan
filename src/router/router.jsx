import { createBrowserRouter } from "react-router";
import Layout from "../components/Layout";
import Homepage from "../views/Homepage";
import PostIndex from "../views/PostIndex";
import { getAllPosts, getSinglePost } from "./loaders";
import PostShow from "../views/PostShow";
import Login from "../views/Login";
import Register from "../views/Register";


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
      },
      {
        path: '/login',
        Component: Login
      },
      {
        path: '/register',
        Component: Register
      }
    ]
  }
]);

export default router;