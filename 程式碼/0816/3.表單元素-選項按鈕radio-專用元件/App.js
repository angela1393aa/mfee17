import React, { useState } from 'react'
import RadioBox from './components/RadioBox'

function App(props) {
  const [inputText, setInputText] = useState('')
  const [textArea, setTextArea] = useState('')
  const [selectedOption, setSelectedOption] = useState('')
  // radio
  const [gender, setGender] = useState('')
  const genderOptions = ['男', '女', '不確定', '不願提供']

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
      <hr />
      <h1>下拉選單</h1>
      <select
        value={selectedOption}
        onChange={(e) => {
          setSelectedOption(e.target.value)
        }}
      >
        <option value="">請選擇</option>
        <option value="雞腿">雞腿</option>
        <option value="魯肉">魯肉</option>
        <option value="排骨">排骨</option>
      </select>
      <hr />
      <h1>選項按鈕</h1>
      {genderOptions.map((v, i) => {
        return (
          <RadioBox
            key={i}
            value={v}
            checkedValue={gender}
            setCheckedValue={setGender}
          />
        )
      })}
    </>
  )
}

export default App
