export function Footer() {
  return (
    <footer className="border-t">
      <div className="container flex h-16 items-center justify-between py-4">
        <p className="text-sm text-muted-foreground">
          Built with Next.js 14 and shadcn/ui
        </p>
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} All rights reserved
        </p>
      </div>
    </footer>
  );
}