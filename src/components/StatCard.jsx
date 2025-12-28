import React from "react";

/**
 * StatCard Component - Display a single statistic card
 * @param {React.ReactNode} icon - Icon element from lucide-react
 * @param {string|number} value - Statistic value to display
 * @param {string} label - Label/description for the statistic
 * @param {string} color - Tailwind color class for icon background
 * @returns {React.ReactNode} - StatCard component
 */
const StatCard = ({ icon, value, label, color }) => (
  <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700 flex flex-col items-center justify-center text-center hover:border-orange-500/50 transition-colors group">
    <div
      className={`mb-3 p-3 bg-slate-700/50 rounded-full ${color} group-hover:scale-110 transition-transform`}
    >
      {icon}
    </div>
    <div className="text-3xl font-black text-white mb-1">{value}</div>
    <div className="text-slate-400 text-xs font-bold uppercase tracking-wider">
      {label}
    </div>
  </div>
);

export default StatCard;
