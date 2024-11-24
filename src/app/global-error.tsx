'use client';

import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { AlertTriangle } from 'lucide-react';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <html>
      <body>
        <div className="flex min-h-screen flex-col items-center justify-center bg-background">
          <div className="container flex max-w-md flex-col items-center text-center">
            <AlertTriangle className="h-24 w-24 text-destructive" />
            <h1 className="mt-8 text-4xl font-bold">Something went wrong!</h1>
            <p className="mt-4 text-lg text-muted-foreground">
              {error.message || 'An unexpected error occurred. Our team has been notified.'}
            </p>
            <div className="mt-8 flex space-x-4">
              <Button onClick={() => reset()}>Try again</Button>
              <Button variant="outline" onClick={() => window.location.reload()}>
                Refresh page
              </Button>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}