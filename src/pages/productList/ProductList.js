import React from 'react'
import "./ProductList.scss"
import Header from '../../components/Header/Header'
import { useNavigate } from 'react-router-dom'
import Footer from '../../components/Footer/Footer'
import ProductItem from '../../components/ProductItem/ProductItem'

export default function ProductList() {

  const navigate = useNavigate()

  return (
    <div className='productListPage page'>
      <Header title="Product List" buttons={[
        {
          text: "ADD",
          onClick: () => {navigate("/addproduct")}
        },
        {
          text: "MASS DELETE",
          onClick: () => {},
          id: "#delete-product-btn"
        },
      ]} />
      <section className='items main'>
        {[1,1,1,1,1,1,1,1,1,1,1,1,1,1].map(el => {
          return <ProductItem name={"JVC200123"} type={"Book"} price={1.00} size={700} />
        })}
      </section>
      <Footer />
    </div>
  )
}
