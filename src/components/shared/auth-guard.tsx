'use client';

import { useEffect, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { LoadingSpinner } from '@/components/shared/loading-spinner';

interface AuthGuardProps {
  children: React.ReactNode;
}

export function AuthGuard({ children }: AuthGuardProps) {
  const router = useRouter();
  const pathname = usePathname();
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

  useEffect(() => {
    // Replace this with your actual authentication check
    const checkAuth = async () => {
      try {
        // Example: const auth = await checkAuthStatus();
        const isAuthed = false; // Temporary placeholder
        setIsAuthenticated(isAuthed);
        
        if (!isAuthed && !pathname.startsWith('/auth')) {
          router.push('/auth/login');
        }
      } catch (error) {
        console.error('Auth check failed:', error);
        setIsAuthenticated(false);
        router.push('/auth/login');
      }
    };

    checkAuth();
  }, [pathname, router]);

  if (isAuthenticated === null) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <LoadingSpinner size="lg" />
      </div>
    );
  }

  if (!isAuthenticated && !pathname.startsWith('/auth')) {
    return null;
  }

  return <>{children}</>;
}