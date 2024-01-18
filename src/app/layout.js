import "./globals.css";

export const metadata = {
  title: "PoolFi",
  description: "Seamless Liquidity Pool Management"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-black">{children}</body>
    </html>
  );
}
