import React from 'react'
import './ProductItem.scss'

export default function ProductItem({product, onCheckboxChange}) {
  return (
    <section className='productItem'>
        <input onChange={(e)=>{onCheckboxChange(e, product.sku)}} defaultChecked={false} type="checkbox" name="delete-checkbox" id="delete-checkbox" />
        <div className="productInfo">
            <span>{product.name}</span>
            <span>{product.type}</span>
            <span>{product.price} $</span>
            {product.type == "Book" ? <span>book</span> : product.type == "Furniture" ? <span>Furniture</span> : product.type == "DVD-disc" ? <span>-disc</span> : "undefined"}
        </div>
    </section>
  )
}
