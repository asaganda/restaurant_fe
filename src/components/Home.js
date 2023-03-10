import {useState} from 'react'
import Restaurant from "./Restaurant"
import EachRestaurant from "./EachRestaurant"

const Home = (props) => {
    const [restPage, setRestPage] = useState(0)

    const deleteRestaurant = (restaurant) => {
        props.handleDelete(restaurant)
    }

    const showRest = (id) => {
        setRestPage(id)
    }

    return(
        <>
        {restPage === 0 ?
            <div className="row">
                {props.restaurants.map((restaurant) => {
                    return (
                    <div className="all mx-3 my-3 card px-0 w-25 text-center" key={restaurant.id}>
                        <img src={restaurant.image} className="card-img-top w-100 restaurant-img" alt="restaurant"/>
                        <div className="card-body">
                            <h5 className="card-title">Name: {restaurant.name}</h5>
                            <p className="card-text"> Cuisine: {restaurant.cuisine}</p>
                            <p className="card-text"> {restaurant.reviews.length !== 0 ? "Reviews:" : null }</p>
                            {restaurant.reviews[0] ? 
                            <p className="fw-bold">{restaurant.reviews[0].comment}</p>
                            :
                            null}
                            <p className="fs-6 fst-italic">{restaurant.reviews.length !== 0 ? "click details for more reviews" : "Please add our first review, click details"}</p>
                            <div className='home-buttons'>
                                <button className=' mx-1 btn btn-sm btn-danger btn-block' onClick={() => showRest(restaurant.id)}>Details</button>
                                <button className='mx-1 btn btn-sm btn-danger btn-block' onClick={() => deleteRestaurant(restaurant)}>Delete</button>
                            </div>
                        </div>
                    </div>
                    )
                })}
            </div>
        :
        <></>
        }
        {
            props.restaurants.map((restaurant) => {
                return(
                    <div key={restaurant.id}>
                        {restPage === restaurant.id ? <EachRestaurant setPage={props.setPage} restaurant={restaurant} setRestPage={setRestPage} handleUpdate={props.handleUpdate}/> : <></> }
                    </div>
                )
            })
        }
        </>
    )
}

export default Home