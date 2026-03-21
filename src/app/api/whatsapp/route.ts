import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const body = await request.json();
  return NextResponse.json({
    provider: process.env.WHATSAPP_PROVIDER || 'twilio',
    status: 'sent',
    phone: body.phone,
    messagePreview: body.message?.slice(0, 120)
  });
}
