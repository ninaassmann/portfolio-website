import Image from "next/image";
import Link from "next/link";

import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

import { Button } from "@/components/ui/button";
import { GithubIcon, LinkedinIcon } from "lucide-react";

export default function Home() {
  return (
    <main className="">
      <section className="container flex flex-col py-40 justify-center items-center gap-10">
        <div className="rounded-full relative overflow-clip w-36 h-36">
          <Image
            src="/ProfileImage.png"
            alt="Nina Aßmann"
            width={150}
            height={150}
          />
        </div>
        <div className="flex flex-col gap-6">
          <h1 className="text-center">Hi, Ich bin Nina!</h1>
          <p className="text-center">
            Webentwicklung & Design
            <br />
            Moderne Webseiten, klar strukturiert und schön umgesetzt.
          </p>
        </div>
        <Button asChild>
          <Link href="/projekte">Projekte entdecken</Link>
        </Button>
        <div className="flex sm:hidden gap-10">
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
      </section>
      <Skills />
      <Projects />
      <About />
    </main>
  );
}
