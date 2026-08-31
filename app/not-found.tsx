import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page not found",
};

export default function NotFound() {
  return (
    <main className="notfound">
      <p className="eyebrow" style={{ justifySelf: "center" }}>
        Error 404
      </p>
      <h1>Lost the thread.</h1>
      <p>That page doesn&apos;t exist — or it moved somewhere else.</p>
      <Link className="btn btn--primary" href="/" style={{ justifySelf: "center" }}>
        Back to home
      </Link>
    </main>
  );
}
