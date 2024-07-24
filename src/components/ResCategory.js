import { useState } from "react"
import ItemList from "./ItemList"


const ResCategory =({data,showItems,setShowIndex,dummy})=>{
    // console.log("---",data)

    
    const handleClick =()=>{
        setShowIndex();
    }
    return <div>
            <div className="w-6/12 mx-auto my-4 shadow-lg p-4 bg-gray-100">
               <div className="flex justify-between">
               <span className="font-bold cursor-pointer"
               onClick={handleClick}>{data.title} ({data.itemCards.length})</span>
               <span>▼</span>
               </div>
                {showItems && <ItemList items={data.itemCards} dummy={dummy}/>}
            </div>
           
    </div>
}
export default ResCategory