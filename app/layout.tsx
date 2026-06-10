import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Badri Narayana Kancharla | Full-Stack & AI Systems Engineer",
  description:
    "Portfolio of Badri Narayana Kancharla, a full-stack engineer building AI agents, incident intelligence, APIs, and scalable backend systems.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
