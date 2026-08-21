import "./globals.css";

export const metadata = {
  title: "Pawshare Club | Community pet care",
  description:
    "Find trusted pet sitters, dog walkers and playdate companions in your neighbourhood.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-AU">
      <body>{children}</body>
    </html>
  );
}
