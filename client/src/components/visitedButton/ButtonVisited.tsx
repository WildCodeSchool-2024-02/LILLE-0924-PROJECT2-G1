import { useState } from "react";
import "./ButtonVisited.css";

function ButtonVisited() {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };

  return (
    <>
      <button type="button" onClick={handleClick} className="button-visited">
        {click ? "✔️" : "🍽"}
      </button>
    </>
  );
}

export default ButtonVisited;
