import Link from "next/link";
import { Analytics } from '@vercel/analytics/next';
import '../styles/globals.css';

export default function App({ Component, pageProps }) {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif' }}>
      <nav style={{ padding: 20, borderBottom: '1px solid #ccc' }}>
        <Link href="/"> <a style={{ marginRight: 20 }}>Home</a></Link>
        <Link href="/marketplace"> <a style={{ marginRight: 20 }}>Marketplace</a></Link>
        <Link href="/raffle"> <a>Raffle</a></Link>
      </nav>
      <main style={{ padding: 20 }}>
        <Component {...pageProps} />
      </main>
      <Analytics />
    </div>
  );
}
