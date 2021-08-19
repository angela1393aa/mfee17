import React, { useRef, useEffect } from 'react'
import $ from 'jquery'

function ButtonRef(props) {
  const buttonRef = useRef()

  // 模擬didMount
  useEffect(() => {
    // jquery程式碼
    // 使用refs
    $(buttonRef.current).on('click', () => {
      alert(props.text)
    })
  }, [])

  return (
    <>
      <button ref={buttonRef}>Click Me(refs-jquery)</button>
    </>
  )
}

export default ButtonRef
