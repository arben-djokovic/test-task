import React, { useRef, useState } from 'react'
import "./AddProduct.scss"
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import { useNavigate } from 'react-router-dom'

export default function AddProduct() {

  const formRef = useRef(null)
  let [typeSelected, setTypeSelected] = useState("DVD")
  const navigate = useNavigate()

  const saveBtn = () => {
    if (formRef.current) {
      if (!formRef.current.reportValidity()) return;
      //code here
    }
  }

  return (
    <div className='addProductPage page'>
      <Header title="Product Add" buttons={[
        {
          text: "Save",
          onClick: saveBtn
        },     {
          text: "Cancel",
          onClick: () => {navigate("/")}
        },

      ]} />
      <main className='addProductMain main'>
        <form id='product_form' ref={formRef} onSubmit={(e)=>{e.preventDefault()}}>
          <div className="input">
            <span>SKU</span>
            <input id='sku' type="text" required />
          </div>
          <div className="input">
            <span>Name</span>
            <input id='name' type="text" required />
          </div>
          <div className="input">
            <span>Price ($)</span>
            <input id='price' type="number" required />
          </div>
          <div className="input">
            <span>Type Switcher</span>
            <select name="type" id="productType" onChange={(e)=>{setTypeSelected(e.target.value)}} value={typeSelected} >
              <option id='DVD' value="DVD">DVD</option>
              <option id='Furniture' value="Furniture">FURNITURE</option>
              <option id='Book' value="Book">BOOK</option>
            </select>
          </div>

          {typeSelected == "DVD" && <div id='DVD'>
              <div className="input">
                <span>Size (MB)</span>
                <input id='size' type="number" required />
              </div>
              <span id='description'>Product provide size in MB</span>
            </div>}
          {typeSelected == "Furniture" && <div id='Furniture'>
              <div className="input">
                <span>Height (CM)</span>
                <input id='height' type="number" required />
              </div>
              <div className="input">
                <span>Width (CM)</span>
                <input id='width' type="number" required />
              </div>
              <div className="input">
                <span>Length (CM)</span>
                <input id='length' type="number" required />
              </div>
              <span id='description'>Product provide dimensions in HxWxL format</span>
            </div>}
          {typeSelected == "Book" && <div id='Book'>
              <div className="input">
                <span>Weight (KG)</span>
                <input id='weight' type="number" required />
              </div>
              <span id='description'>Product provide weight in KG</span>
            </div>}
        </form>
      </main>
      <Footer />
    </div>
  )
}
