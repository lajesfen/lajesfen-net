interface ExperienceProps {
  company: string;
  role: string;
  duration: string;
}

export default function Experience(data: ExperienceProps) {
  return (
    <li className="w-full flex flex-row justify-between items-center">
      <h1>
        {data.company} / {data.role}
      </h1>
      <div className="flex-grow mx-2 h-[0.9em] border-b-2 border-dotted" />
      <p className="whitespace-nowrap">{data.duration}</p>
    </li>
  );
}
