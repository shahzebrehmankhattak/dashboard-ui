import React from 'react';

export default function LeaderboardItem({ rank, name, score, isWinner, stars }) {
  const getRankStyles = (rank) => {
    if (rank === 1) return { border: "border-yellow-500", text: "text-yellow-600" };
    if (rank === 2) return { border: "border-gray-400", text: "text-gray-500" };
    return { border: "border-orange-400", text: "text-orange-500" };
  };

  const rankStyles = getRankStyles(rank);

  return (
    <div className="bg-white rounded-[18px] py-3 px-6 flex items-center justify-between shadow-md shrink-0">
      <div className="flex items-center gap-2">
        <div className={`w-5 h-5 mr-2 flex items-center justify-center rounded-full border ${rankStyles.border} text-[10px] font-bold ${rankStyles.text}`}>
          {rank}
        </div>
        <div className="flex items-center gap-3">
          <div className={`relative w-8 h-8 shrink-0 ${isWinner ? 'winner-avatar' : ''}`}>
            <div className="w-full h-full bg-[#3B82F6]/20 rounded-full border-2 border-white flex items-center justify-center overflow-hidden">
              {isWinner ? (
                <div className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center">
                  <i className="fas fa-crown text-white text-[8px]" />
                </div>
              ) : (
                <div className="w-8 h-8 rounded-full border-[3px] border-black flex items-center justify-center shrink-0 bg-[#96A7FF]" />
              )}
            </div>
            {isWinner && (
              <div className="absolute -bottom-1 -left-1 -right-1 bg-red-500 text-white text-[5px] font-black py-0.5 rounded text-center uppercase">
                Winner
              </div>
            )}
          </div>
          <div>
            <p className="text-[14px] font-black text-gray-800">{name}</p>
            <div className="flex text-[7px] text-yellow-500 mt-0.5 gap-0.5">
              {[...Array(stars)].map((_, i) => (
                <i key={i} className="fas fa-star" />
              ))}
            </div>
          </div>
        </div>
      </div>
      <span className="text-[12px] font-medium font-[500] text-[#D0BD46]">
        {score}
      </span>
    </div>
  );
}