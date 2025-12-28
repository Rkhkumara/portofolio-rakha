import React, { useEffect } from "react";
import { X } from "lucide-react";

/**
 * Modal Component untuk menampilkan gambar sertifikasi
 * @param {boolean} isOpen - Status modal (open/close)
 * @param {function} onClose - Function untuk menutup modal
 * @param {string} imageSrc - Path ke gambar yang akan ditampilkan
 * @param {string} title - Judul sertifikasi
 * @returns {React.ReactNode} - Modal component
 */
const CertModal = ({ isOpen, onClose, imageSrc, title }) => {
  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Close modal on Escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

  if (!isOpen || !imageSrc) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative max-w-5xl w-full max-h-[90vh] bg-white rounded-2xl shadow-2xl overflow-hidden animate-scaleIn"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-slate-200 bg-gradient-to-r from-orange-50 to-white">
          <h3 className="text-lg font-bold text-slate-900">{title}</h3>
          <button
            onClick={onClose}
            className="p-2 rounded-lg text-slate-500 hover:text-slate-900 hover:bg-slate-100 transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500"
            aria-label="Tutup modal"
          >
            <X size={24} />
          </button>
        </div>

        {/* Image/PDF Container */}
        <div className="relative w-full bg-slate-100 overflow-auto max-h-[calc(90vh-80px)]">
          {imageSrc.includes(".pdf") || imageSrc.includes("pdf") ? (
            <iframe
              src={imageSrc}
              className="w-full h-[80vh] border-0"
              title={title}
              type="application/pdf"
            />
          ) : (
            <img
              src={imageSrc}
              alt={title}
              className="w-full h-auto object-contain"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default CertModal;
