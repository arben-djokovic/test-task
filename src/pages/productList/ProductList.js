import React from 'react'
import "./ProductList.scss"
import Header from '../../components/Header/Header'
import { useNavigate } from 'react-router-dom'
import Footer from '../../components/Footer/Footer'
import ProductItem from '../../components/ProductItem/ProductItem'

export default function ProductList() {

  const navigate = useNavigate()
  let productsSelected = []

  const checkboxChange = (e, sdk) => {
    if(e.target.checked){
      productsSelected = [...productsSelected, sdk]
    }else{
      productsSelected = productsSelected.filter(el => el != sdk)
    }
  }

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
      <main className='main'>
        <section className='items'>
          {[1,1,1,1,1,1,1,1,1,1,1,1,1,1].map((el, i) => {
            return <ProductItem key={i} onCheckboxChange={checkboxChange} sdk={i} name={"JVC200123"} type={"Book"} price={1.00} size={700} />
          })}
        </section>
      </main>
      <Footer />
    </div>
  )
}
