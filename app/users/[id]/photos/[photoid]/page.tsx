import React from 'react'
interface Props{
    params:{photoid:number,id:number}
}

const page = ({params:{photoid,id}}:Props) => {
  return (
    <div>photopage :{id}  {photoid}</div>
  )
}

export default page