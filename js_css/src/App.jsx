import { useState, useRef } from 'react'
import './App.css'


function App() {
  const [count, setCount] = useState(0)
  const externalElt = document.querySelector("#reactElt>a")
  const externalRef = useRef(externalElt)

  function handleClick() {
    setCount(count + 1)
    externalRef.current.classList.toggle("bg-sky-500")


  }

  return (
    <div className="flex flex-col items-center">
      <h1>Klick mich</h1>
      <div className="card">
        <button className="btn btn-primary" onClick={handleClick}>
          {count}
        </button>
      </div>
    </div>
  )
}

export default App
