'use client';

import { Button } from '@/components/ui/button';
import { DashboardLayout } from '@/components/shared/dashboard-layout';

export default function DashboardError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <DashboardLayout>
      <div className="flex min-h-[400px] flex-col items-center justify-center">
        <h2 className="text-2xl font-bold">Something went wrong!</h2>
        <p className="mt-2 text-muted-foreground">
          {error.message || 'An error occurred while loading the dashboard'}
        </p>
        <Button onClick={() => reset()} className="mt-4">
          Try again
        </Button>
      </div>
    </DashboardLayout>
  );
}