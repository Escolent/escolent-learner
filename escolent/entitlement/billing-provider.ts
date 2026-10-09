export interface BillingProvider {
  createCheckout(plan: "month" | "year"): Promise<{ url: string }>;
  applyVerifiedEvent(rawBody: string, signature: string): Promise<void>;
  requestCancelAtPeriodEnd(subscriptionId: string): Promise<void>;
  schedulePlanChange(subscriptionId: string, plan: "month" | "year"): Promise<void>;
}
