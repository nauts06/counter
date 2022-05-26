import React,{useState} from 'react'
import "./Counter.css"
const Counter = ({count,xyz}) => {

  //const state = useState (0)
  // const [count,xyz] = state

const increCount =  ()=>{
  xyz(count+1)
}

const decreCount =()=>{
  xyz(count-1)
}

const double =()=>{
     xyz(count*2)
}

  return (
      <>  
          <div className="box" >
    <h1 style={{color:count%2!=0 ? "red":"green"}}>{count}</h1>
    <button onClick={decreCount}>decrease</button>
    <button onClick={increCount}>increase</button>
    <button onClick={double}>double</button>
         </div>
    </>
  )
}

export default Counter