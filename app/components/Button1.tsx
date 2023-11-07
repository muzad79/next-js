"use client"
import { useRouter } from 'next/navigation'
import React from 'react'

const Button1 = () => {
    const router =useRouter();
  return (
    <button onClick={()=>{

        router.push('/users')
    }} className='btn btn-primary'>create</button>
  )
}

export default Button1