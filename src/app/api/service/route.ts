import { NextRequest, NextResponse } from "next/server";
import fsPromises from 'fs/promises';
import path from 'path'
import crypto from 'crypto';

const Booking = path.join(process.cwd(), 'public/mocks/booking_info.json')

export async function GET() {
    try {
        const dishes = await fsPromises.readFile(Booking, 'utf-8')
        const json = JSON.parse(dishes)
        return NextResponse.json(json)
    } catch (error) {
        return new NextResponse(JSON.stringify({ message: "No dishes found!" }),
            { status: 404, headers: { 'content-type': 'application/json' } });
    }
}


export async function POST(req: NextRequest) {

    try {
        
        // Step 1: read json file
        const dishes = await fsPromises.readFile(Booking, 'utf-8')

        // Step 2: parse it into a JSON array
        const jsonArray = JSON.parse(dishes)

        // Step 3: destructure values from request body
        const { first_name, last_name, email, mobile,special_request } = await req.json()

        // Step 4: generate the ID for the new dish
        const id = crypto.randomBytes(16).toString('hex');

        // Step 5: add the new dish to the json array
        jsonArray.push({ id, first_name, last_name, email, mobile,special_request })

        // Step 6: convert JSON array back to string
        const updatedData = JSON.stringify(jsonArray)

        // Step 7: write the updated data to the JSON file
        await fsPromises.writeFile(Booking, updatedData)

        // Step 8: return response of a successful post (201)
        return new NextResponse(
            JSON.stringify({ message: "Booking created successfully!" }),
            { status: 201, headers: { 'content-type': 'application/json' } }
        )

    } catch (error) {
        return new NextResponse(JSON.stringify({ message: "Error reading or parsing the JSON file!" }),
            { status: 500, headers: { 'content-type': 'application/json' } });
    }

}