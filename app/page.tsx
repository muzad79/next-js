import Link from 'next/link'
import React from 'react'
import ProductCard from './components/productCard/ProductCard'
import { getServerSession } from 'next-auth'
import { authOptions } from './api/auth/[...nextauth]/route'

const page = async() => {
 const session = await getServerSession(authOptions)
  return (
    <div>
    <h1> hello {session && <span>{session.user!.name}</span> }</h1>
      <Link href='/users'>go to users</Link>
      <ProductCard/>
    </div>
  )
}

export default page