import {useState} from 'react'
import Restaurant from "./Restaurant"
import Edit from './Edit'
import Card from 'react-bootstrap/Card'


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
        <button className=' mx-3 btn btn-md btn-danger btn-block' onClick={() => backToList()}>Back to all restaurants</button>

        {showRest ? 
        <>
            <div className='card mx-3 my-5 w-25 show-restuarant'>
                <img src={props.restaurant.image} className="card-img-top h-50 w-100" alt="restaurant"/>
                <div className="card-body">
                    <h5 className="card-title">Name: {props.restaurant.name}</h5>
                    <p className="card-text"> Price: {props.restaurant.price}</p>
                    <p className="card-text"> Cuisine: {props.restaurant.cuisine}</p>
                    <p className="card-text"> Address: {props.restaurant.address}</p>
                    <p className="card-text"> Phone Number: {props.restaurant.number}</p>
                    <button className =' mx-1 btn btn-sm btn-danger btn-block' onClick={() => {setShowRest(false)}}>Edit</button>
                    <button className='mx-1 btn btn-sm btn-danger btn-block' onClick={() => deleteRestaurant(props.restaurant)}>Delete</button>
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