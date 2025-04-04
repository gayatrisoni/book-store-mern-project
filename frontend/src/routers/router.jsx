import {createBrowserRouter} from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/home";
import Login from "../components/Login";
import Register from "../components/Register";




const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children: [
        {
            path: "/",
            element: <Home/>
        },
        {
            path: '/orders',
            element: <div>Orders</div>
        },
        {
            path: '/about',
            element: <div>About</div>
        },
        {
            path: '/products',
            element: <div>products</div>
        },
        {
            path: '/login',
            element: <Login/>
        },
        {
            path: '/register',
            element: <Register/>
        },
      ]
    },
]);

export default router;