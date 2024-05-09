
// server-side-rendering in nextjs
import { NextResponse } from "next/server"
import { user } from "@/app/utiil/util"

export function GET(request){
    // return NextResponse.json({name : 'Amol' , age : 21 } , {status : 201}) 
    const data = user; 
    return NextResponse.json(data , {status : 200})
    
} 
  