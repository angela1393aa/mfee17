import React, { useState } from 'react'
import CC from './components/CC'

function App() {
  const [isAlive, setIsAlive] = useState(true)

  return (
    <>
      {isAlive && <CC />}
      <button
        onClick={() => {
          setIsAlive(!isAlive)
        }}
      >
        {isAlive ? '再見' : '出現吧'}
      </button>
    </>
  )
}

export default App
