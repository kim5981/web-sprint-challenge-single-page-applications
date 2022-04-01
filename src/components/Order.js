
export default function Order ({ details }) {
    if ( !details ) {
        return <h2>loading your order details..</h2>
    }
    return (
        <div className="order-wrapper">
            <h2>Order Confirmation</h2>
            <p> Name: { details.name } </p>
            <div className="order-details">
                Your Pizza: 
                <p>  { details.size } </p>
                {
                    !!details.toppings && !!details.toppings.length &&
                    <div>
                        Toppings:
                        <ul>
                            { details.toppings.map( ( topping, index ) => <li key={ index }> { topping } </li> ) }
                        </ul>
                    </div>
                }
            </div>
            
        </div>
    )
}