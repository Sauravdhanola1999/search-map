import React, { useRef } from "react";

const Ref = () => {
  const inputref = useRef(null);
  function handleClick() {
    inputref.current.focus();
  }
  return (
    <div>
      <h1>Ref</h1>
      <input ref={inputref} type="text" placeholder="Click to Focus" />
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
};

export default Ref;
