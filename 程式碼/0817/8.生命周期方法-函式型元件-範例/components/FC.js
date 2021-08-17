import React, { useEffect, useState } from 'react'

function FC(props) {
  const [total, setTotal] = useState(
    (function () {
      console.log('init(like constructor)')
      return 0
    })()
  )

  // 模擬 didMount
  useEffect(() => {
    console.log('componentDidMount')
    const newTotal = +localStorage.getItem('total')
    setTotal(newTotal)
  }, [])

  // 模擬 didUpdate
  useEffect(() => {
    if (total !== 0) {
      console.log('componentDidUpdate ', total)
    }
  }, [total])

  // 模擬 willUnmount
  useEffect(() => {
    return () => {
      console.log('componentWillUnmount')
    }
  }, [])

  return (
    <>
      {(function () {
        console.log('render')
      })()}
      <h1
        onClick={() => {
          setTotal(total + 1)
        }}
      >
        {total}
      </h1>
    </>
  )
}

export default FC
