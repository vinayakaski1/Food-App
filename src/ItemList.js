import React from "react";
import {CDN_URL} from "./utils/constants";
import {useDispatch} from "react-redux";
import {addItem} from "./utils/cartSlice";

const ItemList = ({items}) => {
  const dispatch = useDispatch();
  const handleAddItem = item => {
    dispatch(addItem(item));
  };

  return (
    <div>
      {items.map(item => (
        <div
          key={item.card.info.id}
          className="p-2 m-2 border-gray-300 border-b-2 text-left flex justify-between">
          <div className="w-9/12">
            <div className="py-2">
              <span className="text-lg font-bold">{item.card.info.name}</span>
              <span>
                {" "}
                - ₹{" "}
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
              </span>
            </div>

            <p className="text-sm">{item.card.info.description}</p>
          </div>
          <div className="w-3/12 p-4 rounded-xl">
            <div className="absolute"></div>
            <img src={CDN_URL + item.card.info.imageId} className="w-full" />
            <button
              className="py-[5px] px-[5px] ml-8 my-2 rounded-lg bg-black text-white shadow-lg flex justify-end cursor-pointer"
              onClick={() => handleAddItem(item)}>
              Add+
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
