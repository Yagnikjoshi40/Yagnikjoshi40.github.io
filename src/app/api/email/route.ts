import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const body = await request.json();
  return NextResponse.json({
    provider: process.env.EMAIL_PROVIDER || 'resend',
    status: 'queued',
    template: body.template || 'welcome-email'
  });
}
