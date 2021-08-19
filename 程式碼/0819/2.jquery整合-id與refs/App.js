import React, { useEffect, useRef } from 'react'
import $ from 'jquery'

function App(props) {
  const buttonRef = useRef()

  // 模擬didMount
  useEffect(() => {
    // jquery程式碼
    // 使用id
    $('#one').on('click', () => {
      alert('hello-id')
    })

    // 使用refs
    $(buttonRef.current).on('click', () => {
      alert('hello-refs')
    })
  }, [])

  return (
    <>
      <button id="one">Click Me(id)</button>
      <button ref={buttonRef}>Click Me(refs)</button>
    </>
  )
}

export default App
