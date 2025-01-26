import Ticket from "@/app/(models)/Ticket";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    //Parse the request body in JSON format
    const body = await req.json();
    const ticketData = body.formData;

    //Create a new Ticket document in the database using the TicketSchema
    await Ticket.create(ticketData);

    //Send a success response
    return NextResponse.json({ message: "Ticket Created!!!" }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}

export async function GET() {
  try {
    //find a ticket
    const tickets = await Ticket.find();

    //Send a success response
    return NextResponse.json({ tickets }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}
