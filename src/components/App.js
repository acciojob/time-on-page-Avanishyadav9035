import React, {useState, useEffect } from "react";
import React from "react";
import './../styles/App.css';

const App = () => {
   const [seconds, setSeconds] = useState(0);

   
    useEffect(() => {
      const interval = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds + 1);
      }, 1000);

      //cleanup interval on component unmount
      return ()=> clearInterval(interval);
    }, []);
  return (
    <div style={{ fontFamily:"Arial, sans-serif", textAlign: "center", marginTop:"20px"}}>
        {/* Do not remove the main div */}
     <h1>You&apos;ve been on this page for {seconds} seconds.</h1>
    </div>
  );
};

export default App
