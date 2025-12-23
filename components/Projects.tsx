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

export default function Projects() {
  return (
    <section
      className="container grid grid-cols-1 md:grid-cols-2 gap-6 py-40 mx-auto place-items-center"
      id="projects"
    >
      <Card>
        <div className="w-full h-60 relative">
          <Image src="/example.png" alt="Example" fill={true} />
        </div>
        <CardHeader>
          <CardTitle>Portfolio Website</CardTitle>
          <CardDescription>
            <strong>Demnächst:</strong>
            <br />
            Dark/Light-Thema,
            <br />
            Projektfilter,
            <br />
            Blog zu Webentwicklung und Design.
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
    </section>
  );
}
