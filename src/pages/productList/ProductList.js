import React from 'react'
import "./ProductList.scss"
import Header from '../../components/Header/Header'
import { useNavigate } from 'react-router-dom'
import Footer from '../../components/Footer/Footer'

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
      <section className='productListMain main'>
      </section>
      <Footer />
    </div>
  )
}
