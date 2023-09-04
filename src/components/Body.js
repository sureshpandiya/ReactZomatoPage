import { useState, useEffect, useContext } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [listRestaurant, setListRestaurant] = useState([]);

  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();

    const response = json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

    setListRestaurant(response);
    setFilteredRestaurant(response);
  };

  const onlineStatus = useOnlineStatus();

  if(onlineStatus === false) 
    return (
      <h1>Look's ur Offline! Please internet conection.</h1>
    );

    const {loggedInUser, setUserName} = useContext(UserContext);

  return listRestaurant?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex items-center">
        <div className="search m-3 p-3">
          <input
            type="text"
            data-testid="searchInput"
            className="border border-solid border-black p-1 rounded-md"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button className="px-4 py-2 bg-green-100 m-4 rounded-lg"
            onClick={() => {
              console.log(searchText);

              const filteredRestaurant = listRestaurant.filter(
                (res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()) 
              );
              setFilteredRestaurant(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>
        <div className="search m-4 p-4 flex items-center">
          <button
            className="px-4 py-2 bg-gray-100 rounded-lg"
            onClick={() => {
              const filteredRestaurant = listRestaurant.filter(
                (res) => res.info.avgRating > 4
              );
              setFilteredRestaurant(filteredRestaurant);
              console.log(filteredRestaurant);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
        <div className="search m-4 p-4 flex items-center">
          <label>UserName : </label>
          <input className="border border-black p-1 ps-2 rounded-md" value={loggedInUser} onChange={(e) => setUserName(e.target.value)} />
        </div>
      </div>
      <div className="flex flex-wrap">
        {
          filteredRestaurant?.map((data) => (
            <Link key={data.info.id} to={"/restaurants/" + data.info.id}>
              <RestaurantCard resData={data} />
            </Link>
          ))
        }
      </div>
    </div>
  );
};

export default Body;