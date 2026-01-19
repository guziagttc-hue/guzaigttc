'use client';
import { ReactNode } from 'react';
import { FirebaseProvider, initializeFirebase } from './';

export function FirebaseClientProvider({ children }: { children: ReactNode }) {
  const firebase = initializeFirebase();
  return <FirebaseProvider value={firebase}>{children}</FirebaseProvider>;
}
