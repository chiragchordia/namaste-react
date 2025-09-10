import RestaurantCard from "./RestaurantCard";
import { use, useState } from "react";
import resList from "../utils/mockData";

const Body = () => {
  //local state variable - super powerfull variable

  const arr = useState();

  const listOfResturatnt = arr[0];
  const setListOfResturant = arr[1];

  // const [listOfResturatnt, setListOfResturant] = useState(resList);

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filterList = listOfResturatnt.filter(
              (list) => list.info.avgRating > 4
            );
            setListOfResturant(filterList);
            console.log(filterList);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {listOfResturatnt.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
        {/* <RestaurantCard resname="KFC" cuisines="Burger" /> */}
        {/* <RestaurantCard resData={resList[1]} />
        <RestaurantCard resData={resList[2]} />
        <RestaurantCard resData={resList[3]} />
        <RestaurantCard resData={resList[4]} /> */}
      </div>
    </div>
  );
};

export default Body;
