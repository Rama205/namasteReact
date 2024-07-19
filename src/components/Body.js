import React, { useState, useEffect } from 'react';
import RestoCard from './RestoCard';
import Shimmer from './Shimmer';
import { Link } from 'react-router-dom';
import useOnlineStatus  from '../utils/useOnlineStatus';
const BodyComponent = () => {
    const [listOfRes, setlistOfRes] = useState([]
    //     [
    //     {
    //         data: {
    //             id: '1',
    //             name: 'Restaurant One',
    //             avgRating: 4.5,
    //             cuisines: ['Italian', 'Pizza'],
    //             image: 'https://via.placeholder.com/150',
    //         },
    //     },
    //     {
    //         data: {
    //             id: '2',
    //             name: 'Restaurant Two',
    //             avgRating: 4.2,
    //             cuisines: ['Chinese', 'Dumplings'],
    //             image: 'https://via.placeholder.com/150',
    //         },
    //     },
    //     {
    //         data: {
    //             id: '3',
    //             name: 'Restaurant Three',
    //             avgRating: 4.0,
    //             cuisines: ['Mexican', 'Tacos'],
    //             image: 'https://via.placeholder.com/150',
    //         },
    //     },
    //     {
    //         data: {
    //             id: '4',
    //             name: 'Restaurant Four',
    //             avgRating: 4.8,
    //             cuisines: ['Indian', 'Biryani'],
    //             image: 'https://via.placeholder.com/150',
    //         },
    //     },
    //     {
    //         data: {
    //             id: '5',
    //             name: 'Restaurant Five',
    //             avgRating: 3.9,
    //             cuisines: ['Thai', 'Noodles'],
    //             image: 'https://via.placeholder.com/150',
    //         },
    //     },
    // ]
);

    const [filterRest, setfilteredData] = useState();
    const [searchText, setSearchText] = useState("");

    useEffect(() => {
        fetchData();
    }, []);

    //Uncomment this to fetch real data when the API is working as expected
    const fetchData = async () => {
       
            const response = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
            let jsonData = await response.json();
            console.log(jsonData?.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)

    setlistOfRes(jsonData?.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    setfilteredData(jsonData?.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
};
    const handleSearch = () => {
        const filtered = listOfRes.filter((res) =>
            res.info.name.toLowerCase().includes(searchText.toLowerCase())
        );
        setfilteredData(filtered);
    };

const status= useOnlineStatus();

if(status === false) return <h1>You are offline please check your internet connectivity</h1>

    return listOfRes.length === 0 ? <Shimmer /> : (
        <div className="body">
            <div className="filter">
    <div className="search m-4 p-4 flex items-center">
        <input
            type="text"
            className="border border-solid border-black"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
        />
        <button className="px-4 py-2 shadow-lg bg-green-100 m-4 rounded-2xl" onClick={handleSearch}>
            Search
        </button>
        <button
            className="px-4 py-2 shadow-lg bg-gray-100 m-4 rounded-2xl"
            onClick={() => {
                const filteredData = listOfRes.filter(
                    (res) => res.info.avgRating > 4
                );
                setfilteredData(filteredData);
            }}
        >
            Top rated Restaurant
        </button>
    </div>
</div>
            <div className="flex flex-wrap">
                {filterRest.map((res) => (
                    <Link key={res.info.id} to ={"restoraunts/" + res.info.id}><RestoCard  resData={res} /></Link>
                ))}
            </div>
        </div>
    );
};

export default BodyComponent;
