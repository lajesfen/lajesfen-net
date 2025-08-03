interface ExperienceProps {
  company: string;
  role: string;
  duration: string;
}

export default function Experience(data: ExperienceProps) {
  return (
    <li className="flex flex-row justify-between items-center">
      <div className="flex flex-row items-center gap-1">
        <p>{data.company}</p>/<p>{data.role}</p>
      </div>
      <div className="flex-grow mx-2 h-[0.9em] border-b-2 border-dotted" />
      <span className="flex items-center">{data.duration}</span>
    </li>
  );
}
