import {useState} from 'react'
import Restaurant from "./Restaurant"

const EachRestaurant = (props) => {
    const [showRest, setShowRest] = useState(true)

    const backToList = () => {
        props.setRestPage(0)
    }
    return(
        <>
        <button onClick={() => backToList()}>Back to all restaurants</button>
        <h1>{props.restaurant.id}</h1>
        {showRest ? 
        <button onClick={() => {setShowRest(false)}}>Edit {props.restaurant.id}</button>
        : 
        <button onClick={() => {setShowRest(true)}}>Show {props.restaurant.id}</button>
        }

        {/* {props.restaurants.map((restaurant) => {
            return (
            <Restaurant restaurant={restaurant} key={restaurant.id} handleDelete={props.handleDelete}/>
            )
        })} */}

        {/* {props.restaurants.map((restaurant) => {
            return (
                <div className="card">
                    <img src={restaurant.image} className="card-img-top" alt="restaurant"/>
                    <div className="card-body">
                        <h5 className="card-title">Name: {restaurant.name}</h5>
                        <p className="card-text"> Price: {restaurant.price}</p>
                        <p className="card-text"> Cuisine: {restaurant.cuisine}</p>
                        <p className="card-text"> Address: {restaurant.address}</p>
                        <p className="card-text"> Phone Number: {restaurant.phone}</p>
                        <button onClick={() => deleteRestaurant(restaurant)}>Delete</button>
                        <button onClick={}>Edit</button>
                    </div>
                </div>
            )
        })} */}
        </>
    )
}

export default EachRestaurant