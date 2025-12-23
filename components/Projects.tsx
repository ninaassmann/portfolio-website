import { GithubIcon, SquareArrowOutUpRight } from "lucide-react";
import { Badge } from "./ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import Image from "next/image";

export default function Projects() {
  return (
    <section
      className="grid grid-cols-1 md:grid-cols-2 gap-6 py-40 mx-auto"
      id="projects"
    >
      <Card>
        <div className="w-full h-60 relative">
          <Image src="/example.png" alt="Example" fill={true} />
        </div>
        <CardHeader>
          <CardTitle>Portfolio Website</CardTitle>
        </CardHeader>
        <CardContent className="flex gap-2">
          <Badge variant={"secondary"}>Next.Js</Badge>
          <Badge variant={"secondary"}>Tailwind CSS</Badge>
          <Badge variant={"secondary"}>shadcn</Badge>
        </CardContent>
        <CardFooter className="flex gap-4 justify-end">
          <a className="text-destructive font-medium uppercase" href="#">
            <GithubIcon className="text-destructive" />
          </a>
          <a className="text-destructive font-medium uppercase" href="#">
            <SquareArrowOutUpRight />
          </a>
        </CardFooter>
      </Card>
      <Card>
        <div className="w-full h-60 relative">
          <Image src="/example.png" alt="Example" fill={true} />
        </div>
        <CardHeader>
          <CardTitle>Portfolio Website</CardTitle>
        </CardHeader>
        <CardContent className="flex gap-2">
          <Badge variant={"secondary"}>Next.Js</Badge>
          <Badge variant={"secondary"}>Tailwind CSS</Badge>
          <Badge variant={"secondary"}>shadcn</Badge>
        </CardContent>
        <CardFooter className="flex gap-4 justify-end">
          <a className="text-destructive font-medium uppercase" href="#">
            <GithubIcon className="text-destructive" />
          </a>
          <a className="text-destructive font-medium uppercase" href="#">
            <SquareArrowOutUpRight />
          </a>
        </CardFooter>
      </Card>
    </section>
  );
}
