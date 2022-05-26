import './App.css';
import Counter from './components/Counter';
import React from 'react'

function App() {
 var [count,setCount] =React.useState(0)
  return (
    <>
    <Counter count={count} xyz={setCount} />
    </>
  );
}

export default App;
