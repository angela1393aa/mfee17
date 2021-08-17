import React, { useState } from 'react'
import './App.css'

function App(props) {
  const [fields, setFields] = useState({
    username: '',
    email: '',
    password: '',
    agree: false, //核取方塊的預設值false代表未勾選
  })

  // 存入錯誤訊息用
  const [fieldErrors, setFieldErrors] = useState({
    username: '',
    email: '',
    password: '',
    agree: '', // 核取方塊的如果有不合法的訊息
  })

  const handleFieldChange = (e) => {
    // 1. 從原本的狀態物件拷貝
    // 2. 在拷貝的新物件上處理
    // 用新輸入的屬性與原物件作合併
    // https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Object_initializer#%E8%AE%A1%E7%AE%97%E5%B1%9E%E6%80%A7%E5%90%8D
    // https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Spread_syntax
    console.log(e.target.type, e.target.checked, e.target.value)
    const updatedValue =
      e.target.type === 'checkbox' ? e.target.checked : e.target.value

    const updatedFields = {
      ...fields,
      [e.target.name]: updatedValue,
    }

    // 3. 設定回原狀態物件
    setFields(updatedFields)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    // 另一種得到表單輸入值的方式(注意要有欄位需有name屬性才能得到)
    const formData = new FormData(e.target)
    console.log(formData.get('email'))
    console.log(formData.get('username'))
    console.log(formData.get('password'))

    // ex. 送到伺服器去
  }

  //  整個表單有變動時(ex.其中一個欄位有輸入時)
  // 認定使用者正在改正某個有錯誤的欄位
  // 清除某個欄位錯誤訊
  const handleFormChange = (e) => {
    console.log('目前更新欄位 ', e.target.name)
    const updatedFieldErrors = {
      ...fieldErrors,
      [e.target.name]: '',
    }

    // 3. 設定回原狀態物件
    setFieldErrors(updatedFieldErrors)
  }

  // 當表單有不合法的檢查出現時
  const handleFormInvalid = (e) => {
    // 擋住錯誤訊息的預設呈現的方式(popup)
    e.preventDefault()

    const updatedFieldErrors = {
      ...fieldErrors,
      [e.target.name]: e.target.validationMessage,
    }

    // 3. 設定回原狀態物件
    setFieldErrors(updatedFieldErrors)
  }

  return (
    <>
      <h1>表單驗証</h1>
      <form
        onChange={handleFormChange}
        onInvalid={handleFormInvalid}
        onSubmit={handleSubmit}
      >
        <label>帳號</label>
        <input
          name="username"
          type="text"
          value={fields.username}
          onChange={handleFieldChange}
          required
        />
        {fieldErrors.username !== '' && (
          <small className="error">{fieldErrors.username}</small>
        )}
        <br />
        <label>Email</label>
        <input
          name="email"
          type="email"
          value={fields.email}
          onChange={handleFieldChange}
          required
        />
        {fieldErrors.email !== '' && (
          <small className="error">{fieldErrors.email}</small>
        )}
        <br />
        <label>密碼</label>
        <input
          name="password"
          type="text"
          value={fields.password}
          onChange={handleFieldChange}
          required
          minLength="5"
        />
        {fieldErrors.password !== '' && (
          <small className="error">{fieldErrors.password}</small>
        )}
        <br />
        <input
          name="agree"
          type="checkbox"
          checked={fields.agree}
          onChange={handleFieldChange}
          required
        />
        我同意會員規定
        {fieldErrors.agree !== '' && (
          <small className="error">{fieldErrors.agree}</small>
        )}
        <br />
        <button type="submit">提交</button>
      </form>
    </>
  )
}

export default App
