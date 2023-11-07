

import Email from '@/emails';
import { NextResponse } from 'next/server';
import {Resend} from 'resend';
const resend = new Resend(process.env.RESEND_API_KEY)
export async function POST(){
    resend.emails.send({
        from:"muzamil@panunrozgaar.com",
        to:"1ms18cv061@gmail.com",
        subject:"jbjbcjebcjebce",
        react:<Email/>
    })
    return NextResponse.json({})

}