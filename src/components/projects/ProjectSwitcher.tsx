import { useState } from "react";
import IconBoard from "../../assets/IconBoard";
import Heading from "../shared/typography/Heading";

function ProjectSwitcher() {
  const projects = [{name: "Platform Launch", id:1}, {name: "Marketing Plan", id:2}, {name: "Roadmap", id:3}];
  const [currentProjectId, setCurrentProjectId] = useState(1);

  function handleProjectSwitch(projectId: number) {
    setCurrentProjectId(projectId);
  }

  return (
    <div>
      <p className="font-bold uppercase text-gray text-xs pt-4 mb-5 mx-6 tracking-2.4px">All boards ({projects.length})</p>
      <div className="mr-6">
        <ul>
          {projects.map((project) => {
            const iconFill = currentProjectId === project.id ? "#FFF" : "#828FA3";
            const selectedProject = currentProjectId === project.id;
            return (
              <li
                className={`flex items-center gap-3 p-4 cursor-pointer ${selectedProject && "bg-primary rounded-r-full"}`}
                key={project.id}
                onClick={() => handleProjectSwitch(project.id)}
              >
                <IconBoard fill={iconFill} />
                <Heading text={project.name} size="md" className={`${selectedProject ? "text-white" : "text-gray"}`} />
              </li>
            )}
          )}
        </ul>
        <div 
          className="flex items-center gap-3 p-4 cursor-pointer"
          onClick={() => alert("Create new board clicked.")}
        >
          <IconBoard fill="#635FC7" />
          <div>
            <Heading text="+ Create New Board" size="md" className="text-primary" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectSwitcher;