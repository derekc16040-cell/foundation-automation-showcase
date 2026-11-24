# Foundation Automation — Developer Showcase

**Selected, sanitized source-code examples from the Foundation Automation client portal.**

This repository illustrates application logic from a Next.js / React / TypeScript project I developed and maintain. It is a **code-review portfolio**, not a complete deployable copy of the production website. Client identities, invoice details, real payment assignments, credentials, configuration, private assets, and other production data are deliberately excluded.

**Live business site:** https://foundationautomation.org  
**Portfolio focus:** full-stack web development, authenticated routes, payment API workflows, typed business data, and application integration.

## What to review

| Area | Selected source | What it demonstrates |
| --- | --- | --- |
| Authentication / route protection | [`middleware.ts`](middleware.ts) | Clerk middleware and guarded account routes |
| Client account interface | [`app/account/page.tsx`](app/account/page.tsx) | Server-rendered account UI, typed payment options and conditional rendering |
| Sign-in interface | [`app/client-sign-in/[[...sign-in]]/page.tsx`](app/client-sign-in/[[...sign-in]]/page.tsx) | Clerk authentication UI integrated into the site |
| Checkout integration | [`app/api/create-checkout-session/route.ts`](app/api/create-checkout-session/route.ts) | Authenticated server route, payment lookup and Stripe checkout session creation |
| Billing management | [`app/api/create-billing-portal/route.ts`](app/api/create-billing-portal/route.ts) | Server-side Stripe customer portal session creation |
| Webhook processing | [`app/api/stripe/webhook/route.ts`](app/api/stripe/webhook/route.ts) | Webhook signature verification, event parsing and account metadata updates |
| Business-data modeling | [`lib/clientPayments.ts`](lib/clientPayments.ts) | TypeScript types, structured payment options and amount formatting, with **fictional** sample data |

## High-level flow

1. Clerk authenticates the visitor. Middleware protects `/account`.
2. The account page selects payment options associated with the signed-in account.
3. An authenticated checkout route validates a submitted payment identifier against that account's permitted options.
4. Stripe hosts the checkout session; a signed webhook handles completed payments.
5. The account page reads payment metadata for display.

[Read the technical walkthrough](docs/TECHNICAL_WALKTHROUGH.md) for implementation details and topics I can demonstrate in a code review.

## Project stack

- TypeScript, JavaScript, React, Next.js App Router
- Clerk for user authentication
- Stripe API for payment checkout, billing portal and webhook events
- Tailwind CSS and responsive UI components in the broader original application
- Git / GitHub and Vercel as used in the original project

## About this copy

These files are **curated excerpts** from my original private website repository. The client payment-data module is replaced with obviously fictional examples. Some components reference assets and application configuration intentionally omitted here. Consequently **this repository is not intended to run or process payments on its own**; the linked source files are for technical assessment and discussion.

No real customer information, API keys, session files or live billing records are provided.

A real deployment would require separately configured authentication, payments, application assets and additional security and production validation. Do not reuse these excerpts as a ready-to-deploy payment system.

## My work and a walkthrough

I developed and maintain the Foundation Automation website and client account experience. These examples are intended to make the implementation concrete. I can walk through the source, describe the request lifecycle, explain the decisions and limitations, and discuss how I debug and extend it.

If you're reviewing this for a technical position, I can also demonstrate the separate OPS-to-EFI Pace automation and its order-processing workflow where client disclosure permissions allow.
