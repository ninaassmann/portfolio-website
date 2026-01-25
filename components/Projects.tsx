import { GithubIcon, SquareArrowOutUpRightIcon } from "lucide-react";
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

export default function Projects() {
  return (
    <section
      className="container grid grid-cols-1 md:grid-cols-2 gap-6 my-30 mx-auto place-items-center"
      id="projects"
    >
      <Card>
        <div className="w-full h-60 relative">
          <Image src="/faszination-hund.jpg" alt="Example" fill={true} />
        </div>
        <CardHeader>
          <CardTitle>Faszination Hund - Payload CMS</CardTitle>
          <CardDescription className="opacity-75">
            <strong className="mb-2 block">Demnächst:</strong>
            Filter- und Sortierfunktion & Blogbeiträge
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-wrap gap-2">
          <Badge variant={"secondary"}>Next.Js</Badge>
          <Badge variant={"secondary"}>Payload CMS</Badge>
          <Badge variant={"secondary"}>DaisyUI</Badge>
        </CardContent>
        <CardFooter className="flex gap-4 justify-end">
          <Link
            className="text-destructive font-medium uppercase"
            href="https://github.com/ninaassmann/faszination-hund"
            target="_blank"
          >
            <GithubIcon className="text-destructive" />
          </Link>
          <Link
            className="text-destructive font-medium"
            href="https://faszination-hund.vercel.app/"
            target="_blank"
          >
            <SquareArrowOutUpRightIcon />
          </Link>
          <Link
            className="text-destructive font-medium"
            href="/projekte/faszination-hund/"
          >
            Details
          </Link>
        </CardFooter>
      </Card>

      <Card>
        <div className="w-full h-60 relative bg-muted grid place-items-center">
          <Image src="/example.png" alt="Example" fill={true} />
        </div>
        <CardHeader>
          <CardTitle>vue.js Project</CardTitle>
          <CardDescription className="opacity-75">
            <strong className="mb-2 block">Demnächst:</strong>
            NuxtJS Project zum Einstieg in vue.js
          </CardDescription>
        </CardHeader>
        <CardContent className="flex gap-2">
          <Badge variant={"secondary"}>NuxtJS</Badge>
        </CardContent>
        <CardFooter className="flex gap-4 justify-end">
          <Link
            className="text-destructive font-medium uppercase"
            href="#"
            target="_blank"
          >
            coming soon...
          </Link>
        </CardFooter>
      </Card>
    </section>
  );
}
