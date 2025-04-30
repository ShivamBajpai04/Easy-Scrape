"use server";

import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export async function setupUser() {
  const { userId } = await auth();
  if (!userId) {
    throw new Error("Unauthenticated");
  }
  redirect("/home");
}
