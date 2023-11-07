"use client"
import React, { useState } from 'react'
import { CldUploadWidget ,CldImage} from 'next-cloudinary';


interface CloudinaryResult{
    public_id:string
}
const Upload = () => {
    const[publicId,setPublicId] = useState("");
  return (
    <>
    <CldImage src={publicId} alt='myImage' height={180} width={270}></CldImage>
    <CldUploadWidget uploadPreset='a9brpdn4' onUpload={(result,widget)=>{
        if(result.event != "success"){
            return
        }
        else{
            const info= result.info as CloudinaryResult
            setPublicId(info.public_id)
        }
    }} options={{
        sources:["local"],
        multiple:false,
        maxFiles:10
    }
        
    }>
        {({open})=><button onClick={()=>{
            open()
        }} className='btn btn-primary'>Upload</button>}
    </CldUploadWidget>
    </>
  )
}

export default Upload