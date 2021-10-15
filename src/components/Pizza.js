import React from 'react';


const PizzaPost = ({details}) => {
    if (!details) {
        return <h3>Loading your order</h3>;
    }
return (
<div className=' submit'>
            <h2>{details.name}'s Order Details</h2>
            <p>Pizza Size: {details.size}</p>
            <div>
            Toppings:
            <ul>
                {details.toppings.map((item, idx) => <li key={idx}>{item}</li>)}
            </ul>
                </div>
            <p>Special Instructions: {details.special}</p>
            </div>
)
   
}

export default PizzaPost;