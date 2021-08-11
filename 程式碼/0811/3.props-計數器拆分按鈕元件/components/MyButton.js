import React from 'react'

function MyButton(props) {
  const { handleClick, value } = props

  return (
    <>
      <button
        onClick={() => {
          handleClick(value)
        }}
      >
        {value > 0 ? '+' + value : value}
      </button>
    </>
  )
}

export default MyButton
