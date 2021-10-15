import React, { useState, useEffect } from 'react'
import HomePage from './components/HomePage.js'
import Form from './components/Form.js'
import PizzaPost from './components/Pizza.js'


import { Route, Link } from 'react-router-dom'



const App = () => {
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
    {/* <Route exact pat='/post'>
    <PizzaPost />
    </Route> */}
    <Route path="/pizza">
      <Form />
    </Route>
    <Route exact path="/"> 
      <HomePage />
    </Route>
      
    </div>
  );
};
export default App;
