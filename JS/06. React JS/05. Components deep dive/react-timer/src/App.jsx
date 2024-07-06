import Timer from './components/Timer'
import FancyTimer from './components/FancyTimer'
import './App.css'
import { useState } from 'react'

function App() {
  const [showTimer, setShowTimer] = useState(true);
  return (
    <>
      <Timer />

      {showTimer && (
        <>
          <FancyTimer />
          <button onClick={() => setShowTimer(false)}>TurnOff</button>
        </>
      )}

    </>
  )
}

export default App
