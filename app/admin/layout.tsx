import React, { ReactNode } from 'react'
interface Props{
    children:ReactNode
}

const layout = ({children}:Props) => {
  return (
    <div className='flex '>
        <aside className='bg-slate-500 mr-7 p-5' >Side Bar</aside>
       <div>{children}</div> 

    </div>
  )
}

export default layout