"use client"
import React from 'react'

const AddtoCart = () => {
  return (
    <button className='btn btn-primary' onClick={()=>{
        console.log("click")
    }}>Add to cart</button>
  )
}

export default AddtoCart