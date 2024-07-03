import React from 'react'

const ProductDetail = () => {
  return (
    <>
      <h1>제품 상세보기 화면</h1>
      <p>
        제품ID: {useParams.prodId}, 페이지번호: {useParams.pageNo}
      </p>
    </>
  )
}

export default ProductDetail