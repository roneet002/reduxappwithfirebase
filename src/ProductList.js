import React from 'react'
import Product from './Product'

const DUMMY_PRODUCTS = [
  {id:1, price:6, name:'test1'},
  {id:2, price:5, name:'test2'}
]

const ProductList = () => {

  return (
    <>
        <h1 style={{textAlign:'center',fontSize:'1.5rem',marginTop:'30px' }}>Buy Your Favourite Products</h1>

        {DUMMY_PRODUCTS.map((item)=>{
          return(
           <Product id={item.id} price={item.price} name={item.name} key={item.id}  />
          )
        })}
  </>
  
  
  )
}

export default ProductList
