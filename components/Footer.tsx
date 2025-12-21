import { Copyright } from "lucide-react";

export default function Footer() {
  return (
    <header className="h-24 py-4 container flex items-center justify-between opacity-50">
      <div className="flex gap-2">
        <Copyright className="w-4" /> Nina Aßmann 2025
      </div>
      <div className="flex gap-10">
        <p>Impressum</p>
        <p>Datenschutz</p>
      </div>
    </header>
  );
}
