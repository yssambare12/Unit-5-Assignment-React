import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [count,setCount]=useState(0);
  const changeCount=(value)=>{
    setCount((prev)=>{
      return (prev<=0 && value===-1)?prev:(prev+value);
    });
    console.log("counter",count);
  };
  if(count>20)
  {
    return <div className='coun'>Counter has reached its limit</div>
  }
  return (
    <div className="App">
    <h3 className='coun'>Counter-{count}</h3>
    <button className='mar' onClick={()=>changeCount(1)}>Increment 1</button>
    <button className='mar' onClick={()=>changeCount(-1)}>Decrement 1</button>
    <button className='mar' onDoubleClick={()=>changeCount(count)}>Double</button>
    <div>Counter value is {count%2===0?"Even":"Odd"}</div>
    </div>
  );
}

export default App;
