import pizzaBox from "../media/pizzaBox.png"
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <>
            <div className="welcome-img">
                <img id="pizzaBox" src={ pizzaBox }alt="pizza box drawing"/>
            </div>
            <div className="welcome-text">
                <div id="grotto"> Pizza Grotto </div>
                <div id="da"> da </div>
                <Link to="/pizza" id="order-pizza"> Build-a-Pizza! </Link>
            </div>
        </>
        
    )
}

export default Home;