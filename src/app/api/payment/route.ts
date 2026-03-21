import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const body = await request.json();
  return NextResponse.json({
    gateway: 'razorpay',
    mode: 'sandbox',
    amount: body.amount,
    currency: 'INR',
    checkoutUrl: 'https://dashboard.razorpay.com/app/test-mode'
  });
}
