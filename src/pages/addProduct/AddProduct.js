import React, { useRef, useState } from 'react'
import "./AddProduct.scss"
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import { useNavigate } from 'react-router-dom'

export default function AddProduct() {

  const formRef = useRef(null)
  let [typeSelected, setTypeSelected] = useState("DVD")
  let [errors, setErrors] = useState({})
  const navigate = useNavigate()

  const saveBtn = async() => {
    setErrors({});
    const formData = new FormData(formRef.current);
    if (formRef.current) {
      if (!formRef.current.reportValidity()) return;
        const productData = {
          sku: String(formData.get('sku')),
          name: formData.get('name'),
          price: formData.get('price'),
          type: formData.get('type'),
          size:  Number(formData.get('size')) || null,
          height: Number(formData.get('height')) || null,
          width: Number(formData.get('width')) || null,
          length: Number(formData.get('length')) || null,
          weight: Number(formData.get('weight')) || null,
        };
        try{
          const response = await fetch("http://localhost/task-test-php-arben-djokovic/api/index.php", {
            method: "POST",
            body: JSON.stringify(productData),
          })

          if (!response.ok) {
            throw new Error('Network response was not ok' + response.statusText);
          }
          const data = await response.json()

          if (data.status === 'success'){
            navigate("/")
          } else if(data.errors){
            setErrors(data.errors);
          }

        }catch(err){
          console.log(err)
        }
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
            <input name='sku' id='sku' type="text" required />
            {errors.sku && <span className="error">{errors.sku}</span>}
          </div>
          <div className="input">
            <span>Name</span>
            <input name='name' id='name' type="text" required />
            {errors.name && <span className="error">{errors.name}</span>}
          </div>
          <div className="input">
            <span>Price ($)</span>
            <input name='price' id='price' type="number" required />
            {errors.price && <span className="error">{errors.price}</span>}
          </div>
          <div className="input">
            <span>Type Switcher</span>
            <select name="type" id="productType" onChange={(e)=>{setTypeSelected(e.target.value)}} value={typeSelected} >
              <option id='DVD' value="DVD">DVD</option>
              <option id='Furniture' value="Furniture">FURNITURE</option>
              <option id='Book' value="Book">BOOK</option>
            </select>
            {errors.type && <span className="error">{errors.type}</span>}
          </div>



          {/* for each type */}
          {/* for DVD */}
          {typeSelected == "DVD" && <div id='DVD'>
              <div className="input">
                <span>Size (MB)</span>
                <input name='size' id='size' type="number" required />
                {errors.size && <span className="error">{errors.size}</span>}
              </div>
              <span id='description'>Product provide size in MB</span>
            </div>}
            
          {/* for Furniture */}
          {typeSelected == "Furniture" && <div id='Furniture'>
              <div className="input">
                <span>Height (CM)</span>
                <input name='height' id='height' type="number" required />
                {errors.height && <span className="error">{errors.height}</span>}
              </div>
              <div className="input">
                <span>Width (CM)</span>
                <input name='width' id='width' type="number" required />
                {errors.width && <span className="error">{errors.width}</span>}
              </div>
              <div className="input">
                <span>Length (CM)</span>
                <input name='length' id='length' type="number" required />
                {errors.length && <span className="error">{errors.length}</span>}
              </div>
              <span id='description'>Product provide dimensions in HxWxL format</span>
            </div>}

            {/* for Book */}
          {typeSelected == "Book" && <div id='Book'>
              <div className="input">
                <span>Weight (KG)</span>
                <input name='weight'id='weight' type="number" required />
                {errors.weight && <span className="error">{errors.weight}</span>}
              </div>
              <span id='description'>Product provide weight in KG</span>
            </div>}
        </form>
      </main>

      <Footer />
    </div>
  )
}
