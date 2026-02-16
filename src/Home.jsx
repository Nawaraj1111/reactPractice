import React from 'react';
import { useEffect } from 'react';
import './Home.css';



export const Home = (props) => {
    const [value, setValue] = React.useState(0);
    const [islogin, setIsLogin] = React.useState(false);

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
const fruits = ["Nawaraj", "luitel", "Nepal", "Kathmandu", "Lalitpur"];
useEffect(() => {
        console.log('Value changed:', value);
      }, [value]);      
return (
        <>
      <div>
        <h1>Welcome to Home Page</h1>
         {/* <button onClick={() => setIsLogin(!islogin)}>{islogin ? 'Logout' : 'Login'}</button> */}
         {value>0 && <p>You are logged in!</p>}
      </div>
      
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
         <div>

        <ul>
                {fruits.map((fruit,index)=><li className='fruit-item' key={index}>{fruit}</li>)}
        </ul>
         </div>
    </div>
    </>
    )
}
