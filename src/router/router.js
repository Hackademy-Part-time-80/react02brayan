import { createBrowserRouter } from "react-router";
import Layout from "../components/Layout";
import Homepage from "../views/Homepage";
import PostIndex from "../views/PostIndex";


 const  router = createBrowserRouter([
    {
        path: '/',
        Component: Layout,
        children: [
            {
                path:'/',
                Component: Homepage
            },
            {
                path:'/posts',
                Component: PostIndex
            }
        ]
    }
 ]);

 export default router;