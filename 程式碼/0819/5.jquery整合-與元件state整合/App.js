import React, { useEffect, useRef, useState } from 'react'
import $ from 'jquery'

function App(props) {
  const [data, setData] = useState(123)

  const buttonRef = useRef()

  // 模擬didMount+didUpdate
  useEffect(() => {
    // jquery程式碼
    // 使用id
    // 移掉原本的事件
    $('#one').off('click')

    // 加入新的事件
    $('#one').on('click', () => {
      alert(data)
    })

    // 使用refs
    // 移掉原本的事件
    $(buttonRef.current).off('click')
    // 加入新的事件
    $(buttonRef.current).on('click', () => {
      alert(data)
    })
  }, [data])

  return (
    <>
      <button id="one">Click Me(id)</button>
      <button ref={buttonRef}>Click Me(refs)</button>
      <hr />
      <button
        onClick={() => {
          setData(9999)
        }}
      >
        Change State to 9999
      </button>
      <button
        onClick={() => {
          setData(777)
        }}
      >
        Change State to 777
      </button>
    </>
  )
}

export default App
