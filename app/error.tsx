"use client"
import React from 'react'
interface Props{
    error:Error,
    reset:()=>void
}
const error = ({error,reset}:Props) => {
  return (

    <>
    <div>error </div>
    <button className='btn' onClick={()=>{
        reset()
    }}>Reset</button>
    </>
  )
}

export default error