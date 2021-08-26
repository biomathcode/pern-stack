import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import RestaurantFinder from "../apis/RestaurantFinder";
import { RestaurantContext } from "../context/RestaurantContext";


const AddRestaurant = () => {
  const {addRestaurant} = useContext(RestaurantContext)

  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [price, setPrice] = useState("Price Range");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
     const response = await RestaurantFinder.post("/",
      {name,
        location,
        price_range: price
      } )

      if(response.status === 201) {
        toast.success(`added the new entry with id ${response.data.data[0].id}`)
        addRestaurant(response.data.data[0])
      }


      console.log(response)
    } catch(e) {
      console.log(e)
    }
  }
  return (
    <div>
      <form action="">
        <div className="ui form ">
          <div className="fields flex">
            <div className="field flex-c">
              <label>Name</label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                placeholder="Name"
              />
            </div>
            <div className="field flex-c">
              <label>Location</label>
              <input
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                type="text"
                placeholder="Location"
              />
            </div>
            <div className="field flex-c">
              <label>Rating</label>
              <select
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              >
                <option disabled>Price Range</option>
                <option value="1">₹</option>
                <option value="2">₹₹</option>
                <option value="3">₹₹₹</option>
                <option value="4">₹₹₹₹</option>
                <option value="5">₹₹₹₹₹</option>
              </select>
            </div>
            <div className="field">
              <button onClick={handleSubmit} type="submit" className="button">Add</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddRestaurant;
