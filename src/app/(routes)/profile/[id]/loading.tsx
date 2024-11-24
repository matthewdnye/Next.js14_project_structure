import { ProfileSkeleton } from '@/components/shared/loading-skeleton';

export default function ProfileLoading() {
  return (
    <div className="container py-10">
      <h1 className="mb-8 text-3xl font-bold">User Profile</h1>
      <div className="rounded-xl border bg-card p-6">
        <ProfileSkeleton />
      </div>
    </div>
  );
}