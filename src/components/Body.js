import React, { useState, useEffect } from 'react';
import RestoCard from './RestoCard';
import Shimmer from './Shimmer';

const BodyComponent = () => {
    const [listOfRes, setlistOfRes] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
            const json = await response.json();
            console.log(json); // Inspect the structure of the response
            const restaurantCards = json?.data?.cards?.[2]?.data?.cards || [];
            setlistOfRes(restaurantCards);
        } catch (error) {
            console.error("Failed to fetch data", error);
        }
    };

    if (listOfRes.length === 0) {
        return <h2>Lodiing</h2>;
    }

    return (
        <div className="body">
            <div className="filter">
                <button className="filter-res"
                    onClick={() => {
                        const filteredData = listOfRes.filter((res) =>
                            res.data.avgRating > 4
                        );
                        setlistOfRes(filteredData);
                    }}>
                    Top rated Restaurant
                </button>
            </div>
            <div className="res-container">
                {listOfRes.map((res) => {
                    return <RestoCard key={res.data.id} resData={res.data} />;
                })}
            </div>
        </div>
    );
};

export default BodyComponent;
