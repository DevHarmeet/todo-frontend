"use client";

import React, { useState } from "react";
import { IoMdAdd } from "react-icons/io";
import { IoArrowBack } from "react-icons/io5";
import { FaCheck } from "react-icons/fa";
import { TASK_COLORS } from "@/constants/colors";
import { TaskFormProps } from "@/types/props";

export default function TaskForm({
  initialData = { title: "", color: "" },
  onSubmit,
  onCancel,
  buttonLabel,
}: TaskFormProps) {
  const [title, setTitle] = useState(initialData.title);
  const [color, setColor] = useState(initialData.color);

  const isComplete = title.trim() && color;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isComplete) return;

    try {
      await onSubmit({ title, color });
    } catch (error) {
      console.error("Failed to submit form", error);
    }
  };

  return (
    <div className="w-full">
      <button
        onClick={onCancel}
        className="flex items-center gap-2 text-[#4EA8DE] mb-8"
      >
        <IoArrowBack className="text-xl" />
        Back
      </button>

      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="space-y-2">
          <label className="block text-[#4EA8DE] text-sm">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Ex. Brush your teeth"
            className="w-full h-[52px] px-4 rounded-lg bg-[#262626] text-white border border-[#0D0D0D] focus:border-[#4EA8DE] focus:outline-none placeholder:text-[#808080]"
          />
        </div>

        <div className="space-y-2">
          <label className="block text-[#4EA8DE] text-sm">Color</label>
          <div className="flex gap-2 flex-wrap">
            {TASK_COLORS.map((clr) => (
              <button
                key={clr}
                type="button"
                data-testid={`color-button-${clr.substring(1)}`}
                onClick={() => setColor(clr)}
                className={`w-8 h-8 rounded-full border-2 ${
                  color === clr ? "border-white" : "border-transparent"
                }`}
                style={{ backgroundColor: clr }}
              />
            ))}
          </div>
        </div>

        <button
          type="submit"
          className={`w-full flex justify-center items-center gap-2 h-[52px] rounded-lg transition-colors ${
            isComplete
              ? "bg-[#1E6F9F] hover:bg-[#1E6F9F]/90"
              : "bg-[#1E6F9F]/50 cursor-not-allowed"
          } text-white`}
        >
          {isComplete ? "Save" : "Add Task"}
          <div className="w-6 h-6 rounded-full bg-[#1E6F9F] border-2 border-white flex items-center justify-center">
            {isComplete ? (
              <FaCheck size={12} />
            ) : (
              <IoMdAdd className="text-lg" />
            )}
          </div>
        </button>
      </form>
    </div>
  );
}
