import React, { useEffect } from 'react'
import $ from 'jquery'

function ButtonId(props) {
  useEffect(() => {
    // jquery程式碼
    // 使用id
    $('#one').on('click', () => {
      alert(props.text)
    })
  }, [])

  return (
    <>
      <button id="#one">Click Me(id+jquery)</button>
    </>
  )
}

export default ButtonId
