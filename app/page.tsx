import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <main className="container">
      <section className="flex flex-col py-40 justify-center items-center gap-10">
        <div className="rounded-full relative overflow-clip w-36 h-36">
          <Image
            src="/ProfileImage.png"
            alt="Nina Aßmann"
            width={150}
            height={150}
          />
        </div>
        <div className="flex flex-col gap-6">
          <h1 className="text-5xl font-serif text-center">Hi, Ich bin Nina!</h1>
          <p className="font-sans text-center max-w-xl">
            Webentwicklung & Design
            <br />
            Moderne Webseiten, klar strukturiert und schön umgesetzt.
          </p>
        </div>
        <Button>Projekte entdecken</Button>
      </section>
      <Skills />
      <Projects />
    </main>
  );
}
