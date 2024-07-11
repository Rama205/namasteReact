
import React from "react";
import ReactDOM from "react-dom/client";
import BodyComponent from "./components/body";
import Header from "./components/Header";



const AppLayout =() =>{
    return (
        <div className="app">
            <Header/>
            <BodyComponent/>
        </div>
    )
}
const root = ReactDOM.createRoot(document.getElementById("root"));


root.render(<AppLayout/>)
