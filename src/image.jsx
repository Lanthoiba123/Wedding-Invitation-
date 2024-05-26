import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [showFlower, setShowFlower] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowFlower(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <div
        className="relative h-screen bg-cover flex justify-center"
        style={{ backgroundImage: "url('img.jpeg')" }}
      >
        <div
          className={`absolute inset-0 bg-cover ${
            showFlower ? "squeeze-in-out" : ""
          }`}
          style={{ backgroundImage: "url('flower.png')" }}
        />
        <div className=" absolute text-center text-white rounded-lg px-2  bg-gray-600 mt-[480px]">
          Click here for sweet video
        </div>
      </div>
    </div>
  );
}

export default App;
