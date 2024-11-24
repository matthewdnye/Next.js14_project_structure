import { notFound } from 'next/navigation';
import { Suspense } from 'react';
import { LoadingSpinner } from '@/components/shared/loading-spinner';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface ProfilePageProps {
  params: {
    id: string;
  };
}

async function ProfileData({ userId }: { userId: string }) {
  // Simulate API call
  await new Promise((resolve) => setTimeout(resolve, 1500));
  
  // Simulate 404 for invalid IDs
  if (userId === 'invalid') {
    notFound();
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Profile Information</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <p className="text-sm font-medium text-muted-foreground">User ID</p>
            <p className="text-lg">{userId}</p>
          </div>
          <div>
            <p className="text-sm font-medium text-muted-foreground">Email</p>
            <p className="text-lg">user@example.com</p>
          </div>
          <div>
            <p className="text-sm font-medium text-muted-foreground">Member Since</p>
            <p className="text-lg">January 1, 2024</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default function ProfilePage({ params }: ProfilePageProps) {
  return (
    <div className="container py-10">
      <h1 className="text-3xl font-bold mb-8">User Profile</h1>
      <Suspense fallback={<LoadingSpinner size="lg" />}>
        <ProfileData userId={params.id} />
      </Suspense>
    </div>
  );
}