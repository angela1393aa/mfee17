import React, { useEffect, useRef } from 'react'
import $ from 'jquery'

function App(props) {
  const buttonRef = useRef()
  const buttonTwoRef = useRef()

  // 模擬didMount
  useEffect(() => {
    // jquery程式碼
    // 使用id
    $('#one').on('click', () => {
      alert('hello-id-jquery')
    })

    // 使用refs
    $(buttonRef.current).on('click', () => {
      alert('hello-refs-jquey')
    })

    // js
    document.getElementById('two').addEventListener('click', () => {
      alert('hello-id-js')
    })

    // js
    buttonTwoRef.current.addEventListener('click', () => {
      alert('hello-refs-js')
    })
  }, [])

  return (
    <>
      <button id="one">Click Me(id+jquery)</button>
      <button ref={buttonRef}>Click Me(refs-jquery)</button>
      <button id="two">Click Me(id+js)</button>
      <button ref={buttonTwoRef}>Click Me(refs-js)</button>
    </>
  )
}

export default App
