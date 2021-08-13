import React, { useState } from 'react'
import ChildA from './ChildA'
import ChildB from './ChildB'

function Parent() {
  const [pData, setPData] = useState('')

  return (
    <>
      <h1>父母</h1>

      <hr />
      <ChildA pData={pData} />
      <hr />
      <ChildB setPData={setPData} />
    </>
  )
}

export default Parent
