import React, { useEffect, useRef, useState } from "react";

const ForCounterRef = () => {
    console.log("Component Rendered"); // This logs every render
  const [count, setCount] = useState(0);
  const renderCount = useRef(1);

  useEffect(() => {
    renderCount.current++;
  });

  return (
    <div>
      <h1>Counter Checker {count}</h1>
      <p>Component Rendered: {renderCount.current}</p>
      <button onClick={() => setCount((c) => c + 1)}>Increment</button>
    </div>
  );
};

export default ForCounterRef;
