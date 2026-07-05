import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Homework Jobs — Complete Tasks. Earn Daily via M-Pesa.",
  description:
    "Homework Jobs lets you complete simple AI-powered tasks and surveys from your phone, with M-Pesa payouts.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
