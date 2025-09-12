import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import resList from "../utils/mockData";
import Shimmer from "./Shimmer";

const Body = () => {
  // console.log("rendered");

  //local state variable - super powerfull variable

  // const arr = useState(resList);
  // const listOfResturatnt = arr[0];
  // const setListOfResturant = arr[1];

  const [listOfResturatnt, setListOfResturant] = useState([]);
  const [filteredResturant, setFilteredResturant] = useState([]);

  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.99740&lng=79.00110&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();

    console.log(json);

    // Optional chaining
    const resList =
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;

    // console.log(resList);

    setListOfResturant(resList);
    setFilteredResturant(resList);
  };

  // conditional rendering
  // if (listOfResturatnt?.length == 0) {
  //   return <Shimmer />;
  // }

  return listOfResturatnt?.length == 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="search">
        <input
          type="search"
          className="search-box"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
            // fetchData();
          }}
        />
        <button
          onClick={() => {
            // console.log(listOfResturatnt);
            // 📝 Filtering the list based on the restaurant name

            const search = searchText.toLowerCase();

            const filteredList = listOfResturatnt.filter((res) => {
              const name = res.info.name;
              const rating = res.info.avgRating;
              const cuisines = res.info.cuisines
                ?.map((cuisine) => cuisine.toLowerCase())
                .join(", ");
              console.log(cuisines);

              const cost = res.info.costForTwo;

              return (
                name.includes(search) ||
                cost.includes(search) ||
                cuisines.includes(search)
              );
              // res.info.name.toLowerCase().includes(searchText.toLowerCase());
            });
            // console.log(filteredList);

            setFilteredResturant(filteredList);
          }}
        >
          search
        </button>
        <button
          className="btnreset"
          onClick={() => {
            setSearchText("");
            fetchData();
          }}
        >
          Reset
        </button>
      </div>
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filterList = listOfResturatnt.filter(
              (list) => list.info.avgRating > 4
            );
            setListOfResturant(filterList);
            // console.log(filterList);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {filteredResturant.map((restaurant) => (
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
