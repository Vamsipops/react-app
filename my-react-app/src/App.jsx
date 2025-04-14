import { useState } from 'react';
import Header from './Header';
import Stage1 from "./stage1/Stage1"; 
import Stage2 from "./stage2/Stage2"; 

function App() {

  const [currentStage,setCurrentStage] = useState('stage1')

  return(
    <>
    <Header onNavigate={setCurrentStage} />
    {currentStage === 'stage1' && <Stage1/>}
    {currentStage === 'stage2' && <Stage2/>}
    </>
    
  );
}

export default App;
