import { createBrowserRouter, RouterProvider,} from "react-router-dom";
import App from "./App"
import Home from "./pages/home/home.jsx";
import Services from "./pages/services/services.jsx";
import Products from "./pages/products/products.jsx";
import About from "./pages/about-us/about-us.jsx";
import Contacts from "./pages/contacts/contacts.jsx";
import Blog from "./pages/blog/blog.jsx";


export default function Router(){

  const router=createBrowserRouter([

    {
      path:"/",
      element:<App/>,
      children:[
        {index:true,element:<Home/>},
        {path:"services", element:<Services/>},
        {path:"products", element:<Products/>},
        {path:"blog", element:<Blog/>},
        {path:"about-us",element:<About/>},
        {path:"contacts",element:<Contacts/>}
      ]
    }
  ])

  return <RouterProvider router={router}></RouterProvider>;

}