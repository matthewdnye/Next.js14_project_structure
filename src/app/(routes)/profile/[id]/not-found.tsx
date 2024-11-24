export default function ProfileNotFound() {
  return (
    <div className="container py-10">
      <h1 className="text-3xl font-bold mb-8">User Profile</h1>
      <div className="flex min-h-[400px] flex-col items-center justify-center">
        <h2 className="text-2xl font-bold">Profile Not Found</h2>
        <p className="mt-2 text-muted-foreground">
          The requested profile could not be found
        </p>
      </div>
    </div>
  );
}