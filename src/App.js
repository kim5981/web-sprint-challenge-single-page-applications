import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import * as yup from "yup";
import axios from "axios";


import schema from "../src/testing/pizzaFormSchema"
import Home from "./components/Home";
import PizzaForm from "./components/PizzaForm";


const App = () => {

  const startInputs = {
    name: "",
    size: "",
    pepperoni: false,
    mushroom: false,
    sausage: false,
    greenpepper: false,
    pineapple: false,
    ham: false,
    instructions: ""
  }

  const [ formValues, setFormValues ] = useState( startInputs );

  const initialErrors = {
    name: "",
    size: "",
    instructions: ""
  }

  const [ formErrors, setFormErrors ] = useState( initialErrors );

  const validate = (name, value) => {
    yup.reach(schema, name)
    .validate(value)
      .then( () => setFormErrors( { ...formErrors, [name]: "" } ) )
      .catch( error => setFormErrors( { ...formErrors, [name]: error.errors[0] } ) )
  }

  const inputChange = (name, value) => {
    validate( name, value )
    setFormValues({
      ...formValues, [name]: value
    })
  }

  const [ orderDetails, setOrderDetails ] = useState( [] );

  const postNewOrder = newOrder => {
    axios.post("https://reqres.in/api/orders", newOrder)
      .then( res => {
        setOrderDetails( [ res.data, ...newOrder ] )
      } )
      .catch( err => console.error( err ) )
      .finally( () => {
        setFormValues( startInputs )
      } )
  }

  const submitForm = () => {
    const newOrder ={
      name: formValues.name.trim(),
      size: formValues.size.trim(),
      toppings: [ "pepperoni", "mushroom", "sausage", "greenpepper", "pineapple", "ham"].filter( topping => !!formValues[ topping ] ),
      instructions: formValues.instructions
    }
    postNewOrder(newOrder)
  }

  const initialDisabled = true;
  const [ disabled, setDisabled ] = useState( initialDisabled );

  useEffect( () => {
    schema.isValid(formValues)
    .then( valid => setDisabled( !valid ) )
  }, [ formValues ] )
  

  return (
    <div className="home">

      <Switch>
        <Route path="/pizza">
          <PizzaForm
            values={ formValues }
            submit={ submitForm }
            change={ inputChange }
            disabled={ disabled }
            errors={ formErrors }
          />
        </Route>

        <Route path="/">
          <Home/>
        </Route>
      </Switch>

    </div>
  );
};
export default App;
