import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../../services/api";
import { setUsers } from "../../features/user/userSlice";
import pointsLogo from '../../assets/pointlogo.png'

const Header = () => {
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.users);

  useEffect(() => {
    getUser()
      .then((data) => dispatch(setUsers(data)))
      .catch((err) => console.log(err));
  }, []);

return (
  <div className="flex flex-col lg:flex-row w-full items-start lg:items-center bg-white px-4 md:px-6 py-4 md:py-7 gap-4">
    
    {/* Logo */}
    <img
      src="https://bachecaa.vercel.app/image/logo.png"
      alt="Logo"
      className="h-[50px] md:h-[70px] max-w-[13rem] w-full object-contain"
    />

    {/* Center Section */}
    <header className="flex flex-col lg:flex-row flex-1 items-start lg:items-center gap-4 lg:gap-10 lg:pl-[90px] w-full">
      
      {/* Text */}
      <div>
        <h1 className="text-[20px] md:text-[26px] font-bold leading-tight text-[#2D3154]">
          {users?.name}
        </h1>
        <p className="text-[13px] md:text-[15px] text-[#A0AEC0]">
          Inizia la giornata con un nuovo corso!
        </p>
      </div>

      {/* Points Bar (unchanged desktop, flexible mobile) */}
      <div className="relative flex items-center justify-center lg:justify-end w-50 lg:w-60 h-12 md:h-14">
        
        <div className="absolute right-0 lg:right-0 w-[140px] md:w-[180px] h-10 md:h-12 bg-[#1C58F2] rounded-full shadow-xl" />

        <div className="absolute left-6 md:left-10 w-[140px] md:w-[180px] h-9 md:h-10 bg-[#FBBF24] rounded-full flex items-center z-10 shadow-md">
          <span className="pl-10 md:pl-16 text-[20px] md:text-[28px] font-black text-[#1A202C]">
            {users?.points}
          </span>

          <img
            src={pointsLogo}
            alt="points icon"
            className="w-12 md:w-16 pl-3 md:pl-5"
          />
        </div>
      </div>
    </header>

    {/* Profile */}
    <img
      src={users?.avatar}
      alt="Profile"
      className="w-14 h-14 md:w-20 md:h-20 rounded-full object-cover self-auto lg:self-auto"
    />
  </div>
);
};

export default Header;