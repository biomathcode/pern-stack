import React from "react";
import toast, { Toaster } from "react-hot-toast";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useEffect, useState } from "react/cjs/react.development";
import RestaurantFinder from "../apis/RestaurantFinder";

const UpdatePage = () => {
  const {id} = useParams();
  let history = useHistory();
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [price, setPrice] = useState("");

//   console.log(test);

  useEffect(() => {
      const fetchdata = async() => {
          const response = await RestaurantFinder.get(`/${id}`)
          const data = response.data.data.restaurant
          console.log(data)
          setName(data.name)
          setLocation(data.location)
          setPrice(data.price_range)
      }
      fetchdata();
  },[])

  const handleSubmit = async (e) => {
      e.preventDefault();

      const updateRestaurants = await RestaurantFinder.put(`${id}`, {
          name, 
          location,
          price_range: price,
      })
      toast.success('Updated')
      function  gobackhome() {
          setTimeout(
              function() {
                history.push("/")
              }, 1000
          )
      }
      gobackhome()
      console.log(updateRestaurants);

  }

  return (
    <div>
      <h2>Update Restaurant</h2>
      <Toaster/>
      <div>
        <form action="">
          <div>
            <label htmlFor="name">Name</label>
            <input
            value={name}
              onChange={(e) => setName(e.target.value)}
              id="name"
              type="text"
            />
          </div>
          <div>
            <label htmlFor="location">location</label>
            <input
            value={location}
              onChange={(e) => setLocation(e.target.value)}
              id="location"
              type="text"
            />
          </div>
          <div>
            <label htmlFor="price_range">Price Range</label>
            <input
            value={price}
              onChange={(e) => setPrice(e.target.value)}
              id="price_range"
              type="number"
              max
            />
          </div>
          <button type="submit" onClick={handleSubmit}>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default UpdatePage;
