import React, { useState, useEffect } from 'react'
import { data } from '../data/'

function ProductList(props) {
  const [productData, setProductData] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  // 模擬一開始 didMount
  useEffect(() => {
    // 開啟載入用的動畫spinner
    setIsLoading(true)

    // 自伺服器載入資料
    setProductData(data)

    // 關閉載入用的動畫spinner
    setTimeout(() => {
      setIsLoading(false)
    }, 2000)
  }, [])

  const spinner = (
    <div className="spinner-grow text-primary" role="status">
      <span className="sr-only">Loading...</span>
    </div>
  )

  const display = (
    <ul>
      {productData.map((product, i) => {
        return (
          <li key={product.id}>
            {product.name}/{product.price}
          </li>
        )
      })}
    </ul>
  )

  return <>{isLoading ? spinner : display}</>
}

export default ProductList
