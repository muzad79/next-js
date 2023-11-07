
import Link from 'next/link'
import React from 'react'
import { sort } from 'fast-sort';
import { CldImage } from 'next-cloudinary';

interface USERS {
    id:number,
    name:string,
    email:string,
    image:string
}
interface Props{
    sortBy:string
}
const UserTable = async({sortBy}:Props) => {
    const res= await fetch("http://localhost:3000/api/users")
   const users:USERS[] =await res.json()

   const sortedData=sort(users).asc(sortBy==="email"?user=>user.email:user=>user.name)
  return (
    <table className='table table-zebra'>
        <thead>
            <tr>
                <th>
                    Id
                </th>
                <th>
                    <Link href="/users?sortBy=name">Name</Link>
                </th>
                <th>
                <Link href="/users?sortBy=email">Email</Link>
                </th>
                <th>
                    Image
                </th>
            </tr>
        </thead>
        <tbody>
        {sortedData.map((user)=>(
        <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.name}</td> 

        <td>{user.email}</td>
        <td><CldImage src={user.image} alt='myimage' height={50} width={50}></CldImage></td>
        </tr>
    ))}

        </tbody>
    </table>
   
  )
}

export default UserTable