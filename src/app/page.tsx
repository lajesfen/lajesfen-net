import Experience from "@/components/experience";
import Project from "@/components/project";
import Data from "@/data/home.json";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <main className="relative outline-1 outline-black p-8 max-w-sm sm:max-w-lg mx-auto">
        <Image
          src={"/graphics/email.gif"}
          alt="Email"
          width={52}
          height={52}
          className="absolute bottom-4 left-[2rem]"
          unoptimized
        />
        <section className="mb-6">
          <h1>Luciano A. Jesfen</h1>
          <div className="flex flex-row items-center gap-2">
            <p>Software Developer</p>
            <Image
              src={"/icons/computer_explorer.png"}
              alt="Computer Explorer"
              width={24}
              height={24}
            />
          </div>
        </section>
        <section className="mb-6 flex flex-col gap-6">
          <p>
            I like building things: apps, tools, games or whatever I&apos;m currently
            obsessed with.
          </p>
          <p>
            My main interests are Computer Graphics and anything art-related.
            Before getting into programming, I worked as 3D Art Lead at a game
            studio, where I created low-poly assets for Twitch Rivals events and
            other real-time projects involving content creators.
          </p>
          <p>
            I&apos;m always learning, building and trying out new ideas. Mostly for
            fun, sometimes for something bigger.
          </p>
        </section>
        <section className="flex flex-col mb-6 w-full gap-5">
          <div className="flex flex-row items-center gap-2 mx-auto">
            <h1>Projects</h1>
            <Image
              src={"/icons/directory.png"}
              alt="Directory"
              width={24}
              height={24}
            />
          </div>
          <ul className="flex flex-col w-full">
            {Data.projects.map((project, index) => (
              <Project
                key={index}
                title={project.title}
                description={project.description}
                path={project.path}
              />
            ))}
          </ul>
        </section>
        <section className="flex flex-col mb-6 w-full gap-4">
          <div className="flex flex-row items-center gap-2 mx-auto">
            <h1>Previous Experience</h1>
            <Image
              src={"/icons/calendar.png"}
              alt="Directory"
              width={24}
              height={24}
            />
          </div>
          <ul className="flex flex-col w-full">
            {Data.experience.map((exp, index) => (
              <Experience
                key={index}
                company={exp.company}
                role={exp.role}
                duration={exp.duration}
              />
            ))}
          </ul>
        </section>
        <footer className="flex w-full mt-12">
          <div className="flex flex-row items-center gap-4 mx-auto">
            <a
              href="mailto:lajesfen@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Email
            </a>
            <a
              href="https://github.com/lajesfen"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/luciano-aguirre-jesfen-4748ab152/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </footer>
      </main>
    </div>
  );
}
