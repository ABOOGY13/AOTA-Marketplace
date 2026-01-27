export default function HomePage() {
  return (
    <main style={{
      minHeight: "100vh",
      backgroundColor: "#0b0f0d",
      color: "#e5e7eb",
      padding: "3rem",
      fontFamily: "Arial, Helvetica, sans-serif"
    }}>
      <h1 style={{ fontSize: "3rem", marginBottom: "1rem" }}>
        AOTA Marketplace & Raffle
      </h1>

      <p style={{ fontSize: "1.2rem", maxWidth: "700px" }}>
        Buy, sell, or raffle items in an open online marketplace.
        Secure payments. Fair chances. Always open.
      </p>

      <div style={{ marginTop: "3rem", display: "flex", gap: "1rem", flexWrap: "wrap" }}>
        <a href="/marketplace" style={buttonStyle}>
          Browse Marketplace
        </a>
        <a href="/raffles" style={buttonStyle}>
          View Raffles
        </a>
        <a href="/sell" style={buttonStyleAlt}>
          Sell or Raffle an Item
        </a>
      </div>

      <footer style={{ marginTop: "5rem", opacity: 0.6 }}>
        © {new Date().getFullYear()} AOTA Marketplace
      </footer>
    </main>
  );
}

const buttonStyle = {
  backgroundColor: "#1f2933",
  padding: "0.75rem 1.5rem",
  borderRadius: "8px",
  textDecoration: "none",
  color: "#ffffff",
  fontWeight: "bold"
};

const buttonStyleAlt = {
  ...buttonStyle,
  backgroundColor: "#14532d"
};
