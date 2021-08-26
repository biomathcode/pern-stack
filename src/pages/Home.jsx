import React from 'react';
import AddRestaurant from '../components/AddRestaurant';
import RestaurantsList from '../components/RestaurantsList';
import {Notify} from '../components/Notification';


function Home() {
    return (
        <div>
            <AddRestaurant/>
            <RestaurantsList/>
            <Notify/>
        </div>
    )
}

export default Home;