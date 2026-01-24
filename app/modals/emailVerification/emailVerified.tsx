import React from "react";
import Image from "next/image";
import closeIcon from "../assets/images/x-close.png";
import greenTickIcon from "../assets/images/GreenTick.png";

interface EmailVerifiedProps {
  isOpen: boolean;
  onClose: () => void;
}

const EmailVerified: React.FC<EmailVerifiedProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center"
        onClick={onClose}
      >
        {/* Modal */}
        <div
          className="bg-white rounded-xl p-8 shadow-xl relative z-50 w-120 h-80 m-4 flex flex-col justify-center items-center"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 cursor-pointer"
          >
            <Image src={closeIcon} alt="close icon" />
          </button>

          {/* Icon */}
          <div className="flex justify-center">
            <div className="w-20 h-20 flex items-center justify-center rounded-full">
              <Image src={greenTickIcon} alt="success icon" />
            </div>
          </div>

          {/* Content */}
          <div className="text-center mt-3">
            <h2 className="text-[36px] font-semibold text-[#202939] manrope-font">
              Email Verified
            </h2>
            <p className="text-[16px] text-[#697586] w-80  satoshi-font">
              Your mail account has been successfully verified.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default EmailVerified;
