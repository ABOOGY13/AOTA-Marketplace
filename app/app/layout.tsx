export const metadata = {
  title: "AOTA Marketplace",
  description: "Buy, sell, or raffle items in an open online marketplace."
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>{children}</body>
    </html>
  );
}
