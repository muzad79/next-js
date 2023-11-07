import React from 'react'
import AddtoCart from '../AddtoCart'
//import styles from './productCard.module.css'

const ProductCard = () => {
  return (
    <div className="p-3 m-4 bg-cyan-400 text-white hover:bg-cyan-500">card
        <AddtoCart/>
    </div>
  )
}

export default ProductCard