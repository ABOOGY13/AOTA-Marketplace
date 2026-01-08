export default function Home() {
  return (
    <div style={{ padding: 20, fontFamily: 'Arial' }}>
      <h1>AOTA Marketplace & Raffle</h1>
      <p>Welcome to the platform!</p>

      <h3>What would you like to do?</h3>

      <ul>
        <li><a href="/marketplace">Marketplace</a></li>
        <li><a href="/raffle">Raffle Listings</a></li>
      </ul>
    </div>
  );
}
