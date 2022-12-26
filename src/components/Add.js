import {useState} from 'react'

const Add = (props) => {
    const [restaurant, setRestaurant] = useState({
        name: "",
        address: "",
        image: "",
        price: "",
        cuisine: "",
        number: ""
    })

    const handleChange = (event) => {
        setRestaurant({...restaurant, [event.target.name]: event.target.value})
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        props.handleCreate(restaurant)
    }

    return (
        <>
            <h3>Add new restaurant to list</h3>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name: </label>
                <input type="text" name="name" onChange={handleChange}/>
                <br />
                <label htmlFor="address">Address: </label>
                <input type="text" name="address" onChange={handleChange}/>
                <br />
                <label htmlFor="image">Image: </label>
                <input type="string" name="image" onChange={handleChange}/>
                <br />
                <label htmlFor="price">Price: </label>
                <input type="string" name="price" onChange={handleChange}/>
                <br />
                <label htmlFor="cuisine">Cuisine: </label>
                <input type="string" name="cuisine" onChange={handleChange}/>
                <br />
                <label htmlFor="number">Phone Num: </label>
                <input type="text" name="number" onChange={handleChange}/>
                <input type="submit"/>
            </form>
        </>
    )
}

export default Add