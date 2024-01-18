import connectDB from "@/libs/mongodbConnect";
import NewsletterSchema from "@/models/Newsletter";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { emailAddress } = await request.json();

    await connectDB();
    await NewsletterSchema.create({ emailAddress });

    return NextResponse.json(
      { message: "Subscribed To Newsletter!" },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Error in Subscribing!" },
      { status: 500 }
    );
  }
}
