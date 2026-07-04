import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Harsh Kumar | Senior Full Stack Engineer & Technical Lead",
  description:
    "Portfolio of Harsh Kumar, Senior Full Stack Engineer and Technical Lead building SaaS platforms, real-time systems, CRM products, automation tools, and high-performance web applications.",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${outfit.variable} antialiased bg-[#0a0a0a] text-white`}
      >
        {children}
      </body>
    </html>
  );
}
