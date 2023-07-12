import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.jsx";
// import { MdHelp, MdHome, MdInfo } from "react-icons/md";
// import About from "./pages/About.jsx";
// import Contact from "./pages/Contact.jsx";
// import { createRoot } from 'react-dom/client';
export const pages = [
  {
    path: "/",
    element: <Home />,
    title: "Beranda",
    // icon: MdHome,
  },
  // {
  //   path: "/About",
  //   element: <About />,
  //   title: "Aturan",
  //   icon: MdInfo,
  // },
  // {
  //   path: "/Contact",
  //   element: <Contact />,
  //   title: "Instruksi",
  //   icon: MdHelp,
  // },
];

const router = createBrowserRouter([
  {
    element: <App />,
    children: pages,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
