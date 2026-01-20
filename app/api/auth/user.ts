import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

/**
 * Example protected API route
 * GET /api/auth/user
 * Returns the current authenticated user ID
 */
export async function GET() {
  try {
    const { userId } = await auth();

    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    return NextResponse.json({ userId }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}
