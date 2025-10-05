import Image from "next/image";

const socialLinks = [
  { name: "Email", href: "mailto:lajesfen@gmail.com" },
  { name: "GitHub", href: "https://github.com/lajesfen" },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/luciano-aguirre-jesfen-4748ab152/",
  },
];

const projects = Array.from({ length: 0 }, (_, i) => `Project ${i + 1}`);

export default function Home() {
  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden gap-4">
      <section className="pointer-events-none select-none -z-10">
        <Image
          src={"/graphics/pc.png"}
          alt="pc"
          width={1920}
          height={570}
          priority
          draggable={false}
        />
      </section>
      <section className="flex flex-col gap-12 items-center p-2 text-xs md:text-base">
        <div className="grid grid-cols-3 md:grid-cols-6 justify-center justify-items-center items-center gap-4">
          {projects.length != 0 ? (
            projects.map((project, index) => (
              <a key={index} href={`#project-${index + 1}`}>
                {project}
              </a>
            ))
          ) : (
            <></>
          )}
        </div>
        <footer className="flex flex-row justify-center items-center gap-4">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.name}
            </a>
          ))}
        </footer>
      </section>
    </main>
  );
}
