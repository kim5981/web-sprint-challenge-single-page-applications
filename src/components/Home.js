import pizzaBox from "../media/pizzaBox.png"
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <>
            <div className="welcome-img">
                <img alt="pizza box drawing"/>
            </div>
            <div className="welcome-text">
                <h1>Pizza da Grotto</h1>
                <Link to="/pizza" id="order-pizza"> Build-a-Pizza! </Link>
            </div>
        </>
        
    )
}

export default Home;