import { skills } from "@/lib/skills";
import { Badge } from "./ui/badge";

export default function Skills() {
  return (
    <section className="flex gap-2 items-center justify-center flex-wrap max-w-4/5 mx-auto">
      {skills.map((skill) => (
        <Badge variant={"default"} key={skill}>
          {skill}
        </Badge>
      ))}
    </section>
  );
}
