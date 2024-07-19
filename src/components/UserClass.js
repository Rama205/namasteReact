import React from "react";

class UserClass extends  React.Component{
    constructor(props){
        super(props)
       
        this.state= {
           userInfo:{
            name:"Ram",
            location:"default",
            avatar_url:"dummy"
           }
        }
       // console.log("Child Contstr")
    }

    async componentDidMount(){
        
        const data = await fetch("https://api.github.com/users/Rama205");
        const json = await data.json();
     console.log("------json",json)
     this.setState({
        userInfo:json
     })
    }
    render(){
        //console.log("child render")
        const {name,location,login,avatar_url}=this.state.userInfo
    
        return<div className="user-card">
            <img src={avatar_url}/>
            <h2>Name:{name}</h2>
            <h3>Location:{location}</h3>
            <h3>{login}</h3>
            
          
        </div>
    }
}

export default UserClass;