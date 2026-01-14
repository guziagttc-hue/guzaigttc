import type { ReactNode } from 'react';
import { Sidebar } from '@/components/layout/sidebar';

export function AppShell({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      <div className="flex-1 md:ml-[260px]">{children}</div>
    </div>
  );
}
