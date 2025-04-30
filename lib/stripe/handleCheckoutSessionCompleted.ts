import "server-only";
import Stripe from "stripe";
import { getCreditsPack, PackId } from "../billing";
import prisma from "../prisma";

// Stripe functionality removed - app is now free
export async function handleCheckoutSessionCompleted() {
  return;
}
