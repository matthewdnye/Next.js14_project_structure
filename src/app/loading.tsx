import { DashboardSkeleton } from '@/components/shared/loading-skeleton';

export default function Loading() {
  return (
    <div className="container py-10">
      <div className="space-y-8">
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <h2 className="text-2xl font-semibold tracking-tight">
              Loading...
            </h2>
            <p className="text-sm text-muted-foreground">
              Please wait while we load your content
            </p>
          </div>
        </div>
        <DashboardSkeleton />
      </div>
    </div>
  );
}