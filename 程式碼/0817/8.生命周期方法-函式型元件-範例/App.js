import React, { useState } from 'react'
import FC from './components/FC'

function App() {
  const [isAlive, setIsAlive] = useState(true)

  return (
    <>
      {isAlive && <FC />}
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
