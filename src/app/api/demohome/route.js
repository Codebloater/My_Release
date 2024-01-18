import connectDB from "@/libs/mongodbConnect";
import NewPositionSchema from "@/models/NewPosition";
import { NextResponse } from "next/server";

// SET NEW POSITION FOR AUTOMATION
export async function POST(request) {
  try {
    const {
      userAddress,
      pool,
      tokenID,
      automationstatus,
      emailaddress,
      currentdate,
      futuredate
    } = await request.json();

    await connectDB();
    await NewPositionSchema.create({
      walletAddress: userAddress,
      poolAddress: pool,
      tokenId: tokenID,
      automationStatus: automationstatus,
      emailAddress: emailaddress,
      currentDate: currentdate,
      futureDate: futuredate
    });

    return NextResponse.json(
      { message: "New Position Automated" },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Error in Deploying!" },
      { status: 500 }
    );
  }
}

// GET ALL DATAS
export async function GET() {
  try {
    await connectDB();
    const datas = await NewPositionSchema.find();

    return NextResponse.json({ datas }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Error fetching positions" },
      { status: 500 }
    );
  }
}

/*
{
    "userAddress": "Addr2",
    "pool" : "Pool1",
    "tokenID": 1,
    "automationstatus" : true,
    "emailaddress": "Aghc",
    "currentdate": "2024-12-31T23:59:59.999Z",
    "futuredate":"2024-12-31T23:59:59.999Z"
} 
*/
