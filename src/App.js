
import React, { lazy } from "react";
import ReactDOM from "react-dom/client";
import BodyComponent from "./components/body";
import Header from "./components/Header";
import Contact from "./components/Contact";
import About from "./components/About";
import Error from "./components/Error";
import RestoMenu from "./components/RestoMenu";
import { createBrowserRouter,Outlet,RouterProvider,Outlet } from "react-router-dom"; 

import { Suspense } from "react";

const Grocery = lazy(()=> import ("./components/Grocery"));

const AppLayout =() =>{
    return (
        <div className="app">
            <Header/>
           <Outlet/>
        </div>
    )
}
const appRouter = createBrowserRouter([
   
    {
        path:"/",
        element :<AppLayout/>,
       children :[
        { 
            path:"/",
            element :<BodyComponent/>,
            errorElement :<Error/>
        },
        { 
            path:"/about",
            element :<About/>,
            errorElement :<Error/>
        },
        { 
            path:"/grocery",
            element :<Suspense fallback ={<h1>Loading...</h1>}><Grocery/></Suspense>
        },
        { 
            path:"/contact",
            element :<Contact/>
        },
        { 
            path:"/restoraunts/:resId",
            element :<RestoMenu/>
        }
       ]
    },
    
]);
const root = ReactDOM.createRoot(document.getElementById("root"));

 
root.render(<RouterProvider router={appRouter}/>)
