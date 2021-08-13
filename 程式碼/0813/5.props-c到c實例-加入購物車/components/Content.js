import React from 'react'

function Content(props) {
  const { setTotal, total } = props

  return (
    <>
      <div class="container">
        <h3>模擬加入商品</h3>
        <p>
          <button
            onClick={() => {
              setTotal(total + 1)
            }}
          >
            加入購物車
          </button>
        </p>
      </div>
    </>
  )
}

export default Content
