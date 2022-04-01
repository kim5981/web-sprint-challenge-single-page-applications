import React from "react";

export default function PizzaForm (props) {

    const { 
        submit,
        change
    } = props;

    const addOrder = evt => {
        evt.preventDefault();
        submit();
    }

    const routeHome = () => {

    }

    const onChange = () => {

    }

    return (
        <>
            {/* Greeting Div */}
            <section className="order-greet">
                <h2>Build-a-Pizza!</h2>
                <div className="btn-wrap">
                    <button type="submit"> add to order </button>
                    <button className="homeBtn" onClick={ routeHome }> home </button>
                </div>
                <div className="errors">
                    <p> error placeholder </p>
                    <p> error placeholder </p>
                    <p> error placeholder </p>
                </div>
            </section>

            {/*  Pizza Form : Name + Size + 6 toppings + special instructions  */}
            <form id="pizza-form" onSubmit={ addOrder }>
                <div className="customer-info">
                    <h3>What'll ya have?</h3>
                </div>

                <label> name:
                    <input
                        id="name-input"
                        name="name"
                        type="text"
                        placeholder="enter name"
                        value=""
                        onChange={ onChange }
                    />
                </label>

                <label>pizza size: 
                    <select id="size-dropdown" name="size" value={ "" } >
                        <option value=""> -- select size -- </option>
                        <option value="s"> small </option>
                        <option value="m"> medium </option>
                        <option value="l"> large </option>
                        <option value="xl"> extra-large </option>
                    </select>
                </label>

                <h4> choose toppings: </h4>

                <label> pepperoni
                    <input
                        type="checkbox"
                        name="pepperoni"
                        checked=""
                        onChange={ onChange }
                    />
                </label>

                <label> mushroom
                    <input
                        type="checkbox"
                        name="mushroom"
                        checked=""
                        onChange={ onChange }
                    />
                </label> 
                
                <label> sausage
                    <input
                        type="checkbox"
                        name="sausage"
                        checked=""
                        onChange={ onChange }
                    />
                </label>
                    
                <label> green pepper
                    <input
                        type="checkbox"
                        name="greenpepper"
                        checked=""
                        onChange={ onChange }
                    />
                </label>

                <label> pineapple
                    <input
                        type="checkbox"
                        name="pineapple"
                        checked=""
                        onChange={ onChange }
                    />
                </label>

                <label> ham
                    <input
                        type="checkbox"
                        name="ham"
                        checked=""
                        onChange={ onChange }
                    />
                </label>     

                <label> Provide any additional instructions for your order: 
                    <input
                        id="special-text"
                        name="instructions"
                        type="text"
                        onChange={ onChange }
                        placeholder="special instructions for your order"
                        value=""
                    />
                </label>           
            </form>
        </>
    )
}