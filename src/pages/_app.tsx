import type { AppProps } from 'next/app';
import '../styles/globals.css';
import '../styles/animations.css';
import { LoadingProvider } from '@/context/LoadingContext';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <LoadingProvider>
      <Component {...pageProps} />
    </LoadingProvider>
  );
}

export default MyApp;