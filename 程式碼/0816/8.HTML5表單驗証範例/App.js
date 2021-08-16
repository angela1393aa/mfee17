import React, { useState } from 'react'

function App(props) {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

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
          value={username}
          onChange={(e) => {
            setUsername(e.target.value)
          }}
          required
        />
        <label>Email</label>
        <input
          name="email"
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value)
          }}
          required
        />
        <label>密碼</label>
        <input
          name="password"
          type="text"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value)
          }}
          required
          minLength="5"
        />

        <button type="submit">提交</button>
      </form>
    </>
  )
}

export default App
