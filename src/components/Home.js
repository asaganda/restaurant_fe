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
                    // <Restaurant restaurant={restaurant} key={restaurant.id} handleDelete={props.handleDelete}/>
                    <div className=" mx-3 my-3 card w-25 h" key={restaurant.id}>
                        <img src={restaurant.image} className="card-img-top my-2 w-100 h-50" alt="restaurant"/>
                        <div className="card-body">
                            <h5 className="card-title">Name: {restaurant.name}</h5>
                            <p className="card-text"> Cuisine: {restaurant.cuisine}</p>
                            <button className=' mx-1 btn btn-sm btn-danger btn-block' onClick={() => showRest(restaurant.id)}>Details</button>
                            <button className='mx-1 btn btn-sm btn-danger btn-block' onClick={() => deleteRestaurant(restaurant)}>Delete</button>
                            {/* <button onClick={}>Edit</button> */}
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
                        {restPage === restaurant.id ? <EachRestaurant restaurant={restaurant} setRestPage={setRestPage} handleUpdate={props.handleUpdate}/> : <></> }
                    </div>
                )
            })
        }
        </>
    )
}

export default Home