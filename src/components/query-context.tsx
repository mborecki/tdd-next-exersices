"use client";

import { Suspense, lazy, useState } from "react";
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const ReactQueryDevtoolsProduction = lazy(() =>
    import('@tanstack/react-query-devtools/production').then((d) => ({
        default: d.ReactQueryDevtools,
    })),
)

export interface AuthContextProps {
    children: React.ReactNode;
}

export default function QueryContext({ children }: AuthContextProps) {
    const [queryClient] = useState(() => new QueryClient({
        defaultOptions: {
          queries: {
            // With SSR, we usually want to set some default staleTime
            // above 0 to avoid refetching immediately on the client
            staleTime: 60 * 1000,
          },
        },
      }));

    return <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={true} />
        <Suspense fallback={null}>
            <ReactQueryDevtoolsProduction />
        </Suspense>
        {children}
    </QueryClientProvider>;
}
