import React, { useState } from 'react'

function App(props) {
  const [inputText, setInputText] = useState('')
  const [textArea, setTextArea] = useState('')

  return (
    <>
      <h1>文字輸入框</h1>
      <input
        type="text"
        value={inputText}
        onChange={(e) => {
          setInputText(e.target.value)
        }}
      />
      <hr />
      <h1>文字區域</h1>
      <textarea
        value={textArea}
        onChange={(e) => {
          setTextArea(e.target.value)
        }}
      />
    </>
  )
}

export default App
