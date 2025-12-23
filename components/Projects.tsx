import { GithubIcon } from "lucide-react";
import { Badge } from "./ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import Image from "next/image";
import Link from "next/link";
import Logo from "./Logo";

export default function Projects() {
  return (
    <section
      className="container grid grid-cols-1 md:grid-cols-2 gap-6 py-40 mx-auto place-items-center"
      id="projects"
    >
      <Card>
        <div className="w-full h-60 relative bg-muted grid place-items-center">
          <Logo className="w-1/2" />
        </div>
        <CardHeader>
          <CardTitle>Portfolio Website</CardTitle>
          <CardDescription className="opacity-75">
            <strong className="mb-2 block">Demnächst:</strong>
            Dark/Light-Theme, Filterung der Projekte nach Tech-Stack, Blog zu
            Webentwicklung und Design.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex gap-2">
          <Badge variant={"secondary"}>Next.Js</Badge>
          <Badge variant={"secondary"}>Tailwind CSS</Badge>
          <Badge variant={"secondary"}>shadcn</Badge>
        </CardContent>
        <CardFooter className="flex gap-4 justify-end">
          <Link
            className="text-destructive font-medium uppercase"
            href="https://github.com/ninaassmann/portfolio-website"
            target="_blank"
          >
            <GithubIcon className="text-destructive" />
          </Link>
        </CardFooter>
      </Card>
      <Card>
        <div className="w-full h-60 relative">
          <Image src="/example.png" alt="Example" fill={true} />
        </div>
        <CardHeader>
          <CardTitle>CRUD Projekt</CardTitle>
          <CardDescription className="opacity-75">
            <strong className="mb-2 block">Demnächst:</strong>
            Authentifizierung &<br />
            CRUD-Funktionen
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-wrap gap-2">
          <Badge variant={"secondary"}>Next.Js</Badge>
          <Badge variant={"secondary"}>API Anbindung</Badge>
          <Badge variant={"secondary"}>AUTH</Badge>
        </CardContent>
        <CardFooter className="flex gap-4 justify-end">
          <Link
            className="text-destructive font-medium"
            href="https://github.com/ninaassmann/portfolio-website"
            target="_blank"
          >
            coming soon...
          </Link>
        </CardFooter>
      </Card>
    </section>
  );
}
