import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { Todo } from './components/Todo';
function App() {
  return (
    <div className="App">
     <h1>Product Store</h1>
     <div className='griding'>
     <Todo/>
     
     
    </div>
    
  );
}

export default App;
