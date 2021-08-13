import React from 'react'

function ChildA(props) {
  console.log(props)

  return (
    <>
      <h1>子女A</h1>
      <h2>{props.pData}</h2>
    </>
  )
}

export default ChildA
