import Link from "next/link";
import Logo from "./Logo";
import { GithubIcon, LinkedinIcon } from "lucide-react";

export default function Header() {
  return (
    <header className="h-24 py-4 container flex items-center justify-between flex-wrap">
      <Link href="/" className="h-full w-3xs">
        <Logo />
      </Link>
      <div className="flex gap-10">
        <Link href="/#projects">Projekte</Link>
        <Link href="/#about">Über mich</Link>
        <Link
          className="text-destructive font-medium uppercase"
          href="https://github.com/ninaassmann/"
          target="_blank"
        >
          <GithubIcon className="text-destructive" />
        </Link>
        <Link
          href="https://www.linkedin.com/in/nina-a%C3%9Fmann-2789aa147/"
          target="_blank"
        >
          <LinkedinIcon className="text-destructive" />
        </Link>
      </div>
    </header>
  );
}
