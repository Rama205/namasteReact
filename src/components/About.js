import UserClass from "./UserClass";
import React from "react";

class About extends React.Component{
    constructor(props){
        super(props)
       
    }

    async componentDidMount(){
    
    }

    render(){
        console.log("Parent render")
        return <div className="p-4 m-4 bg-amber-50">
        <h1>About Us</h1>
        <UserClass />
    </div>
    }
}


export default About;