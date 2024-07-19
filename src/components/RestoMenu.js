// import {useEffect, useState} from 'react'
import Shimmer from './Shimmer';
import { useParams } from 'react-router-dom';
// import { MENU_API } from '../utils/constants';
import { Link } from "react-router-dom";
import useRestoMenu from '../utils/useRestoMenu';

const RestoMenu = () =>{
// const [resInfo,setResInfo] = useState(null)
const { resId }= useParams();
const resInfo = useRestoMenu(resId);
    // useEffect(()=>{
    //     fetchData()
    // },[]);


    // const fetchData = async()=>{
    //     const data = await fetch(MENU_API+ resId)

    //     const json = await data.json();
       
    //     setResInfo(json.data)
    // }

    if(resInfo === null) return <Shimmer/>
const { name,avgRating,costForTwoMessage,cuisines  } = resInfo?.cards[2]?.card?.card?.info;
 const {itemCards} =  resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

    return <div className="menu">
        <h1>{name}</h1>
        <p>{cuisines.join(",")}- {costForTwoMessage}</p>
        <h2>Menu</h2>
        <ul>
            {itemCards.map((item)=>
            <li key = {item.card.info.id}>{item.card.info.name}-Rs.{item.card.info.price/100}</li>
            )}
          
        </ul>
    </div>
}

export default RestoMenu;