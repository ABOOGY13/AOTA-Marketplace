import Link from "next/link";
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import '../styles/globals.css';

export default function App({ Component, pageProps }) {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif' }}>
      <nav style={{ padding: 20, borderBottom: '1px solid #ccc' }}>
        <Link href="/" style={{ marginRight: 20 }}>Home</Link>
        <Link href="/marketplace" style={{ marginRight: 20 }}>Marketplace</Link>
        <Link href="/raffle">Raffle</Link>
      </nav>
      <main style={{ padding: 20 }}>
        <Component {...pageProps} />
      </main>
      <Analytics />
      <SpeedInsights />
    </div>
  );
}
