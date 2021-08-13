import React, { useState } from 'react'
import ChildA from './ChildA'
import ChildB from './ChildB'

function Parent() {
  const [pData, setPData] = useState('父母元件資料')

  // 專門給子女B設定資料回來的callback
  const [pData2, setPData2] = useState('')

  return (
    <>
      <h1>父母</h1>
      來自子女B：{pData2}
      <hr />
      <ChildA pData={pData} />
      <hr />
      <ChildB setPData2={setPData2} />
    </>
  )
}

export default Parent
