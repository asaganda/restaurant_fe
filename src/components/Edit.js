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


    return (
        <>
            <form onSubmit={handleSubmit}>
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
                <input type="submit"/>
            </form>
        </>
)
}

export default Edit
