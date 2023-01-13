import React, {useState} from 'react';
import './App.css';
import Condition from './components/Condition';

function App() {
  const [type, setType] = useState("A");

  const changeClickHandler =()=>{
    if (type ==="A") {
      setType("B")
    } else if (type ==="B"){
      setType("C")
    } else {setType("A")}
  }

  return (
    <div className="App">
      <div className='bcg'>
        <Condition type={type} />
        <Condition type={type} />
        <Condition type={type} />
      </div>
      

      <button className="change-btn" onClick={changeClickHandler}>
        {" "}
        Change Components{" "}
      </button>
    </div>
  );
}

export default App;
