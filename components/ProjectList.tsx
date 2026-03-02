import { useEffect, useRef, useState } from "react";

interface Project {
  id: number;
  title: string;
  link: string;
}

interface ProjectListProps {
  projects: Project[];
  onProjectClick: (link: string) => void;
  activeVideo: string | null;
}

const ProjectList = ({
  projects,
  onProjectClick,
  activeVideo,
}: ProjectListProps) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isAtStart, setIsAtStart] = useState(true);
  const [isAtEnd, setIsAtEnd] = useState(false);

  useEffect(() => {
    document.documentElement.style.setProperty("--scrollbar-bg", "#1a1a1a");
    document.documentElement.style.setProperty("--scrollbar-thumb", "#FFD700");
    document.documentElement.style.setProperty(
      "--scrollbar-thumb-hover",
      "#FFC300"
    );
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (scrollContainerRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } =
          scrollContainerRef.current;
        setIsAtStart(scrollLeft <= 0);
        setIsAtEnd(scrollLeft + clientWidth >= scrollWidth - 1);
      }
    };

    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
      handleScroll(); // Initial check
    }

    return () => container?.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative mt-4">
      {/* Left Gradient */}
      {!isAtStart && (
        <div className="absolute left-0 top-0 h-full w-12 bg-gradient-to-r from-gray-900 to-transparent pointer-events-none"></div>
      )}

      {/* Scrollable Project List */}
      <div
        ref={scrollContainerRef}
        className="flex gap-2 overflow-x-auto custom-scrollbar py-4"
      >
        {projects.map((project) => (
          <button
            key={project.id}
            onClick={() => onProjectClick(project.link)}
            className={`whitespace-nowrap px-4 py-2 rounded-full border ${
              activeVideo === project.link
                ? "bg-yellow-400 text-black border-yellow-400"
                : "border-gray-500 hover:bg-gray-700"
            }`}
          >
            {project.title}
          </button>
        ))}
      </div>

      {/* Right Gradient */}
      {!isAtEnd && (
        <div className="absolute right-0 top-0 h-full w-12 bg-gradient-to-l from-gray-900 to-transparent pointer-events-none"></div>
      )}
    </div>
  );
};

export default ProjectList;
