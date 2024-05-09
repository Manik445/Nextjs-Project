import { user } from "@/app/utiil/util";
import { NextResponse } from "next/server";

export function GET(request, content) {
    const userEmail = content.params.email.toLowerCase(); 
    const data = user.filter((item) => item.email.toLowerCase() === userEmail); 

    return NextResponse.json(data, {status: 200});
}
     
 