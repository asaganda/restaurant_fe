import React, { useState } from 'react'

const Edit = (props) => {

const [restaurant, setRestaurant] = useState({...props.restaurant})

const handleChange = (event) => {
    setRestaurant({ ...restaurant, [event.target.name]: event.target.value })
}

const handleSubmit = (event) => {
    event.preventDefault()
    props.handleUpdate(restaurant)
    props.setShowRest(true)
}

const goHome = () => {
    props.setPage(0)
}


    return (
        <>
            <form className='w-25 my-5 mx-auto d-flex flex-column align-items-center' onSubmit={handleSubmit}>
            <img class="mb-4" src="https://www.pngall.com/wp-content/uploads/8/Restaurant-Logo-PNG-Free-Image.png" alt="" width="125" height="125"></img>
            <h1 class="h3 mb-3 fw-normal">Edit Restaurant</h1>
                <label htmlFor="name">Name: </label>
                <input type="text" name="name" placeholder={props.restaurant.name} onChange={handleChange}/>
                <br />
                <label htmlFor="address">Address: </label>
                <input type="text" name="address" placeholder={props.restaurant.address} onChange={handleChange}/>
                <br />
                <label htmlFor="image">Image: </label>
                <input type="text" name="image" placeholder={props.restaurant.image} onChange={handleChange}/>
                <br />
                <label htmlFor="price">Price: </label>
                <input type="text" name="price" placeholder={props.restaurant.price} onChange={handleChange}/>
                <br />
                <label htmlFor="cuisine">Cuisine: </label>
                <input type="text" name="cuisine" placeholder={props.restaurant.cuisine} onChange={handleChange}/>
                <br />
                <label htmlFor="number">Phone Num: </label>
                <input type="text" name="number" placeholder={props.restaurant.number} onChange={handleChange}/>
                <input className='my-3 btn btn-lg btn-danger'  type="submit"/>
                <button className ='back-button btn btn-sm btn-danger btn-block' onClick={() => {goHome()}}>Back</button>
            </form>
        </>
)
}

export default Edit
