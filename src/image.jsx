import React, { useState, useEffect } from "react";
import { useDisclosure } from "@mantine/hooks";
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
          <a
            className="text-white text-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            href="https://maps.app.goo.gl/wRrcdM1cJJUDS5eG7"
            target="_blank"
          >
            Bor Location
          </a>
          <a
            className="text-white text-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            href="https://maps.app.goo.gl/wRrcdM1cJJUDS5eG7"
            target="_blank"
          >
            Keina Location
          </a>
        </div>
      </Modal>
      <div
        className="relative h-screen bg-cover flex justify-center"
        style={{ backgroundImage: "url('together_pic.jpg')" }}
      >
        {/* <div
          className={`absolute inset-0 bg-cover ${
            showFlower ? "squeeze-in-out" : ""
          }`}
          style={{ backgroundImage: "url('flower.png')" }}
        /> */}
        <Link
          to="/video"
          className="gradiant absolute text-xl text-center text-white rounded-lg px-2  bg-gray-600 mt-[550px] ring-4 ring-teal-400"
        >
          Click here for sweet video
        </Link>
        <div
          className="absolute text-2xl text-center text-white rounded-lg px-2  bg-gray-600 mt-[600px]"
          onClick={open}
        >
          Location
        </div>
        <div className=" top-16  text-orange-600  absolute font-satisfy">
          <h1 className="text-xl font-thin">WEDDING INVITATION</h1>
          {/* <p className="text-xl">14 June 2024</p> */}
          {/* <p className="text-3xl">Venue</p> */}
          {/* <p className="text-3xl">Patsoi Part-1 Awang Leikai</p> */}
        </div>
        <img className="size-40 mt-8" src="design.png" alt="" />
      </div>
      <div className="absolute top-[410px] text-balance w-full text-teal-400 flex justify-center items-center flex-col font-serif ">
        <h1>Kangabam Aneet Mangang</h1>
        <h1>&</h1>
        <h1>Leichombam Mamata Devi</h1>
        <h1>on</h1>
        <h1 className="text-orange-600">FRIDAY | 14th JUNE 2024</h1>
      </div>
    </div>
  );
}

export default App;
