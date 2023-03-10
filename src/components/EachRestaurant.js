import {useState} from 'react'
import Restaurant from "./Restaurant"
import Edit from './Edit'
import Card from 'react-bootstrap/Card'


const EachRestaurant = (props) => {
    const [showRest, setShowRest] = useState(true)
    // get specific restaurant info as well
    // const [newReview, setNewReview] = useState({ comment: ""})
    const [restInfo, setRestInfo] = useState({
        ...props.restaurant,
        reviews: [{ comment: "" }]
    })
    

    const deleteRestaurant = (restaurant) => {
        props.handleDelete(restaurant)
    }

    const backToList = () => {
        props.setRestPage(0)
    }

    const handleNewReview = (e) => {
        let localRest = {
            ...restInfo
        }
        localRest = {
            ...restInfo,
            reviews: [{ comment: e.target.value }]
        }
        setRestInfo(localRest)
    }

    const handleAddNewReview = (e) => {
        e.preventDefault()
        console.log(restInfo)
        props.handleUpdate(restInfo)
        setRestInfo(prev => ({
            ...prev,
            reviews: [{ comment: ""}]
        }))
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
                    <p className="card-text">Reviews:</p>
                    {props.restaurant.reviews.map(review => (
                        <p key={review.id} className="fw-bold">"{review.comment}"</p>
                    ))}
                    <p>Add a review:</p>
                    <form onSubmit={handleAddNewReview}>
                        <textarea className="mb-3" placeholder="hello" name="comment" value={restInfo.reviews[0].comment} onChange={handleNewReview} />
                        <button type="submit">Add review</button>
                    </form>
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