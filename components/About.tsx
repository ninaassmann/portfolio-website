import Image from "next/image";
import { Badge } from "./ui/badge";

function getAge(birthDate: string): number {
  const today = new Date();
  const birth = new Date(birthDate);

  let age = today.getFullYear() - birth.getFullYear();

  const hasHadBirthdayThisYear =
    today.getMonth() > birth.getMonth() ||
    (today.getMonth() === birth.getMonth() &&
      today.getDate() >= birth.getDate());

  if (!hasHadBirthdayThisYear) {
    age--;
  }

  return age;
}

export default function About() {
  const age = getAge("1995-07-11");

  return (
    <section className="mt-30 py-30 bg-card" id="about">
      <div className="container grid lg:grid-cols-2 gap-10 items-center">
        <div className="flex flex-col gap-6 order-2 lg:order-1 max-w-xl text-center lg:text-left place-self-center">
          <h2>Was ich so mache</h2>
          <p>
            Ich bin {age} Jahre alt und lebe in Hamburg. Neben meiner
            Leidenschaft für Webentwicklung und Design liebe ich alles rund ums
            Gaming – von großen und kleinen Brettspielen bis hin zu
            Videospielen. Außerdem gehören meine zwei Hunde zu meinem Alltag und
            sorgen für jede Menge Spaß und Bewegung.
          </p>
        </div>
        <div className="rounded-xl relative overflow-clip opacity-80 w-72 lg:w-96 max-w-4/5 aspect-square place-self-center lg:place-self-end order-1">
          <Image
            src="/ai-generated-me-and-dogs.png"
            alt="KI generiertes Bild von Nina und ihren Hunden"
            fill={true}
          />
          <Badge size="small" className="absolute z-10 top-2 left-2">
            AI generated
          </Badge>
        </div>
      </div>
    </section>
  );
}
