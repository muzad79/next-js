import { NextRequest, NextResponse } from "next/server";
import schema from "../schema";
import prisma from "@/prisma/client";
interface Props{
    params:{id:string}
}

export async function GET(request:NextRequest,{params:{id}}:Props){
    const user = await prisma.user.findUnique({
        where:{
            id:id
        }
    })
    if(!user){
       return NextResponse.json({error:"user not found"},{status:404})
    }
   return NextResponse.json(user)
}

export async function PUT(request:NextRequest,{params:{id}}:Props){
    
    const users = await request.json();
    // const validation = schema.safeParse(users)
    // if(!validation.success){
    //   return  NextResponse.json(validation.error.errors,{status:400})
    // }
    const existingUser =await  prisma.user.findUnique({
        where:{id:id}
    })
    if(!existingUser){
      return  NextResponse.json({error:"user not found"},{status:404})
    }
    const updatedUser=await prisma.user.update({
        where:{id:existingUser.id},
        data:{
            
            image:users.image
        }
    })
    return NextResponse.json(updatedUser,{status:200})

}
export async function DELETE(request:NextRequest,{params:{id}}:Props){
    const existingUser = await prisma.user.findUnique({
        where:{id:id}
    })
if(!existingUser){
    return NextResponse.json({error:"user not found"},{status:404})
}

await prisma.user.delete({
    where:{id:existingUser.id}
})
return NextResponse.json({message:"user deleted"},{status:200})
}

