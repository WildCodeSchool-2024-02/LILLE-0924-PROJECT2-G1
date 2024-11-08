import "./App.css";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <main />
      <footer>
        <p>&copy;</p>
        <p>
          About us
          {/* il faudra mettre le composant en lien avec react router */}
        </p>
        <p>
          emoji ?
          {/* je  propose de rajouter un petit emoji de fourchette ou de couvert*/}
        </p>
      </footer>
    </>
  );
}

export default App;
