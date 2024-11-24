import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { FileQuestion } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center">
      <div className="container flex max-w-md flex-col items-center text-center">
        <FileQuestion className="h-24 w-24 text-muted-foreground" />
        <h1 className="mt-8 text-4xl font-bold">Page Not Found</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Sorry, we couldn't find the page you're looking for. Please check the URL or return home.
        </p>
        <Button asChild className="mt-8">
          <Link href="/">Return Home</Link>
        </Button>
      </div>
    </div>
  );
}