import React, { useState, useEffect } from "react";
import { useDisclosure } from '@mantine/hooks';
import { Modal } from "@mantine/core";
import { Link } from "react-router-dom";
import "./App.css";


function App() {
  const [showFlower, setShowFlower] = useState(false);
  const [opened, { open, close }] = useDisclosure(false);


  useEffect(() => {
    const timer = setTimeout(() => {
      setShowFlower(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
        <Modal opened={opened} onClose={close} title="Location">
          <div className="flex flex-col">

          <a className="text-white text-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" href="https://maps.app.goo.gl/wRrcdM1cJJUDS5eG7" target="_blank">Bor Location</a>
          <a className="text-white text-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" href="https://maps.app.goo.gl/wRrcdM1cJJUDS5eG7" target="_blank">Keina Location</a>
          </div>
      </Modal>
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
        <Link to='/video' className=" absolute text-3xl text-center text-white rounded-lg px-2  bg-gray-600 mt-[480px] ring-4 ring-teal-400">
          Click here for sweet video
        </Link>
        <div className=" absolute text-2xl text-center text-white rounded-lg px-2  bg-gray-600 mt-[530px]" onClick={open}>
          Location
        </div>
        <div className=" top-6 text-white  absolute font-satisfy">
          <h1 className="text-7xl font-semibold">Heijingpot</h1>
          <p className="text-3xl">14 June 2024</p>
          {/* <p className="text-3xl">Venue</p> */}
          {/* <p className="text-3xl">Patsoi Part-1 Awang Leikai</p> */}
        </div>
      </div>
    </div>
  );
}

export default App;
