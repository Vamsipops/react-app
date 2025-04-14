import catImg from '../assets/cat.jpg';
import { useState } from 'react';
import Button from '../Button';

function Card(){

    const [count, setCount] = useState(0)
    const handleClick = () =>{
        setCount (prev => prev +1);
    };

    return(
        <div className = "card">
        <img className = "card-img" src={catImg} alt="picture of 200*200"></img>
        <h2 className='card-title'>Cat counter</h2>
            <p className='card-des'> 
            {count === 0 
          ? 'Do NOT click the button!' 
          : `Number of times you disobeyed me: ${count}`}
            </p>
        <button className='card-button' onClick={handleClick}> click  </button>
        </div>
    );

    };


export default Card;