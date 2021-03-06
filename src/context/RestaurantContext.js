import React,{useState, createContext} from 'react';

export const RestaurantContext = createContext();

export const RestaurantContextProvider = props => {

    const [restaurants, setRestaurants] = useState();

    const [selectedRestaurants, setSelectedRestaurants] = useState();

    const addRestaurant = (restaurant) => {
        setRestaurants([...restaurants, restaurant])
    }

    return (
            <RestaurantContext.Provider value={{restaurants, setRestaurants, addRestaurant, selectedRestaurants, setSelectedRestaurants}}>
                {props.children}
            </RestaurantContext.Provider>
    )
}
