// components/dashboard/ProjectCard.jsx
import { motion } from "framer-motion";

const ProjectCard = ({ project, onClick }) => {
  return (
   <motion.div
      whileHover={{ scale: 1.01 }}
      onClick={onClick}
      className="bg-[#99999926] p-5 rounded-[13px] border border-gray-100 mb-3 cursor-pointer transition-all shrink-0"
    >
      <div className="flex items-center gap-3 mb-1">
        <img
          src={project.avatar || "/image/images.jpg"} 
          alt="admin"
          className="w-8 h-8 rounded-full object-cover border-2 border-[#0088CC]/20"
        />

        <h3 className="text-[18px] font-[900] text-[#0088CC]">
          {project.title}
        </h3>
      </div>
      <p className="text-[12px] text-gray-400 font-bold leading-tight">
        {project.description}
      </p>
    </motion.div>
  );
};

export default ProjectCard;