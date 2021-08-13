import React, { useState } from 'react'
import Content from './components/Content'
import Navbar from './components/Navbar'

function App() {
  const [total, setTotal] = useState(0)

  return (
    <>
      <Navbar total={total} />
      <Content setTotal={setTotal} total={total} />
    </>
  )
}

export default App
