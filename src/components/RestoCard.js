import React from 'react';
import { CDN_URL } from '../utils/constants';


const RestoCard = (props) => {
    const { name, cuisines, avgRating, deliveryTime } = props.resData;

    return (
        <div className="res-card" style={{backgroundColor:"#f0f0f0"}}>
            <img className="res-logo" alt="res-logo" src={CDN_URL} />
            <h3>{name}</h3>
            <h4>{cuisines}</h4>
            <h4>{avgRating} stars</h4>
            <h4>{deliveryTime} minutes</h4>
        </div>
    );
}

export default RestoCard;
