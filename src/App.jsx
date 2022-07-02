import { useState, useEffect } from "react";

import "./App.css";
import Square from "./components/Square";

// const animatedStyles = {
//   backgroundColor: `rgb(${colors[0]},${colors[1]},${colors[2]})`,
// };

function App() {
  return (
    <div className="App">
      <Square />
    </div>
  );
}

export default App;
