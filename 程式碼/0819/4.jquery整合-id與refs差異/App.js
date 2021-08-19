import React from 'react'
import ButtonRef from './components/ButtonRef'
import ButtonId from './components/ButtonId'

function App() {
  return (
    <>
      <ButtonId text="1111" />
      <ButtonId text="2222" />
      <hr />
      <ButtonRef text="3333" />
      <ButtonRef text="4444" />
    </>
  )
}

export default App
