import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import RestaurantFinder from '../apis/RestaurantFinder';
import AddReviews from '../components/AddReviews';
import Reviews from '../components/Reviews';
import StarRating from '../components/StarRating';
import { RestaurantContext } from '../context/RestaurantContext';


const Restaurant = () => {
    const {id} = useParams();   
    const {selectedRestaurants, setSelectedRestaurants} = useContext(RestaurantContext)
    useEffect(() => {
        const fetchdata = async() => {
            const response = await RestaurantFinder.get(`/${id}`)
            console.log(response)
            setSelectedRestaurants(response.data.data)
        }
        fetchdata();
    },[])

    return (
        <div>
            <div>{selectedRestaurants && (
                <>
                <div>
                    <h1>{selectedRestaurants.restaurant.name}</h1>
                </div>
                <div>
                    <Reviews reviews={selectedRestaurants.reviews}/>
                </div>
                <AddReviews/>
                </>
            )}</div>
        </div>
        
    );
}

export default Restaurant;