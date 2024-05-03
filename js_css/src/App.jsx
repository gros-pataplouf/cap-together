import { useState } from 'react'
import './App.css'


function App() {
  const [count, setCount] = useState(0)
 

  return (
    <>
      <h1>Klick mich an, ich bin eine React-Componente</h1>
      <div className="card">
        <button className="btn btn-primary" onClick={() => setCount((count) => count + 1)}>
          {count}
        </button>
      </div>
    </>
  )
}

export default App
