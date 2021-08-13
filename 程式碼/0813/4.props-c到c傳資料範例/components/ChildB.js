import React, { useState } from 'react'

function ChildB(props) {
  const [cbData, setCbData] = useState('子女B資料')

  console.log(props)

  return (
    <>
      <h1>子女B</h1>
      <button
        onClick={() => {
          props.setPData(cbData)
        }}
      >
        送資料給ChildA元件
      </button>
    </>
  )
}

export default ChildB
