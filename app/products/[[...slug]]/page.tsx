import React from 'react'
interface Props{
    params:{slug:string[]},
    searchParams:{sortBy:string}
}

const page = ({params:{slug},searchParams:{sortBy}}:Props) => {
  return (
    <div>product page {sortBy}</div>
  )
}

export default page