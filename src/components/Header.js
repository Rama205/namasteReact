import { LOGO_URL} from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import Grocery from "./Grocery"
const Header = () =>{

   let [btnName,setbtnName] = useState("LOGIN")
   const onlineStatus =useOnlineStatus();
    return (<div className="flex justify-between bg-pink-100 shadow-lg">
       <div className="logo-container">
        <img className="w-28" src ={LOGO_URL}/>
       </div>
       <div className="flex items-center">
         <ul className="flex p-4 m-4">
            <li className="px-4">Online Status :{onlineStatus ? "ONLINE" : "OFFLINE"}</li>
            <li className="px-4"><Link to ="/">Home</Link></li>
            <li className="px-4"><Link to ="/about">About</Link></li>
            <li className="px-4"><Link to ="/grocery">Grocery</Link></li>
            <li className="px-4"><Link to ="/contact">Contact</Link></li>
            <li>Cart</li>
            <button className="login" onClick={()=>{
              btnName === "LOGIN" ?
               setbtnName("LOGOUT")
               :setbtnName("LOGIN")
            }}>{btnName}</button>
         </ul>
       </div>
    </div>)
}
export default Header;