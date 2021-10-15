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
                <h2>Build Your Own Pizza</h2>
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

                <h2>Choice of Souse</h2> 
                 <label> Souce 1  
                <input 
                    type="radio"
                    name="souce"
                    value="souce1"
                    onChange={onChange}
                    checked={values.souce === 'souse1'}
                />
                </label>

                <label> Souce 2
                <input
                    type="radio"
                    name="souce"
                    value="souce2"
                    onChange={onChange}
                    checked={values.souce === 'souce2'}
                />   
                </label>

            </form>
        </div>
   )
    
}

export default Form;