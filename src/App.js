import React, { useState, useEffect } from 'react'
import HomePage from './components/HomePage.js'
import Form from './components/Form.js'
import PizzaPost from './components/Pizza.js'
import axios from 'axios'

import { Route, Link } from 'react-router-dom'
// name: string,
//     size: string,
//     topping1: bool,
//     topping2: bool,
//     special: string,

const initialFormValues = {
    name: '',
    size: '',
    souce1: false,
    souce2: false,
    pepperoni: false,
    sausage: false,
    canadianBacon: false,
    onions: false,
    jalapeno: false,
    mushroom: false,
    greenPepper: false,
    extraCheese: false,
    threeCheese: false,
    special: '',
}
const initialFormErrors = {
  name: '',
  size: '',
  souce: '',
  special: '',
}

const App = () => {

const [formValues, setFormValues] =useState([initialFormValues]);
const [formErrors, setFormErrors] = useState(initialFormErrors);
const [confirmation, setConfirmation] = useState(initialFormValues);
const [disabled, setDisabled] = useState();

const change = (name, value) =>{
  setFormValues({ ...formValues, [name]:value })
}
const setNewPizza = (newOrder) =>
{
    setConfirmation(newOrder);
    setFormValues(initialFormValues);
};

 const submit = () =>
    {
        const newOrder = {
            name: formValues.name.trim(),
            size: formValues.size,
            souce: ['souce1', 'souce2'].filter(top => !!formValues[top]),
            special: formValues.special.trim()
        };

        setNewPizza(newOrder);
    };

useEffect(() => {
  axios.get('https://reqres.in/api/orders')
    .then(res => {
     console.log(res.data.data)
     
    }).catch(err => console.error(err));
}, [])


  return (
    <div className="App">
    <header>
      <nav>
      <h1>Lambda Eats</h1>
        <Link to="/">Home Page</Link>
        <Link to="/pizza">Form</Link>
        {/* <Link to="/post">Pizza</Link> */}
        </nav>
    </header>
    <Route exact pat='/post'>
    <PizzaPost ditails={PizzaPost}/>
    </Route>
    <Route path="/pizza">
      <Form change={change} submit={submit} values={formValues} />
    </Route>
    <Route exact path="/"> 
      <HomePage />
    </Route>
      
    </div>
  );
};
export default App;
