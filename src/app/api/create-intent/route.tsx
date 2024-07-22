import { NextResponse } from "next/server";

const Stripe = require("stripe");
const stripe = new Stripe(
  "sk_test_51PcYV0CmGS4n4L1AWSpJJKP3iJRd13Pwf6z1dF4FgQGdO5Wxn11HWwmOIwGjlFQ2hudhPH9BIkx6zpjtrG0WtGQT0072cmW4PC",
  {
    typescript: true,
    apiVersion: "2022-11-15",
  }
);

export async function POST(request: any) {
  try {
    const { amount } = await request.json();
    console.log({ amount });
    // Create a PaymentIntent with the specified amount
    const paymentIntent = await stripe.paymentIntents.create({
      amount: Number(amount) * 100,
      currency: "eur",
      automatic_payment_methods: {
        enabled: true,
      },
    });

    // Send the client secret to the client
    return NextResponse.json(paymentIntent.client_secret, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ message: error.message }, { status: 400 });
  }
}
