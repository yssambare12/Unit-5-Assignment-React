
import { useState } from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
    <Counter />
    </div>
  );
}

function Counter(){
  const [count,setCount]=useState(0);

  const increase=()=>{
    setCount(count+1);
  }
  
  const decrease=()=>{
    setCount(count-1);
  }

  const double=()=>{
    setCount(count*2);
  }

return( 
  <div>
    <h1>Counter:{count}</h1>
    <button onClick={increase}>+</button>
    <button onClick={decrease}>-</button>
    <div><button onClick={double}>Double</button></div>
  </div>  
  );
}

export default App;
