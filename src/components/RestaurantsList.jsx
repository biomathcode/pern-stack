import React, {useContext, useEffect} from 'react';
import toast from 'react-hot-toast';
import { useHistory } from 'react-router-dom';
import RestaurantFinder from '../apis/RestaurantFinder';
import { RestaurantContext } from '../context/RestaurantContext';
import StarRating from './StarRating';


const RestaurantsList = (props) => {
    const {restaurants, setRestaurants} = useContext(RestaurantContext)

    let history = useHistory()

    useEffect( () => {
        try{
            async function fetchData() {
                const response = await RestaurantFinder.get("/")
                setRestaurants(response.data.data)
                console.log(response.data.data)
            }
            fetchData();
            
        } catch(err) {
            console.log(err)
        }
    }, [])

    const handleDelete = async (e, id) => {
        e.stopPropagation();
        try{
           const response = await RestaurantFinder.delete(`/${id}`)

           if(response.status === 204) {
               toast.success(`Deleted restaurant with id: ${id}`)
           }
           console.log(response)
           setRestaurants(restaurants.filter(res => {
               return res.id !== id
           }))
        } catch(e) {

        }
    }
    const handleUpdate = async (e, id) => {
        e.stopPropagation();
        history.push(`/restaurants/${id}/update`);
    }

    const handleRestaurantSelect = async (id) => {
        history.push(`/restaurants/${id}`)
    }


    return (
        <div>
            <h1>RestaurantsList</h1>
            <table>
            <tbody>
                {restaurants &&  restaurants.map((el) => {
                    return (
                        <tr style={{cursor: 'pointer'}} onClick={() => handleRestaurantSelect(el.id)} key={el.id}>
                            <td>{el.id}</td>
                            <td>{el.name}</td>
                            <td>{el.location}</td>
                            <td>{"$".repeat(el.price_range)}</td>
                            <td><StarRating rating={el.average_rating}/></td>
                            <td>
                                <button onClick={(e) => handleUpdate(e, el.id)}>Update</button>
                            </td>
                            <td>
                                <button onClick={(e) => handleDelete(e, el.id)} >Delete</button>
                            </td>
                        </tr>
                    )
                })}
            </tbody>
            </table>
        </div>
    );
}

export default RestaurantsList;