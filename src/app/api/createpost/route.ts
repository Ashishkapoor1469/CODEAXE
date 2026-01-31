import { dbconnect } from "@/lib/dbConnection";
import { Post } from "@/models/userModel";
import { NextRequest } from "next/server";


export async function POST(req:NextRequest){
    dbconnect();
    const {Imgurl,userId,username,discription,likes,comments,} = await req.json();
    
}