import React, { Suspense } from 'react'
import UserTable from './userTable'
import Link from 'next/link'
import UploadButton from './UploadButton'
interface Props{
    searchParams:{sortBy:string}
}

const page = ({searchParams:{sortBy}}:Props) => {

   


  return (
    <>
    <h1>Users</h1>
    <UploadButton/>
    <Link className='btn' href="/users/new">Add new user</Link>
    <Suspense fallback={<p>Loading....</p>}>
    <UserTable sortBy={sortBy}/>
    </Suspense>
   
    
    </>
  )
}

export default page