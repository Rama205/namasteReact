import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";


const ItemList = ({ items,dummy }) => {
    const dispatch = useDispatch();

    const handleAddItems=(item)=>{
        dispatch(addItem(item))
    }


    // console.log(dummy)
    return (
        <div>
            {items.map((item) => (
                <div key={item.card.info.id} className="p-2 m-2 border-gray-200 border-b-2 text-left flex items-center justify-between">
                    <div className="flex-grow">
                        <div className="py-2">
                            <span>{item.card.info.name}</span>
                            <span>  ₹ {item.card.info.price ? item.card.info.price / 100 : item.card.info.defaultPrice / 100}</span>
                        </div>
                        <div>
                            <p className="text-xs">{item.card.info.description}</p>
                        </div>
                    </div>
                    <div className="flex-shrink-0 ml-4">
                        <img src={CDN_URL} alt={item.card.info.name} className="w-20 h-auto"/>
                        <button className="absolute bg-blue-500 text-white text-xs p-1 rounded" onClick={() =>handleAddItems(item)}>Add +</button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ItemList;
