import {useState} from 'react'
import Restaurant from "./Restaurant"
import Edit from './Edit'

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
                    <p className="card-text"> Phone Number: {props.restaurant.number}</p>
                    <button onClick={() => deleteRestaurant(props.restaurant)}>Delete</button>
                    <button onClick={() => {setShowRest(false)}}>Edit</button>
                </div>
            </div>
            
        </>
        :
        <>
            <Edit restaurant={props.restaurant} handleUpdate={props.handleUpdate} setShowRest={setShowRest}/>
        </>
        }
        
        </>
    )
}

export default EachRestaurant