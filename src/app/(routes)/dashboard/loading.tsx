import { DashboardSkeleton } from '@/components/shared/loading-skeleton';
import { DashboardLayout } from '@/components/shared/dashboard-layout';

export default function DashboardLoading() {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <h2 className="text-2xl font-semibold tracking-tight">
              Dashboard
            </h2>
            <p className="text-sm text-muted-foreground">
              Loading dashboard data...
            </p>
          </div>
        </div>
        <DashboardSkeleton />
      </div>
    </DashboardLayout>
  );
}