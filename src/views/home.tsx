import React, { useState, useEffect } from "react";

function Home() {
  const [test, setTest] = useState('1');

  useEffect(() => {
    setTest('2');
  }, [test])

  console.log('test', test);
  return <div className="App">
    sssss
  </div>;
}

export default Home;
