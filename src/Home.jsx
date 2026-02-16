import React from 'react';
import './Home.css';



export const Home = (props) => {
    const [value, setValue] = React.useState(0);

    const handleIncrement = () => {
            setValue(value + 1);
    }

    const handleDecrement = () => {
            setValue(value - 1);
    }

    const handleReset = () => {
            setValue(0);
    }
    const setColor = {
        color: value > 0 ? 'green' : value < 0 ? 'red' : 'yellow'
        }       
return (
    <div className='home-list'>
            <ul>
                    <li style={setColor}>{props.name} - {value}</li>
            </ul>
         <button onClick={handleIncrement}>+</button>
         <button onClick={handleDecrement}>-</button>
         <button onClick={handleReset}>Reset</button>
         <div>
                <p className='copyright'>copyright @{new Date().getFullYear()}</p>
         </div>
    </div>
    )
}
