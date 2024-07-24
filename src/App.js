
import React, { lazy, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import BodyComponent from "./components/body";
import Header from "./components/Header";
import Contact from "./components/Contact";
import About from "./components/About";
import Error from "./components/Error";
import RestoMenu from "./components/RestoMenu";
import { createBrowserRouter,Outlet,RouterProvider,Outlet } from "react-router-dom"; 
import UserContext from "./utils/UserContext";
import {useState,useEffect} from 'react'
import { Suspense } from "react";
import { Provider } from "react-redux";
import appStore from "./utils/AppStore";
import Cart from "./components/Cart"

const Grocery = lazy(()=> import ("./components/Grocery"));

const AppLayout =() =>{
    const [ userName,setUserName]= useState('');

    useEffect(()=>{
        const data ={
            name : "Ramya Bhagwat"
        }
        setUserName(data.name)
    },[]);

    return (
        <Provider store={appStore}>
        <UserContext.Provider value={{loggedInUser:userName, setUserName}}>
        <div className="app">
            <Header/>
           <Outlet/>
        </div>
        </UserContext.Provider>
        </Provider>
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
            path:"/cart",
            element :<Cart/>
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
