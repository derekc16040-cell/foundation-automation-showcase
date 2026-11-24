# Technical walkthrough — selected code examples

This document describes the specific code in this sanitized repository, not an independently deployable application.

## 1. Account protection and authentication

`middleware.ts` uses Clerk's `clerkMiddleware` and `createRouteMatcher` to protect account routes. The sign-in page embeds the Clerk component within a custom responsive layout.

**Review question:** How would an unauthenticated request be handled, and what changes would you make to protect additional routes?

## 2. Customer-specific payment selection

`app/account/page.tsx` uses `currentUser()` to obtain the authenticated user's email address, retrieves configured payment options, and conditionally renders outstanding or paid items. Client payment options are typed in `lib/clientPayments.ts`.

The payment records in this showcase are **fictional** and not representative of actual client billing.

**Review question:** Why must the server validate an allowed payment option instead of trusting an amount submitted in the browser?

## 3. Checkout and billing portal

`app/api/create-checkout-session/route.ts` reads the authenticated user, parses a submitted payment ID and finds that item among the user's allowed options. It creates a Stripe checkout session using server-side credentials from an environment variable.

`app/api/create-billing-portal/route.ts` also checks authentication before creating a billing portal session for an account with a mapped Stripe customer ID.

**Review question:** Where are secrets stored, how does the application associate a user with a payment, and where should production logging or validation be strengthened?

## 4. Stripe webhook handling

`app/api/stripe/webhook/route.ts` obtains the raw request body and Stripe signature, validates the event using the configured webhook signing secret, and handles the completed-checkout event. It then records payment-related information in Clerk private metadata.

**Review question:** How would you handle duplicate webhook deliveries, retries and merging payment histories? The original excerpt should be treated as a point for discussion, not a complete reference implementation of payment idempotency.

## 5. Skills these excerpts are meant to illustrate

- Reading and writing typed server-side JavaScript/TypeScript
- Working with REST-like server endpoints and external SDKs
- Authentication-aware business logic and conditional UI
- Structured data modeling and data flow between app, payment processor and identity system
- Reasoning about operational and security limitations

## Portfolio note

The actual production repo remains private. This copy intentionally omits real client information, billing assignments, secrets, private URLs, external artwork, and other sensitive assets. The showcase includes no live credentials and should not be configured for actual payments.
