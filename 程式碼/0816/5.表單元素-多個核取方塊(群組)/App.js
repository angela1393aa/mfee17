import React, { useState } from 'react'
import RadioBox from './components/RadioBox'

function App(props) {
  const [inputText, setInputText] = useState('')
  const [textArea, setTextArea] = useState('')
  const [selectedOption, setSelectedOption] = useState('')
  // radio
  const [gender, setGender] = useState('')
  const genderOptions = ['男', '女', '不確定', '不願提供']

  // checkbox
  // single
  const [agree, setAgree] = useState(false)
  // multi
  const [likeList, setLikeList] = useState(['芒果', '西瓜'])

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
      <hr />
      <h1>核取方塊</h1>
      <h2>單一勾選</h2>
      <input
        type="checkbox"
        checked={agree}
        onChange={(e) => {
          setAgree(e.target.checked)
        }}
      />
      <label>我同意網站註冊規定</label>
      <hr />
      <h2>多個勾選</h2>
      <input
        type="checkbox"
        value="芒果"
        checked={likeList.includes('芒果')}
        onChange={(e) => {
          // 如果目前在這狀態陣列 -> 移出
          if (likeList.includes(e.target.value)) {
            // 1. 先從狀態陣列拷貝出新陣列
            // 2. 在拷貝的新陣列上處理
            const newLikeList = likeList.filter((v, i) => {
              return v !== e.target.value
            })
            // 3. 設定回狀態陣列
            setLikeList(newLikeList)
          }

          // 如果沒在這狀態陣列中 -> 加入
          if (!likeList.includes(e.target.value)) {
            setLikeList([...likeList, e.target.value])
          }
        }}
      />
      <label>芒果</label>
      <input
        type="checkbox"
        value="西瓜"
        checked={likeList.includes('西瓜')}
        onChange={(e) => {
          // 如果目前在這狀態陣列 -> 移出
          if (likeList.includes(e.target.value)) {
            // 1. 先從狀態陣列拷貝出新陣列
            // 2. 在拷貝的新陣列上處理
            const newLikeList = likeList.filter((v, i) => {
              return v !== e.target.value
            })
            // 3. 設定回狀態陣列
            setLikeList(newLikeList)
          }

          // 如果沒在這狀態陣列中 -> 加入
          if (!likeList.includes(e.target.value)) {
            setLikeList([...likeList, e.target.value])
          }
        }}
      />
      <label>西瓜</label>
    </>
  )
}

export default App
