import { NextResponse } from "next/server";

export async function POST(request: Request) {
  // Billing functionality removed - app is now free
  return new NextResponse("Not Found", { status: 404 });
}
