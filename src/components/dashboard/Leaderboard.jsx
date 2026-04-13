import React, { useEffect } from "react";
import CustomScrollbar from "../common/CustomScrollbar";
import LeaderboardItem from "./LeaderboardItem";
import { useDispatch, useSelector } from "react-redux";
import { setLeaderboards } from "../../features/leaderboard/leaderboardSlice";
import { getLeaderboard } from "../../services/api";

const Leaderboard = () => {
  const dispatch = useDispatch();
  const { leaderboard } = useSelector((state) => state.leaderboard);

  useEffect(() => {
    getLeaderboard()
      .then((data) => dispatch(setLeaderboards(data)))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="flex-1 flex flex-col items-center shrink-0 w-full max-w-full min-h-[500px] md:min-h-0 overflow-hidden rounded-t-[40px] p-5 md:p-7 bg-gradient-to-b from-[#0A254D] to-[#0056D2]">
      
      {/* Title Box */}
      <div className="border border-[#F3A222] rounded-xl px-8 xl:px-28 py-2 mb-6 text-center shrink-0">
        <h2 className="text-white font-semibold text-md md:text-3xl tracking-[0.1em] uppercase">
          LEADERBOARD
        </h2>
      </div>

      {/* List */}
      <CustomScrollbar className="w-full flex-1 space-y-3 pr-1 pb-4">
        {leaderboard?.map((item) => (
          <LeaderboardItem key={item.rank} {...item} />
        ))}
      </CustomScrollbar>
    </div>
  );
};

export default Leaderboard;