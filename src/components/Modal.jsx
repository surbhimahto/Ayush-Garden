import React, { useEffect } from "react";

const Modal = ({ children, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  return (
    <>
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 z-40" 
        onClick={onClose} 
        aria-hidden="true"
      ></div>

      <div className="fixed inset-0 z-50 flex items-center justify-center">
        <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md relative">
          <button 
            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700" 
            onClick={onClose} 
            aria-label="Close Modal"
          >
            &times;
          </button>
          {children}
        </div>
      </div>
    </>
  );
};

export default Modal;
