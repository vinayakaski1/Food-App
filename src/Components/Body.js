import React, {useEffect, useState} from "react";
import RestaurantCard, {withPromotedLabel} from "./RestaurantCard";
import ShimmerCard from "./ShimmeCard";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [listOfRes, setListOfRes] = useState([]);
  const [filterRestaurant, setFilterRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");
  // console.log(listOfRes);

  const RestaurantWithPromoted = withPromotedLabel(RestaurantCard);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();

    setListOfRes(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilterRestaurant(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false)
    return (
      <h1>Looks like you're offline, please check your internet connection.</h1>
    );

  return listOfRes?.length === 0 ? (
    <ShimmerCard />
  ) : (
    <div>
      <div className="mx-50 flex w-[100%] justify-center">
        <div className="search p-4 m-4 flex justify-around items-center">
          <input
            type="text"
            placeholder="Search something..."
            className="w-80 p-2 border border-solid border-black pl-4 rounded-lg"
            value={searchText}
            onChange={e => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="p-2 w-40 bg-primary-700 bg-blue-400 hover:bg-blue-500 m-4 rounded-2xl text-white text-xl font-semibold"
            onClick={() => {
              const filterRestaurant = listOfRes.filter(res =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilterRestaurant(filterRestaurant);
            }}>
            Search
          </button>
        </div>
      </div>

      <div className="flex flex-wrap">
        {filterRestaurant &&
          filterRestaurant.map(restaurant =>
            restaurant.info.promoted ? (
              <RestaurantWithPromoted resData={restaurant} />
            ) : (
              <RestaurantCard key={restaurant.info.id} resData={restaurant} />
            )
          )}
      </div>
    </div>
  );
};

export default Body;
