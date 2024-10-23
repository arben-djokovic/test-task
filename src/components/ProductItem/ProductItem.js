import React from 'react'
import './ProductItem.scss'

export default function ProductItem({product, onCheckboxChange}) {
  return (
    <section className='productItem'>
        <input onChange={(e)=>{onCheckboxChange(e, product.sku)}} defaultChecked={false} type="checkbox" name="delete-checkbox" className="delete-checkbox" id="delete-checkbox" />
        <div className="productInfo">
            <span>{product.name}</span>
            <span>{product.type}</span>
            <span>{product.price} $</span>
            {product.type == "Book" ? <span>Weight: {product.weight}KG</span> : product.type == "Furniture" ? <span>Dimension: {`${product.height}x${product.width}x${product.length}`}</span> : product.type == "DVD" ? <span>Size: {product.size} MB</span> : "undefined"}
        </div>
    </section>
  )
}
