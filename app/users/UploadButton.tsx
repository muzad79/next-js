"use client"
import React, { useState } from 'react'
import { CldUploadWidget ,CldImage} from 'next-cloudinary';


interface CloudinaryResult{
    public_id:string
}
const UploadButton = () => {
    const[publicId,setPublicId] = useState("");
  return (
    <>
    <CldImage src={publicId} alt='myImage' height={180} width={270}></CldImage>
    <CldUploadWidget uploadPreset='a9brpdn4' onUpload={async(result,widget)=>{
        if(result.event != "success"){
            return
        }
        else{
            const info= result.info as CloudinaryResult
            setPublicId(info.public_id)
            const requestOptions = {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ image: info.public_id })
            };
           await fetch("http://localhost:3000/api/users/5",requestOptions)
        }
    }} options={{
        sources:["local"],
        multiple:false,
        maxFiles:10
    }
        
    }>
        {({open})=><button onClick={()=>{
            open();
           
        }} className='btn btn-primary'>Upload</button>}
    </CldUploadWidget>
    </>
  )
}

export default UploadButton