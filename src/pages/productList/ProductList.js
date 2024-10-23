import React, { useEffect, useState } from 'react'
import "./ProductList.scss"
import Header from '../../components/Header/Header'
import { useNavigate } from 'react-router-dom'
import Footer from '../../components/Footer/Footer'
import ProductItem from '../../components/ProductItem/ProductItem'

export default function ProductList() {

  const navigate = useNavigate()
  let productsSelected = []
  let [products, setProducts] = useState([])

  const checkboxChange = (e, sdk) => {
    if(e.target.checked){
      productsSelected = [...productsSelected, sdk]
    }else{
      productsSelected = productsSelected.filter(el => el != sdk)
    }
  }

  const fetchProducts = async() => {
    try{
      const response = await fetch("http://php-arben-djokovic.atwebpages.com/")
      if (!response.ok) throw new Error(`Response status: ${response.status}`);
      const res1 = await response.json()
      setProducts(res1)
    }catch(err){
      console.log(err)
    }
  }
  
  const deleteSelectedProducts = async() => {
    if(products.length == 0) return 
    try{
      const response = await fetch("http://php-arben-djokovic.atwebpages.com/", {
        method: "DELETE",
        body: JSON.stringify({skus: productsSelected}),
      })
      if(!response.ok) throw new Error('Network response was not ok' + response.statusText);
      setProducts([])
      fetchProducts()
    }catch(err){
      console.log(err)
    }
  }

  useEffect(()=>{
    fetchProducts()
  },[])

  return (
    <div className='productListPage page'>
      <Header title="Product List" buttons={[
        {
          text: "ADD",
          onClick: () => {navigate("/add-product")}
        },
        {
          text: "MASS DELETE",
          onClick: deleteSelectedProducts,
          id: "#delete-product-btn"
        },
      ]} />
      <main className='main'>
        <section className='items'>
          {products.length ? products.map((product, i) => {
            return <ProductItem key={i} onCheckboxChange={checkboxChange} product={product} />
          }) : "0 products found"}
        </section>
      </main>
      <Footer />
    </div>
  )
}
