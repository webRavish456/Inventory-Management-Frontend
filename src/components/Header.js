// app/components/Header.js
"use client";
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex items-center justify-between px-6 py-4 bg-gray-900 text-white shadow-md">
      {/* Logo / Brand */}
      <div className="text-2xl font-bold">
        <Link href="/">MyWebsite</Link>
      </div>

      {/* Nav Links */}
      <nav className="space-x-6">
        <Link href="/" className="hover:text-gray-400">Home</Link>
        <Link href="/about" className="hover:text-gray-400">About</Link>
        <Link href="/services" className="hover:text-gray-400">Services</Link>
        <Link href="/contact" className="hover:text-gray-400">Contact</Link>
      </nav>
    </header>
  );
}
