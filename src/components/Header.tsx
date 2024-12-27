import React from "react";
import { FaRocket } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";

interface HeaderProps {
  onCreateClick?: () => void;
}

export default function Header({ onCreateClick }: HeaderProps) {
  return (
    <div className="flex flex-col items-center bg-[#0D0D0D]">
      <div className="w-full max-w-[1120px] flex flex-col items-center pt-[72px] pb-[50px]">
        <div className="flex items-center gap-3">
          <FaRocket className="text-[#4EA8DE] text-3xl" />
          <h1 className="text-[40px] font-black">
            <span className="text-[#4EA8DE]">Todo</span>
            <span className="text-[#5E60CE]"> App</span>
          </h1>
        </div>
      </div>
      {onCreateClick && (
        <div className="w-full bg-[#0D0D0D]">
          <div className="max-w-[736px] mx-auto px-4">
            <button
              onClick={onCreateClick}
              className="w-full flex justify-center items-center gap-2 bg-[#1E6F9F] hover:bg-[#1E6F9F]/90 text-white h-[52px] rounded-lg translate-y-1/2"
            >
              Create Task
              <div className="w-6 h-6 rounded-full bg-[#1E6F9F] border-2 border-white flex items-center justify-center">
                <IoMdAdd className="text-lg" />
              </div>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
