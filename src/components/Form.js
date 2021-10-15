import React from 'react';


const Form = (props) => {
    const {
        submit,
        values,
        change

      } = props

    const onSubmit = evt => {
        evt.preventDefault()
        submit()
      }
    
    const onChange = evt => {
    
    const { name, value, checked, type } = evt.target;
    const valueToUse = type === 'checkbox' ? checked : value;
    change(name, valueToUse);
      }
    return (
        <div>
            
            <form onSubmit={props.submit} id='pizza-form'>
            <div className='name-input'>
                    <label>
                        <h2>Put your name</h2>
                        <input
                            id='special'
                            value={values.name}
                            onChange={onChange}
                            name='name'
                            type='text'
                        />
                    </label>
                </div>
                <h2>Build Your Own Pizza</h2>
             <p>
                <label> Choice Of Size
                <select
                    onChange={onChange}
                    value={values.size}
                    name='size'
                >
                    <option value=''>- Select -</option>
                    <option value='small'>Small</option>
                    <option value='medium'>Madium</option>
                    <option value='lange'>Large</option>
                
                </select>
                </label>
             </p>
                <h2>Choice of Souse</h2> 
                 <label> Original Red 
                <input 
                    type="radio"
                    name="souce"
                    value="souce1"
                    onChange={onChange}
                    checked={values.souce === 'souse1'}
                />
                </label>

                <label> BBQ
                <input
                    type="radio"
                    name="souce"
                    value="souce2"
                    onChange={onChange}
                    checked={values.souce === 'souce2'}
                />   
                </label>
           <div className="toppings">
                <p>
                <label>
                    <h2>Add Toppings:</h2>
                    
                <input 
                    id="toppings"
                    type="checkbox"
                    checked={values.pepperoni} 
                    onChange={onChange} 
                    name="pepperoni" 
                />Pepperoni
                <input 
                    id="toppings" 
                    type="checkbox" 
                    checked={values.sausage} 
                    onChange={onChange} 
                    name="sausage" 
                />Sausage
                <input 
                    id="toppings" 
                    type="checkbox" 
                    checked={values.canadianBacon} 
                    onChange={onChange} name="canadianBacon" 
                />Canadian Bacon
                 <input 
                    id="toppings" 
                    type="checkbox" 
                    checked={values.jalapeno} 
                    onChange={onChange} name="jalapeno" 
                />Jalapeno
                <input 
                    id="toppings" 
                    type="checkbox" 
                    checked={values.onions} 
                    onChange={onChange} name="onions" 
                />Onions
                <input 
                    id="toppings" 
                    type="checkbox" 
                    checked={values.mushroom} 
                    onChange={onChange} 
                    name="mushroom" 
                />Mushroom
                <input 
                    id="toppings" 
                    type="checkbox" 
                    checked={values.greenPepper} 
                    onChange={onChange}
                     name="greenPepper" 
                />Green Peppers
                   <input 
                    id="toppings" 
                    type="checkbox" 
                    checked={values.extraCheese} 
                    onChange={onChange}
                     name="extraCheese" 
                />Extra Cheese
                <input 
                    id="toppings" 
                    type="checkbox" 
                    checked={values.threeCheese} 
                    onChange={onChange}
                     name="threeCheese" 
                />Three Cheese
                  
                    </label>
            </p>
            </div>
            <div className='spacial'>
                    <label>
                        <h2>Special Instructions:</h2>
                        <input
                            id='special'
                            value={values.special}
                            onChange={onChange}
                            name='special'
                            type='text'
                        />
                    </label>


                </div>
                <button id='order-button' >Submit</button>
            </form>
        </div>
   )
    
}

export default Form;