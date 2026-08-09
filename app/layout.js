import "./globals.css";

export const metadata = {
  title: "HUSSAFA BOUTIQUE",
  description: "Luxury Fashion House",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
