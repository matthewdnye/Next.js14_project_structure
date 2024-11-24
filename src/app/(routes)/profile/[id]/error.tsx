'use client';

import { Button } from '@/components/ui/button';

export default function ProfileError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="container py-10">
      <h1 className="text-3xl font-bold mb-8">User Profile</h1>
      <div className="flex min-h-[400px] flex-col items-center justify-center">
        <h2 className="text-2xl font-bold">Something went wrong!</h2>
        <p className="mt-2 text-muted-foreground">
          {error.message || 'An error occurred while loading the profile'}
        </p>
        <Button onClick={() => reset()} className="mt-4">
          Try again
        </Button>
      </div>
    </div>
  );
}