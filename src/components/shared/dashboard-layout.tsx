import { Sidebar } from '@/components/shared/sidebar';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="flex min-h-screen">
      <Sidebar className="w-64 flex-shrink-0" />
      <div className="flex-1 overflow-auto">
        <div className="container py-6">
          {children}
        </div>
      </div>
    </div>
  );
}