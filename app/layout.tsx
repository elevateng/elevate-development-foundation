import type { Metadata } from "next";
import { MotionEnhancer } from "./components/MotionEnhancer";
import { SiteFooter, SiteHeader } from "./components/SiteShell";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Elevate Development Foundation | Youth Development in Nigeria",
    template: "%s | Elevate Development Foundation",
  },
  description:
    "Elevate works with young Africans to build the mindset, education, employment pathways and innovations that help break cycles of poverty.",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <SiteHeader />
        <MotionEnhancer />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
