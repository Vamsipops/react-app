import catImg from './assets/cat2.jpeg';

function Card(){

    return(
        <div className = "card">
        <img className = "card-img" src={catImg} alt="picture of 200*200"></img>
        <h2 className='card-title'>Card Title</h2>
        <p className='card-des'>This is a simple card component.</p>
        </div>
    );

    };


export default Card;