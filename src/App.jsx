import React, { useState, useEffect } from "react";
import Confetti from "react-confetti";
import Image from "./image";
import Video from "./video";

function App() {
  const [numberOfPieces, setNumberOfPieces] = useState(600);

  useEffect(() => {
    const interval = setInterval(() => {
      setNumberOfPieces((prev) => {
        if (prev > 0) {
          return prev - 50; // Decrease the number of pieces
        } else {
          clearInterval(interval); // Clear the interval when pieces reach 0
          return 0;
        }
      });
    }, 200); // Adjust the interval duration for a smoother transition

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, []);

  return (
    <>
      <Confetti
        width={window.innerWidth}
        height={window.innerHeight}
        numberOfPieces={numberOfPieces}
        tweenDuration={2000}
      />
      <Image />
      {/* <Video /> */}
    </>
  );
}

export default App;
