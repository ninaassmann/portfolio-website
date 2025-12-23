export default function Impressum() {
  return (
    <main>
      <section className="container py-40 flex flex-col gap-10">
        <h1 className="text-5xl font-serif ">Impressum</h1>
        <p>
          Nina Aßmann
          <br />
          Blankeneser Chaussee 70
          <br />
          22869 Schenefeld
        </p>
        <div>
          <dl className="flex gap-2">
            <dt className="w-18">Telefon:</dt>
            <dd>016090895868</dd>
          </dl>
          <dl className="flex gap-2">
            <dt className="w-18">E-Mail:</dt>
            <dd>hallo@ninaassmann.de</dd>
          </dl>
        </div>
      </section>
    </main>
  );
}
