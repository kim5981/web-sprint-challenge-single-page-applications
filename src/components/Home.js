import pizzaBox from "../media/pizzaBox.png"
const Home = () => {
    return (
        <>
            <div className="welcome-img">
                <img alt="pizza box drawing"/>
            </div>
            <div className="welcome-text">
                <h1>Pizza da Grotto</h1>
                <a id="order-pizza" href="/pizza">Build-a-Pizza!</a>
            </div>
        </>
        
    )
}

export default Home;