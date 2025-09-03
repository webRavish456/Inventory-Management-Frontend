// app/layout.js
import "./globals.css";
import Header from "./components/Header";

export const metadata = {
  title: "My Website",
  description: "Built with Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
