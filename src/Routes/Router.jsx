import { createBrowserRouter } from "react-router";
import HomeLayout from "../LayOuts/HomeLayout";
import Home from "../components/Home";
import AddCoffee from "../components/AddCoffee";
import UpdateCoffee from "../components/UpdateCoffee";
import CoffeeDetails from "../components/CoffeeDetails";
import Signin from "../components/Signin";
import SingUp from "../components/SingUp";
import Users from "../components/Users";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout></HomeLayout>,
        children: [
            {
                index: true,
                loader: () => fetch("https://coffee-store-server-neon-beta.vercel.app/coffees"),
                element: <Home></Home>
            }, 
            {
                path: "/addCoffee",
                element: <AddCoffee></AddCoffee>
            }, 
            {
                path: "/coffee/:id",
                loader: ({ params }) => fetch(`https://coffee-store-server-neon-beta.vercel.app/coffees/${params.id}`),
                element: <CoffeeDetails></CoffeeDetails>
            },
            {
                path: "/updateCoffee/:id",
                loader: ({ params }) => fetch(`https://coffee-store-server-neon-beta.vercel.app/coffees/${params.id}`),
                element: <UpdateCoffee></UpdateCoffee>
            },
            {
                path: "/signin",
                element: <Signin></Signin>
            },
            {
                path: '/signup',
                element: <SingUp />
            }, 
            {
                path: "/users",
                loader: () => fetch("https://coffee-store-server-neon-beta.vercel.app/users"),
                element: <Users></Users>
            }
        ]
    }
])