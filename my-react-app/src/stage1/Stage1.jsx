import Header from './Header1.jsx'
import Card from './Card.jsx'
import Toggle from './Toggle.jsx'
import Greeting from './Greeting.jsx'

import { useState } from 'react'

function Stage1() {

  const [bgColor,setBgColor] = useState('#FFFFFF')

  const handleBgColor = () =>{
    const colors = [ '#FFFFFF','#A2B5CD','#DAA520', '#8B4513','#708090','#A52A2A']
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    setBgColor(randomColor)
  }

  return(
    <nav style={{ backgroundColor: bgColor }}> 
    <button onClick={handleBgColor}>Change Background</button> 
    <Header/>
    
    <Card/>
    <hr/>
    <Greeting/>
    <hr/>
    <Toggle/> 
    </nav>
    
  );

}

export default Stage1;