import {useState} from "react";

function Toggle(){

    const [isVisible, setIsVisible] = useState(false);

    const handleClick =() =>{
        setIsVisible (!isVisible)
    }


    return (
        <div style={{ margin: '1rem', textAlign: 'center' }}>
            <h2>Let's Toggle some text</h2>
        <button className="btn" onClick={handleClick}>
            {
                isVisible === false
                ? 'click to know a secret'
                : 'Time to hide the secret'
            }
        </button>
        <p> {isVisible === true
            ? 'I still text my ex-girlfrined'
            : ''
        }
        </p>
        </div>
    );
}

export default Toggle;