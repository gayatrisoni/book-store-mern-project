import {createBrowserRouter} from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/home";
import Login from "../components/Login";
import Register from "../components/Register";
import Cart from "../pages/books/Cart";
import Checkout from "../pages/books/Checkout";




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
        {
            path: '/cart',
            element : <Cart/>
        },
        {
            path: '/checkout',
            element : <Checkout/>
        },
        
      ]
    },
]);

export default router;