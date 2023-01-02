import Restaurant from "./Restaurant"

const Home = (props) => {
    return(
        <>
            <div className="restaurants text-center">
                {props.restaurants.map((restaurant) => {
                    return (
                    <Restaurant restaurant={restaurant} key={restaurant.id} handleDelete={props.handleDelete}/>
                    )
                })}
            </div>
        </>
    )
}

export default Home