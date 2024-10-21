import React from 'react'
import './ProductItem.scss'

export default function ProductItem({name, type, price, size}) {
  return (
    <section className='productItem'>
        <input type="checkbox" name="delete-checkbox" id="delete-checkbox" />
        <div className="productInfo">
            <span>{name}</span>
            <span>{type}</span>
            <span>{price} $</span>
            {type == "Book" ? <span>book</span> : type == "Furniture" ? <span>Furniture</span> : type == "DVD-disc" ? <span>-disc</span> : "undefined"}
        </div>
    </section>
  )
}
