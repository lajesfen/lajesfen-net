interface ProjectProps {
  title: string;
  description: string;
  path: string;
}

export default function Project(data: ProjectProps) {
  return (
    <li className="flex items-center">
      <p className="whitespace-nowrap">{data.title}</p>
      <div className="flex-grow mx-2 h-[0.9em] border-b-2 border-dotted" />
      <span>
        <a href={data.path} target="_blank" rel="noopener noreferrer">
          View
        </a>
      </span>
    </li>
  );
}
