import Link from "next/link";
import Logo from "./Logo";

export default function Header() {
  return (
    <header className="h-24 py-4 container flex items-center justify-between flex-wrap">
      <Link href="/" className="h-full w-3xs">
        <Logo />
      </Link>
      <div className="flex gap-10">
        <Link href="/#projects">Projekte</Link>
      </div>
    </header>
  );
}
