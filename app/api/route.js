import Ticket from '../models/Ticket';
import { NextRespone } from "next/server";

export async function POST(req){
    try{
        const body = await req.json()
        const ticketData = body.formData
        await Ticket.create(ticketData)

        return NextRespone.json({ message: "Ticket Created!" }, { status: 200 })
    }
    catch(error){
        return NextRespone.json({ message: "Error", error }, { status: 500 })
    }
}