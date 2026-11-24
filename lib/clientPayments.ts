// Portfolio-safe sample records. All names, addresses and prices are fictional.
// The live client/payment assignments are intentionally excluded from this repository.
export type ClientPayment = {
  id: string;
  title: string;
  description: string;
  amountCents: number;
  type: "one_time" | "subscription";
  interval?: "month" | "year";
};

export const clientPayments: Record<string, ClientPayment[]> = {
  "demo.customer@example.com": [
    {
      id: "demo-project-fee",
      title: "Example Project Fee",
      description: "Fictional one-time project payment for demonstration purposes.",
      amountCents: 25000,
      type: "one_time",
    },
    {
      id: "demo-maintenance",
      title: "Example Monthly Maintenance",
      description: "Fictional recurring maintenance plan for demonstration purposes.",
      amountCents: 5000,
      type: "subscription",
      interval: "month",
    },
  ],
};

// Deliberately empty: never publish live customer mappings or Stripe IDs.
export const clientStripeCustomerIds: Record<string, string> = {};

export function formatUSD(amountCents: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(amountCents / 100);
}
