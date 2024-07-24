import UserClass from "./UserClass";
import React from "react";
import UserContext from "../utils/UserContext"

class About extends React.Component{
    constructor(props){
        super(props)
       
    }

    async componentDidMount(){
    
    }

    render(){
        //console.log("Parent render")
        return <div className="p-4 m-4 bg-amber-50">
        <h1>About Us</h1>
            <div>
          {/* LoggedIn User */}
          <UserContext.Consumer>
            {({ loggedInUser }) => (
              <h1 className="text-xl font-bold">{loggedInUser}</h1>
            )}
          </UserContext.Consumer>
        </div>
        <UserClass />
    </div>
    }
}


export default About;