import Ticket from '../../models/Ticket';
import { NextResponse } from "next/server";

export async function POST(req){
    try{
        const body = await req.json()
        const ticketData = body.formData
        const newTicket = await Ticket.create(ticketData)

        return NextResponse.json({ message: "Ticket Created!", ticket: newTicket}, { status: 200 })
    }
    catch(error){
        return NextResponse.json({ message: "Error", error }, { status: 500 })
    }
}