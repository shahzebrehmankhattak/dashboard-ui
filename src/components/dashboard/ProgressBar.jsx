import React, { useEffect } from "react";
import { motion } from "framer-motion";
import doctor from "../../assets/doc.png";
import appendicamice from "../../assets/appendicamice.png";
import { ChevronDown } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../../services/api";
import { setUsers } from "../../features/user/userSlice";

const ProgressBar = () => {
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.users);

  useEffect(() => {
    getUser()
      .then((data) => dispatch(setUsers(data)))
      .catch((err) => console.log(err));
  }, [dispatch]);

  // ✅ Safe percentage calculation
  const percentage = users?.targetXP
    ? (users.currentXP / users.targetXP) * 100
    : 0;

  return (
    <div className="hidden sm:flex w-full h-32 bg-gradient-to-r from-[#D1E9FF] via-[#8BBDF9] to-[#0E69D0] rounded-[10px] mb-4 items-center justify-between px-6 shrink-0">
      
      {/* Left Image */}
      <img
        src={doctor}
        className="w-20 md:w-[140px] h-auto object-contain"
        alt="Doctor"
      />

      {/* Progress Bar */}
      <div className="flex-1 mx-4 h-7 bg-white/40 rounded-full relative flex items-center px-1">
        
        {/* Animated Progress */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="h-5 bg-[#FCC063]/90 progress-striped rounded-full relative overflow-visible"
        >
          {/* Current XP */}
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
            className="absolute left-2 top-0.5 text-[#0056D2] px-4 py-0.5 rounded-full bg-white text-[10px] font-bold shadow-sm whitespace-nowrap"
          >
            {users?.currentXP || 0} XP
          </motion.span>

          {/* ✅ Tooltip (FIXED) */}
          {users?.nextXP && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="absolute -top-10 right-0 flex flex-col items-center"
            >
              <div className="bg-white text-[#0056D2] px-3 py-1 rounded-lg text-[10px] font-black shadow-lg whitespace-nowrap relative">
                {users?.nextXP || 0} XP

                {/* Arrow */}
                <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-white rotate-45"></div>
              </div>

              {/* Animated Dot */}
              <motion.div
                animate={{ y: [0, 4, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                className="bg-[#0056D2] w-5 h-5 rounded-full border-2 border-white flex items-center justify-center -mt-1 shadow-md z-10"
              >
                <ChevronDown size={10} className="text-white" />
              </motion.div>
            </motion.div>
          )}
        </motion.div>

        {/* Target XP */}
        <span className="absolute right-6 text-gray-600 font-black text-sm opacity-60">
          {users?.targetXP || 0} XP
        </span>
      </div>

      {/* Right Image */}
      <img
        src={appendicamice}
        className="w-20 md:w-[140px] h-auto object-contain opacity-90"
        alt="Doctor Lock"
      />
    </div>
  );
};

export default ProgressBar;