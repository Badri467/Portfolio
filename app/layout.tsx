import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import SmoothScroll from "./components/SmoothScroll";
import Backdrop from "./components/Backdrop";
import ScrollProgress from "./components/ScrollProgress";

const SITE_URL = "https://badri-portfolio.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Badri Narayana Kancharla — Full-Stack & AI Systems Engineer",
    template: "%s — Badri Narayana Kancharla",
  },
  description:
    "Portfolio of Badri Narayana Kancharla, a full-stack engineer building AI agents, incident intelligence, APIs, and scalable backend systems.",
  keywords: [
    "Badri Narayana Kancharla",
    "software engineer",
    "backend engineer",
    "AI engineer",
    "full-stack developer",
    "Hyderabad",
  ],
  authors: [{ name: "Badri Narayana Kancharla" }],
  creator: "Badri Narayana Kancharla",
  openGraph: {
    type: "website",
    url: SITE_URL,
    title: "Badri Narayana Kancharla — Full-Stack & AI Systems Engineer",
    description:
      "Building AI agents, incident intelligence, APIs, and scalable backend systems.",
    siteName: "Badri Narayana Kancharla",
  },
  twitter: {
    card: "summary_large_image",
    title: "Badri Narayana Kancharla — Full-Stack & AI Systems Engineer",
    description:
      "Building AI agents, incident intelligence, APIs, and scalable backend systems.",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export const viewport: Viewport = {
  themeColor: "#0b0b0c",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <Backdrop />
        <ScrollProgress />
        <SmoothScroll>{children}</SmoothScroll>
        <div className="grain" aria-hidden="true" />
      </body>
    </html>
  );
}
