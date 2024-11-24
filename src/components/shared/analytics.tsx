'use client';

export function Analytics() {
  if (process.env.NEXT_PUBLIC_VERCEL_ENV === 'production') {
    // Add your analytics script here
    return null;
  }
  return null;
}