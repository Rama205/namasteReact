// import {useEffect, useState} from 'react'
import Shimmer from './Shimmer';
import { useParams } from 'react-router-dom';
// import { MENU_API } from '../utils/constants';
import { Link } from "react-router-dom";
import useRestoMenu from '../utils/useRestoMenu';
import ResCategory from './ResCategory';
import {useState} from 'react'

const RestoMenu = () =>{
// const [resInfo,setResInfo] = useState(null)
const [showIndex, setShowIndex] = useState(null);
const { resId }= useParams();
const resInfo = useRestoMenu(resId);
const dummy = "dummyData"


    if(resInfo === null) return <Shimmer/>
const { name,avgRating,costForTwoMessage,cuisines  } = resInfo?.cards[2]?.card?.card?.info;
 const {itemCards} =  resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
 //console.log("...itemCards..",resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards)
const categories =  resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
    (c)=>
    c.card?.["card"]?.["@type"] === 
    "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
);

// console.log("=============22",categories)

    return <div className="text-center">
        <h1 className="text-center py-4 m-4 font-bold text-2xl">{name}</h1>
        <p className='font-bold text-lg'>{cuisines.join(",")}- {costForTwoMessage}</p>
        {categories.map((category, index)=><ResCategory key={category?.card?.card?.title} data ={category?.card?.card}
        showItems={index === showIndex ? true : false}
        setShowIndex={() => setShowIndex(index)} dummy={dummy}/>)}


    </div>
}

export default RestoMenu;