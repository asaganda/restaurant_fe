import {useState} from 'react'
import Restaurant from "./Restaurant"

const EachRestaurant = (props) => {
    const [showRest, setShowRest] = useState(true)

    const deleteRestaurant = (restaurant) => {
        props.handleDelete(restaurant)
    }
    
    const backToList = () => {
        props.setRestPage(0)
    }
    return(
        <>
        <button onClick={() => backToList()}>Back to all restaurants</button>
        
        <h1>{props.restaurant.id}</h1>

        {showRest ? 
        <>
            <div className="card">
                <img src={props.restaurant.image} className="card-img-top" alt="restaurant"/>
                <div className="card-body">
                    <h5 className="card-title">Name: {props.restaurant.name}</h5>
                    <p className="card-text"> Price: {props.restaurant.price}</p>
                    <p className="card-text"> Cuisine: {props.restaurant.cuisine}</p>
                    <p className="card-text"> Address: {props.restaurant.address}</p>
                    <p className="card-text"> Phone Number: {props.restaurant.phone}</p>
                    <button onClick={() => deleteRestaurant(props.restaurant)}>Delete</button>
                    {/* <button onClick={}>Edit</button> */}
                </div>
            </div>
            
            <button onClick={() => {setShowRest(false)}}>Edit {props.restaurant.id}</button>
        </>
        :
        <button onClick={() => {setShowRest(true)}}>Show {props.restaurant.id}</button>
        }

        {/* {props.restaurants.map((restaurant) => {
            return (
            <Restaurant restaurant={restaurant} key={restaurant.id} handleDelete={props.handleDelete}/>
            )
        })} */}

        
        </>
    )
}

export default EachRestaurant