import React, { useState } from 'react'

function App(props) {
  const [fields, setFields] = useState({
    username: '',
    email: '',
    password: '',
  })

  const handleFieldChange = (e) => {
    // 1. 從原本的狀態物件拷貝
    // 2. 在拷貝的新物件上處理
    // 用新輸入的屬性與原物件作合併
    const updatedFields = {
      ...fields,
      [e.target.name]: e.target.value,
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

  return (
    <>
      <h1>表單驗証</h1>
      <form onSubmit={handleSubmit}>
        <label>帳號</label>
        <input
          name="username"
          type="text"
          value={fields.username}
          onChange={handleFieldChange}
          required
        />
        <label>Email</label>
        <input
          name="email"
          type="email"
          value={fields.email}
          onChange={handleFieldChange}
          required
        />
        <label>密碼</label>
        <input
          name="password"
          type="text"
          value={fields.password}
          onChange={handleFieldChange}
          required
          minLength="5"
        />

        <button type="submit">提交</button>
      </form>
    </>
  )
}

export default App
