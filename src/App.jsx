import React, {useState} from 'react';
import './App.css';



function App() {
  let count = 0
  const [count2,setCount2] = useState(0)
  const increase = () => {
    count = count + 1
    setCount2(count2+1)
    console.log("count :"+ count, "count2 : "+count2);
  }
  return (
    <main>
      <div>{count}</div>
      <div>state:{count2}</div>
      <button onClick={increase}>증가</button>
    </main>
  );
}

export default App;