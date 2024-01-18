import connectDB from "@/libs/mongodbConnect";
import { NextResponse } from "next/server";
import NewPositionSchema from "@/models/NewPosition";

// GET ALL USER WALLETADDRESSES AUTOMATED POOLS
export async function GET(request, { params }) {
  try {
    const { address } = params;

    await connectDB();
    const datas = await NewPositionSchema.find({ walletAddress: address });

    return NextResponse.json({ datas }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Error fetching positions" },
      { status: 500 }
    );
  }
}
