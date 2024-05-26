import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Video from "./video.jsx";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import "./index.css";

import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route index element={<App />}></Route>
      <Route path="/video" element={<Video />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <MantineProvider>
    <RouterProvider router={router} />
  </MantineProvider>
);
