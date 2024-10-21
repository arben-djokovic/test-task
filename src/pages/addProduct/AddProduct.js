import React from 'react'
import "./AddProduct.scss"
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import { useNavigate } from 'react-router-dom'

export default function AddProduct() {

  const navigate = useNavigate()

  return (
    <div className='addProductPage page'>
      <Header title="Product Add" buttons={[
        {
          text: "Save",
          onClick: () => {alert("Saved")}
        },     {
          text: "Cancel",
          onClick: () => {navigate("/")}
        },

      ]} />
      <section className='addProductMain main'>fdasdas</section>
      <Footer />
    </div>
  )
}
