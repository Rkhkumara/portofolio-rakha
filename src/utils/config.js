// Konfigurasi Username GitHub
export const GITHUB_USERNAME = "Rkhkumara";

// Helper untuk warna bahasa pemrograman
export const getLangColor = (lang) => {
  const colors = {
    JavaScript: "bg-yellow-400",
    TypeScript: "bg-blue-400",
    HTML: "bg-orange-500",
    CSS: "bg-blue-500",
    Python: "bg-green-500",
    PHP: "bg-purple-500",
    Java: "bg-red-500",
    "Jupyter Notebook": "bg-orange-400",
  };
  return colors[lang] || "bg-slate-400";
};
