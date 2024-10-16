import "./main.scss"
import Start from "./components/Start"
import { useState } from "react";

function App() {
  const [showStart, setShowStart] = useState(true);

  function handleStart () {
    setShowStart(false);
    console.log("Click")
  }

  return (
    <>
      {showStart ? <Start onButtonClick={handleStart} /> : "Tutaj właściwy komponent"}
    </>
  )
}

export default App
