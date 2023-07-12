import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Header />
      {/* <div className="container mx-auto"> */}
      <Outlet />
      {/* </div> */}
      <Footer />
    </>
  );
}
