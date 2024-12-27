import React from "react";

interface TaskCounterProps {
  total: number;
  completed: number;
}

export default function TaskCounter({ total, completed }: TaskCounterProps) {
  return (
    <div className="flex justify-between items-center mb-4">
      <div className="flex gap-2 items-center">
        <span className="text-[#4EA8DE] font-bold">Tasks</span>
        <span className="bg-[#333333] text-[#D9D9D9] px-2 py-0.5 rounded-full text-xs font-bold">
          {total}
        </span>
      </div>
      <div className="flex gap-2 items-center">
        <span className="text-[#8284FA] font-bold">Completed</span>
        <span className="bg-[#333333] text-[#D9D9D9] px-2 py-0.5 rounded-full text-xs font-bold">
          {completed} of {total}
        </span>
      </div>
    </div>
  );
}
