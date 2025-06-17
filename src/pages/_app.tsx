import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { ThemeProvider } from 'next-themes'
import '@/styles/globals.css'

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  // Scroll to top on route change
  useEffect(() => {
    const handleRouteChange = () => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'auto'
      });
    };

    router.events.on('routeChangeComplete', handleRouteChange);
    
    // Also scroll to top on initial load
    handleRouteChange();

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <Component {...pageProps} />
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  )
}