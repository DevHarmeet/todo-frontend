import React from "react";
import { BsClipboard2 } from "react-icons/bs";

export default function EmptyState() {
  return (
    <div className="mt-8 border-t border-[#333333] pt-16 flex flex-col items-center">
      <BsClipboard2 className="text-4xl text-[#808080]" />
      <div className="mt-4 text-center text-[#808080]">
        <p className="font-bold text-base leading-[22.4px]">
          You don't have any tasks registered yet.
        </p>
        <p className="text-base leading-[22.4px]">
          Create tasks and organize your to-do items.
        </p>
      </div>
    </div>
  );
}
