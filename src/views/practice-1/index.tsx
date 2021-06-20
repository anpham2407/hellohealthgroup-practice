import React, { useState, useEffect } from "react";
import Button from '../../components/button';
import './index.css';

function Home() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // fetch("https://60ccc69771b73400171f88e7.mockapi.io/api/v1/employees")
    // .then(res => res.json())
    // .then(
    //   (result) => {
    //     console.log('result', result)
    //   },
    //   // Note: it's important to handle errors here
    //   // instead of a catch() block so that we don't swallow
    //   // exceptions from actual bugs in components.
    //   (error) => {
    //     console.log('error', error)
    //   }
    // )
  }, [count])

  const handleReset = () => {
    setCount(0);
  }

  const handleIncrease = () => {
    setCount(count + 1);
  }

  console.log('count', count);
  return <div className="App">
    <div className="container">
      <div className="practice-1">
        <div className="box">{count}</div>
        <div className="btn-group">
          <Button onClick={handleReset}>Reset</Button>
          <Button onClick={handleIncrease}>Increase</Button>
        </div>
      </div>
    </div>
  </div>;
}

export default Home;
