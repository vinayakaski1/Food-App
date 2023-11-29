import React from "react";
import {CDN_URL} from "../utils/constants";
import {Link} from "react-router-dom";
const RestaurantCard = props => {
  const {resData} = props;
  const {cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla, id} =
    resData?.info;
  // console.log(resData);

  return (
    <Link to={`/restaurant/${id}`}>
      <div className="m-4 ml-10 p-4 w-[250px] min-h-[400px] max-h-[400px] overflow-hidden rounded-md hover:shadow-xl duration-100   bg-gray-100 ">
        <img className="" alt="res-logo" src={CDN_URL + cloudinaryImageId} />
        <h3 className="font-bold py-4 text-xl">{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4 className="bg-green-200 inline-block p-1 rounded-md text-md font-bold">
          {avgRating} &#9733;
        </h4>
        <h4>{costForTwo.toUpperCase()}</h4>
        <h4>{sla.deliveryTime} Minutes</h4>
      </div>
    </Link>
  );
};

export const withPromotedLabel = RestaurantCard => {
  return props => {
    return (
      <div>
        <label>Promoted</label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
