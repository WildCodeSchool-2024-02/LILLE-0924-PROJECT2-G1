import "./App.css";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <>
      <Outlet />
    </>
  );
}
export default App;
