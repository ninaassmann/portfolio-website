import { Copyright } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <header className="h-24 py-4 container flex items-center justify-between opacity-50">
      <div className="flex gap-2">
        <Copyright className="w-4" /> Nina Aßmann {currentYear}
      </div>
      <div className="flex gap-10">
        <a href="/impressum">Impressum</a>
        <p>Datenschutz</p>
      </div>
    </header>
  );
}
