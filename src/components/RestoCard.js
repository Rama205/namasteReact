import React from 'react';
import { CDN_URL } from '../utils/constants';


const RestoCard = (props) => {
    const {resData} = props;
    const { name, cuisines, avgRating, sla } = resData.info;

    return (
        <div className="m-4 p-4 w-[250px] rounded-lg hover:bg-gray-300">
            <img className="res-logo rounded-lg" alt="res-logo" src={CDN_URL} />
            <h3 className='font-bold py-2 text-lg'>{name}</h3>
            <h4>{cuisines.join(",")}</h4>
            <h4>{avgRating} stars</h4>
            <h4>{sla?.slaString}</h4>
        </div>
    );
}

export default RestoCard;
