
import { useState } from 'react';
import './App.css'


function App() {
  const [score,Scorecount] = useState(76)
  const [wicket,Wicketcount] = useState(2)
  const [ball,Ballcount] = useState(8)

  const scorec = (value)=> {
  if(score>100){
    return
  }
      Scorecount ( score + value)
       
  }

  const wicketadd = value =>{
    if(wicket>11){
      return
    }
    Wicketcount(wicket + value)
  }
  const [count,setcount]=useState(2)
  const addball= value => {
    if(score>100){
      return
    }
    setcount (count + 1)
    if(count==5){
     setcount (count - 5)
      Ballcount ( ball + value)
    }
  //  Ballcount()
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
              // show wicket here
              wicket
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
        <button className="addScore4" onclick={()=> scorec(4)}>Add 4</button>
        <button className="addScore6" onclick={()=> scorec(6)}>Add 6</button>
      </div>

      <div className="addWicket">
        Add Wicket
        {/* Increase the count of wicket */}
        <button onclick={()=>{wicketadd(1)}}>Add 1 wicket</button>
      </div>

      <div className="addBall">
        Add ball
        {/* Increase the total number of balls thrown here. */}
        <button onClick={()=> addball(1)}>Add 1</button>
      </div>

      <h1 className='wonstatus'>{score > 100 ? "India Won":""}</h1>
    </div>
    
  );
}

export default App;
