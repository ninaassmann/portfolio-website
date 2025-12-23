import Logo from "./Logo";

export default function Header() {
  return (
    <header className="h-24 py-4 container flex items-center justify-between flex-wrap">
      <Logo />
      <div className="flex gap-10">
        <a href="#projects">Projekte</a>
      </div>
    </header>
  );
}
