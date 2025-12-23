import { Copyright } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <header className="py-4 container flex flex-wrap items-center justify-center sm:justify-between opacity-50 gap-6">
      <div className="flex gap-2">
        <Copyright className="w-4" /> Nina Aßmann {currentYear}
      </div>
      <div className="flex gap-6">
        <Link href="/impressum">Impressum</Link>
        <Link href="/datenschutz">Datenschutz</Link>
      </div>
    </header>
  );
}
