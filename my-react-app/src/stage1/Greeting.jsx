import { useState } from "react";


function Greeting(){
    const [name, setName] = useState("");
    const [isSubmit,setSubmit] = useState(false);

    const handlecChnage = (event) =>{
        setName (event.target.value)}

    const handleClick = () =>{
        setSubmit(!isSubmit)
    }
    return(

        <div style={{ margin: '1rem', marginTop: '0', textAlign: 'center' }}>
            <h2> Please provide your Name</h2>
            <div>{
                    isSubmit?
                    <h3> welcome , <strong>{name}</strong> 👋</h3>
                    :(<>
                    <input
                    style={{padding : '10px 20px',textAlign: 'center',  borderRadius: '5px', marginRight:'1em' }}
                    type = 'text'
                    value={name}
                    onChange = {handlecChnage}
                    />
                    <button className="btn" onClick={handleClick}>
                        Submit
                    </button>
                    </>
                    )
                }
                
            </div>
            </div>
    );
}

export default Greeting;