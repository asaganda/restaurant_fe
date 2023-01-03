import Restaurant from "./Restaurant"
import EachRestaurant from "./EachRestaurant"

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
            {/* <EachRestaurant restaurants={props.restaurants}/> */}
        </>
    )
}

export default Home