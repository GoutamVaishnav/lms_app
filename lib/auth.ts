import { auth } from "@clerk/nextjs/server";

/**
 * Get the current user session
 * Use in Server Components or API routes
 */
export async function getCurrentUser() {
  const { userId } = await auth();
  return userId;
}

/**
 * Require authentication
 * Use in protected Server Components or API routes
 */
export async function requireAuth() {
  const { userId } = await auth();
  if (!userId) {
    throw new Error("Unauthorized - Authentication required");
  }
  return userId;
}
