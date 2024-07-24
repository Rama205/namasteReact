import { LOGO_URL} from "../utils/constants";
import { useState,useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import Grocery from "./Grocery"
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
import appStore from "../utils/AppStore";
const Header = () =>{

   let [btnName,setbtnName] = useState("LOGIN")
   const onlineStatus =useOnlineStatus();
   const {loggedInUser} = useContext(UserContext);
const cartItems = useSelector((store) => store.cart.items)

   // console.log("---",loggedInUser)
    return (<div className="flex justify-between bg-pink-100 shadow-lg">
       <div className="logo-container">
        <img className="w-28" src ={LOGO_URL}/>
       </div>
       <div className="flex items-center">
         <ul className="flex p-4 m-4">
            <li className="px-4 t">Online Status :{onlineStatus ? "🟢" : "🔴"}</li>
            <li className="px-4"><Link to ="/">Home</Link></li>
            <li className="px-4"><Link to ="/about">About</Link></li>
            <li className="px-4"><Link to ="/grocery">Grocery</Link></li>
            <li className="px-4"><Link to ="/contact">Contact</Link></li>
            <li className="px-4"><Link to ="/cart">Cart-({cartItems.length})</Link></li>
            <button className="px-4" onClick={()=>{
              btnName === "LOGIN" ?
               setbtnName("LOGOUT")
               :setbtnName("LOGIN")
            }}>{btnName}</button>
            <li className="px-4 font-bold">{loggedInUser}</li>
         </ul>
       </div>
    </div>)
}
export default Header;