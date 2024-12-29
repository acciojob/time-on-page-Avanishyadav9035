import React, {useState, useEffect } from "react";
import React from "react";
import './../styles/App.css';

const App = () => {
   const [seconds, setSeconds] = useState(0);
   const [url, setUrl] = useState("https://xfod7l.csb.app/");

   
    useEffect(() => {
      const interval = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds + 1);
      }, 1000);

      //cleanup interval on component unmount
      return ()=> clearInterval(interval);
    }, []);

   const handleBack=()=>{
      alert("Back button clicked");
   };

   const handleRefresh=()=>{
      setSeconds(0);
      alert("Page refreshed");
   };
   
  return (
    <div style={{
         backgroundColor: "black",
        color: "white",
        padding: "20px",
        fontFamily: "Arial, sans-serif",
        textAlign: "center",
        borderRadius: "10px",
        width: "80%",
        margin: "20px auto",
       }}
   >
   /*Browser Bar */
     <div style ={{
           display: "flex",
           alignItems: "center",
           justifyContent: "space-between",
           backgroundColor:  "#333",
           padding: "10px",
           borderRadius: "5px",
     }}
   >
       /*  Back button */
          <div onClick={handleBack}
            style={{
               width: "30px",
               height: "30px",
               backgroundColor: "gray",
               borderRadius: "50%",
               display: "flex",
               alignItems: "center",
               justifyContent: "center",
               marginRight:"30px",
               cursor:"pointer",
            }}
      >   
          ◀
          </div>
      /* Refresh Button */
          <div onClick={handleRefresh}
         style={{
            width: "30px",
            height: "30px",
            backgroundColor: "gray",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginRight: "10px",
            cursor: "pointer",
         }}
         >
            🔄
          </div>
      / * URL input */
   <input
               type="text"
               value={url}
                  readOnly
                     style={{
                        flex:1,
                        padding:"5px",
                        backgroundColor: "#222",
                        color:"white",
                        border:"none",
                        borderRadius: "3px",
                        marginLeft: "10px",
                     }}
      />
     </div>
      <div style={{ fontFamily:"Arial, sans-serif", textAlign: "center", marginTop:"20px"}}>
        {/* Do not remove the main div */}
       <h1>You&apos;ve been on this page for {seconds} seconds.</h1>
      </div>
     </div>
  );
};

export default App
