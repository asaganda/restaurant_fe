import {useState} from 'react'
import Restaurant from "./Restaurant"
import Edit from './Edit'
import Card from 'react-bootstrap/Card'


const EachRestaurant = (props) => {
    const [showRest, setShowRest] = useState(true)

    const deleteRestaurant = (restaurant) => {
        props.handleDelete(restaurant)
        props.setRestPage(0)
    }

    const backToList = () => {
        props.setRestPage(0)
    }
    return(
        <>
        

        {showRest ? 
        <>
            <div className='card show-restaurant text-center '>
                <img src={props.restaurant.image} className="each-image card-img-top h-50 w-100" alt="restaurant"/>
                <div className="card-body">
                    <h5 className="card-title">Name: {props.restaurant.name}</h5>
                    <p className="card-text"> Price: {props.restaurant.price}</p>
                    <p className="card-text"> Cuisine: {props.restaurant.cuisine}</p>
                    <p className="card-text"> Address: {props.restaurant.address}</p>
                    <p className="card-text"> Phone Number: {props.restaurant.number}</p>
                    <div className='each-buttons'>
                        <button className =' mx-1 btn btn-sm btn-danger btn-block' onClick={() => {setShowRest(false)}}>Edit</button>
                        <button className='mx-1 btn btn-sm btn-danger btn-block' onClick={() => deleteRestaurant(props.restaurant)}>Delete</button>
                    </div>
                    <button className='btn btn-md btn-danger btn-block back' onClick={() => backToList()}>Back to all restaurants</button>
                </div>
            </div>
            
        </>
        :
        <>
            <Edit setPage={props.setPage} restaurant={props.restaurant} handleUpdate={props.handleUpdate} setShowRest={setShowRest}/>
        </>
        }
        
        </>
    )
}

export default EachRestaurant