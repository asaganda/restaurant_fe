import React, { useState } from 'react'

const Edit = (props) => {

const [restaurant, setRestaurant] = useState({...props.restaurant})

const handleChange = (event) => {
    setRestaurant({ ...restaurant, [event.target.name]: event.target.value })
}

const handleSubmit = (event) => {
    event.preventDefault()
    props.handleUpdate(restaurant)
}

return (
    <>
            <details>
            <summary>Edit Restaurant</summary>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="name">Name: </label>
                    <input type="text" name="name" value={restaurant.name} onChange={handleChange}/>
                    <br />
                    <label htmlFor="address">Address: </label>
                    <input type="text" name="address" value={restaurant.address} onChange={handleChange}/>
                    <br />
                    <label htmlFor="image">Image: </label>
                    <input type="string" name="image" value={restaurant.image} onChange={handleChange}/>
                    <br />
                    <label htmlFor="price">Price: </label>
                    <input type="string" name="price" value={restaurant.price} onChange={handleChange}/>
                    <br />
                    <label htmlFor="cuisine">Cuisine: </label>
                    <input type="string" name="cuisine" value={restaurant.cuisine} onChange={handleChange}/>
                    <br />
                    <label htmlFor="number">Phone Num: </label>
                    <input type="number" name="number" value={restaurant.number} onChange={handleChange}/>
                    <input type="submit"/>
                </form>
            </details>
        </>
)
}

export default Edit
