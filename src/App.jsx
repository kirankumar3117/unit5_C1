
import { findByDisplayValue } from '@testing-library/react';
import { useState } from 'react';
import './App.css'


function App() {
  const [score,Scorecount] = useState(76); 
  const [ball,Ballcount] = useState(8);
  const [bl,Blcount] = useState(50);

  const scorec = (value)=> {
  if(score>100){
    return
  }
  if(wk>10){
      return 
    }
      Scorecount ( score + value)
       
  }








  const [count,setcount]=useState(2)
  const addball= value => {
    if(score>100){
      return
    }
    if(wk>10){
      return 
    }
    Blcount(bl + 1)
    setcount (count + 1)
    if(count==5){
     setcount (count - 5)
      Ballcount ( ball + value)
    }
  //  Ballcount()
  }

const [wk,wkcount]=useState(2)
  const wkt =()=>{
    if(wk>10){
      return 
    }
    if(score>100){
      return
    }
    wkcount (wk + 1)
  }

  
  return (
   
    <div className="App">
      <h3>India:</h3>
      <div className="banner">
        <div>
          Score:{" "}
          <h1 className="scoreCount">
            {
              score
            }
          </h1>
        </div>
        <div>
          Wicket:{" "}
          <h1 className="wicketCount"> 
          {
            wk
            }
          </h1>
        </div>

        <div>
          Over:{" "}
          <h1 className="overCount">
            {
             ball} . {count
              // Show Over here in the format: "over.ball" eg: 4.5 means 4th over and 5th ball
              // if 1 more ball is thrown then over is now 5.0
              // you have to write logic to form this string from current ball number.
            }
          </h1>
        </div>
      </div>

      <div className="addScore">
        Add Score
        {/* these buttons should add the respective amount in the score */}
        <button className="addScore1" onClick={()=> scorec(1)} >Add 1</button>
        <button className="addScore4" onClick={()=> scorec(4)} >Add 4</button>
        <button className="addScore6" onClick={()=> scorec(6)}>Add 6</button>
      </div>

      <div className="addScore">
        Add Wicket - 
          { wk/* Increase the total number of balls thrown here. */}
        <button onClick={()=>{wkt()}}>Add 1 wicket</button>
      </div>

      <div className="addScore">
        Add ball
        {bl/* Increase the total number of balls thrown here. */}
        <button onClick={()=> addball(1)}>Add 1</button>
      </div>

      <h1 className='wonstatus'>{score > 100 ? "India Won":""}</h1>
    </div>
    
  );
}

export default App;
