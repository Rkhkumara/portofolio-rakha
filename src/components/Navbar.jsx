import React, { useState } from "react";
import { Menu, X } from "lucide-react";

/**
 * Navbar Component - Navigation bar with responsive menu
 * @param {string} activeSection - Currently active section ID (for highlighting)
 * @returns {React.ReactNode} - Navbar component
 */
const Navbar = ({ activeSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navItems = [
    { label: "Home", id: "home" },
    { label: "Tentang", id: "tentang" },
    { label: "Keahlian", id: "keahlian" },
    { label: "GitHub", id: "github" },
    { label: "Proyek", id: "proyek" },
    { label: "Kontak", id: "kontak", isButton: true },
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-100 transition-all duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a
              href="#home"
              className="text-2xl font-black text-orange-600 tracking-tight hover:text-orange-700 transition-colors"
            >
              RAKHA<span className="text-slate-800">.</span>
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-1">
              {navItems.map((item) => {
                if (item.isButton) {
                  return (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      className={`ml-4 px-5 py-2 rounded-full text-sm font-bold transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5 ${
                        activeSection === item.id
                          ? "text-white bg-orange-700"
                          : "text-white bg-orange-600 hover:bg-orange-700"
                      }`}
                    >
                      {item.label}
                    </a>
                  );
                }
                return (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                      activeSection === item.id
                        ? "text-orange-600 bg-orange-50"
                        : "text-slate-600 hover:text-orange-600 hover:bg-gray-50"
                    }`}
                  >
                    {item.label}
                  </a>
                );
              })}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-500 hover:text-orange-600 hover:bg-orange-50 focus:outline-none transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg absolute w-full">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navItems.map((item) => {
              if (item.isButton) {
                return (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={() => setIsMenuOpen(false)}
                    className={`block mt-4 px-3 py-3 rounded-lg text-base font-bold text-center transition-colors ${
                      activeSection === item.id
                        ? "text-white bg-orange-700"
                        : "text-white bg-orange-600 hover:bg-orange-700"
                    }`}
                  >
                    {item.label}
                  </a>
                );
              }
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-3 py-3 rounded-lg text-base font-medium transition-colors ${
                    activeSection === item.id
                      ? "text-orange-600 bg-orange-50"
                      : "text-slate-600 hover:text-orange-600 hover:bg-orange-50"
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
