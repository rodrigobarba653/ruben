interface ProjectTabsProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const ProjectTabs = ({ activeTab, setActiveTab }: ProjectTabsProps) => {
  return (
    <div className="mt-6 flex gap-4 border-b border-gray-600">
      <button
        className={`py-2 px-4 rounded-t-md text-white ${
          activeTab === "Cine y TV" ? "bg-gray-700" : "hover:bg-gray-700"
        }`}
        onClick={() => setActiveTab("Cine y TV")}
      >
        Cine y TV
      </button>
      <button
        className={`py-2 px-4 rounded-t-md text-white ${
          activeTab === "Publicidad" ? "bg-gray-700" : "hover:bg-gray-700"
        }`}
        onClick={() => setActiveTab("Publicidad")}
      >
        Publicidad
      </button>
    </div>
  );
};

export default ProjectTabs;
