import React, { useEffect } from 'react'
import ProductComponents from './ProductComponents'

import { useDispatch } from 'react-redux'
import { fetchProducts } from '../redux/action/Productsaction'
const ProductListing = () => {
    
  const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(fetchProducts())

    },[])

  return (
    <div className='ui grid container'>
        <ProductComponents />
        
    </div>
  )
}

export default ProductListing