'use client';

import fetcher from '@/services/fetcher';
import { SWRConfig } from 'swr';

export default function Providers({ children }: { children: React.ReactNode }) {
  return <SWRConfig value={{ fetcher }}>{children}</SWRConfig>;
}
