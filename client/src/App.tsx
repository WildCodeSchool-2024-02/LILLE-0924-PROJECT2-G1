import "./App.css";
import { Link, Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Outlet />
      <footer>
        <p>&copy;</p>
        <Link to="/about">About</Link>
      </footer>
    </>
  );
}
export default App;
