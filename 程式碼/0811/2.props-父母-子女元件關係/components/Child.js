import React from 'react'

function Child(props) {
  console.log(props)

  return (
    <>
      <h1>{props.text}</h1>
    </>
  )
}

export default Child
