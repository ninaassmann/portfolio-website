import { Badge } from "@/components/ui/badge";
import Image from "next/image";

export default function ProjectPage() {
  return (
    <main>
      <section className="mt-30">
        <div className="container flex flex-col text-pretty gap-6">
          <h1>Faszination Hund</h1>
          <p>
            Dieses Projekt ist eine Übungs-Webseite, die Hunde und Hunderassen
            präsentiert. Es dient ausschließlich zu Lern- und Übungszwecken – es
            werden keine echten Hunde vermittelt.
          </p>
          <div className="flex gap-2 flex-wrap mb-6">
            <Badge variant={"default"}>Payload CMS</Badge>
            <Badge variant={"default"}>NextJS</Badge>
            <Badge variant={"default"}>DaisyUI</Badge>
          </div>
          <div className="relative w-[80%]">
            <Image
              src="/faszination-hund.jpg"
              alt="Example"
              width={1064}
              height={480}
              className="object-cover h-auto"
            />
          </div>
        </div>
      </section>
      <section className="bg-card mt-30 py-30">
        <div className="container">
          <h2>Features</h2>
          <ul className="flex flex-col gap-2 list-disc list-inside">
            <li>Übersicht von Hunden und Hunderassen</li>
            <li>Detailseiten mit umfassenden Infos zu Hunden / Rassen</li>
            <li>Hero- und Content-Blöcke für flexible Seitenlayouts</li>
            <li>Akkordeon-, Featured-List- und Content-with-Media-Blöcke</li>
            <li>
              Alert zur Hinweisfunktion („Diese Webseite dient nur
              Übungszwecken“)
            </li>
            <li>Vollständig responsive UI für Desktop, Tablet und Mobile</li>
          </ul>
        </div>
      </section>
      <section className="my-30">
        <div className="container">
          <h2>Weitere Pläne für dieses Projekt</h2>
          <ul className="flex flex-col gap-6 divide-gray-800 divide-y">
            <li>
              <h3>Allgemeine Contentpflege</h3>
              <p>
                Es sollen nach und nach alle bekannten Hunderassen ergänzt
                werden. Bestehende sollen erweitert werden
              </p>
            </li>
            <li>
              <h3>Filtermöglichkeit für die Hunde- und Hunderassenliste</h3>
              <p>
                Man soll in Zukunft nach den verschiedenen Tags filtern können,
                außerdem sollen Unterseiten entstehen (z.B. eine Liste nur mit
                Mittelgroßen Hunderassen)
              </p>
            </li>
            <li>
              <h3>Suchfunktion</h3>
              <p>
                Es soll eine Suchfunktion sowohl für die Rassen, als auch für
                die zu vermittelnden Hunde geben
              </p>
            </li>
            <li>
              <h3>Quiz zum finden des perfekten Hundes</h3>
              <p>
                Ich möchte ein Quiz erstellen, das klassische Fragen stellt und
                am Ende die für den User &quot;perfekte&quot; Hunderasse ausgibt
              </p>
            </li>
            <li>
              <h3>Blog- bzw. Newsbeiträge zum Thema Hund</h3>
              <p>Ich möchte relevante News zum Thema Hund bereitstellen</p>
            </li>
            <li>
              <h3>Ergänzung weitere Haustiere</h3>
              <p>
                Es sollte in ferner Zukunft auch möglich sein, weitere Haustiere
                zu vermitteln (z.B. Katzen) und Infos über diese
                bereitzustellen.
              </p>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}
