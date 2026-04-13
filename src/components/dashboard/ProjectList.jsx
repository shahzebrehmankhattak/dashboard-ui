import { useEffect } from "react";
 import { useDispatch, useSelector } from "react-redux";
 import { setProjects, setSelectedProject } from "../../features/projects/projectSlice";
import ProjectCard from "./ProjectCard";
import { getProjects } from "../../services/api";

const ProjectList = () => {
  const dispatch = useDispatch();
  const { list } = useSelector((state) => state.projects);

 useEffect(() => {
  getProjects()
    .then((data) => dispatch(setProjects(data)))
    .catch((err) => console.log(err));
}, []);

  return (
   <div className="bg-[#eaeaea] p-4 rounded-2xl h-[500px] overflow-y-auto space-y-4 custom-scrollbar">
  {list?.map((project) => (
    <ProjectCard
      key={project.id}
      project={project}
      onClick={() => dispatch(setSelectedProject(project))}
    />
  ))}
</div>
  );
};

export default ProjectList;