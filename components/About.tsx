import Image from "next/image";

export default function About() {
  return (
    <section className="py-40 bg-card">
      <div className="container grid lg:grid-cols-2 gap-10 items-center">
        <div className="flex flex-col gap-6 order-2 lg:order-1 max-w-xl text-center lg:text-left place-self-center">
          <h2 className="text-4xl font-serif">Was ich so mache</h2>
          <p className="font-sans">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet.
          </p>
        </div>
        <div className="rounded-xl relative overflow-clip opacity-80 w-72 h-72 lg:w-96 lg:h-96 place-self-center order-1">
          <Image
            src="/ai-generated-me-and-dogs.png"
            alt="KI generiertes Bild von Nina und ihren Hunden"
            fill={true}
          />
        </div>
      </div>
    </section>
  );
}
