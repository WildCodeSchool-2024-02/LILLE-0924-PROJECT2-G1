import { useState } from "react";

function ButtonVisited() {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };

  return (
    <>
      <button type="button" onClick={handleClick}>
        {click ? "🍽" : "❤"}
      </button>
    </>
  );
}

export default ButtonVisited;
